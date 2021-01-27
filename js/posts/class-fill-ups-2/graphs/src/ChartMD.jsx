const {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
  Crosshair,
  LabelSeries
} = reactVis;

const { useState } = React;

const {
  Dropdown,
  DropdownButton,
  MenuItem,
  Image,
  FormControl
} = ReactBootstrap;

/* Size of graph on screen */
const screenScale = 0.8;
const graphSize =
  screenScale * screen.width > 1000 ? 1000 : screenScale * screen.width;

/* max classes that can be shown on the graph and the colors of those classes' lines */
const max_classes = 3;
const colors = ["#2e59a8", "#73a2c6", "#0099CC"];

/* array of class names */
let CLASSES = [];
/* array of % of class full for every time (json objects) */
let DATA = [];
/* array of # of class full for every time (json objects) */
let SEATS_FILLED = [];
/* dates scraped */
let DATES = [];
/* array of total seats for ecah class */
let TOTAL_SEATS = [];
/* index of the time of second pass */
let Crazy_FilledClasses = [];
const YEARS = ["Junior", "Sophomore", "Freshman"];
const FIRST_PASS_DATES = [31, 102, 122];
const SECOND_PASS_DATES = [199, 270, 290];
const SECOND_PASS_DATE = 168;
const PASS_DATES = FIRST_PASS_DATES.concat(SECOND_PASS_DATE, SECOND_PASS_DATES);

const LAST_DATE = 305;

/* custom menu component to allow searching for classes */
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={e => setValue(e.target.value)}
          value={value}
        />
        <div style={{ overflowY: "scroll", height: "200px" }}>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child =>
                !value ||
                child.props.children.toLowerCase().includes(value.toLowerCase())
            )}
          </ul>
        </div>
      </div>
    );
  }
);

/* tick formatter for the X axis labels */
function tickFormatter(t) {
  return (
    <tspan>
      <tspan x="0" dy="1em">
        {DATES[t].split(" ")[0]} {DATES[t].split(" ")[1]}
      </tspan>
      <tspan x="0" dy="1em">
        {DATES[t].split(" ")[2]} {DATES[t].split(" ")[3]}
      </tspan>
    </tspan>
  );
}

/*
Main things we are rendering:
Dropdown Menu (to select classes)
Class boxes (click on them to delete a class)
Chart
  labels
  lines of classes
  special lines (second pass, full)
  Crosshair
Class Info Boxes
*/
class Chart extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false,
      classOnGraph: [],
      mouseY: 0,
      showClass: [],
      dropdownClasses: [],
      removeDropdownClasses: [],
      numClassesShown: 0,
      isMobile: graphSize == screenScale * screen.width ? true : false,
      graphSize: graphSize,
      //THIS LOADING IS HARDCODED BY # OF FILES WE Load
      loading: 6,
      showAcademicYearLines: true,
      classHeader: ""
    };
    this._showAcademicYearLines = this._showAcademicYearLines.bind(this);
  }

  /* updates the dimensions of the chart based on screen size */
  updateDimensions() {
    this.setState({
      graphSize:
        screenScale * screen.width > 1000 ? 1000 : screenScale * screen.width
    });
    this.setState({
      isMobile:
        this.state.graphSize == screenScale * screen.width ? true : false
    });
  }

  /* these fetch functions get the data from their json files */
  fetchData() {
    fetch("../../../../datasets/class-fill-ups-2/pct_data.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        text = JSON.stringify(text, function(key, value) {
          // limit precision of floats
          if (typeof value === "number") {
            return parseFloat(value.toFixed(2));
          }
          return value;
        });
        text = JSON.parse(text);
        DATA = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchClasses() {
    fetch("../../../../datasets/class-fill-ups-2/class_names.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        CLASSES = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchSeats() {
    fetch("../../../../datasets/class-fill-ups-2/seats_filled_data.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        SEATS_FILLED = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchDates() {
    fetch("../../../../datasets/class-fill-ups-2/dates.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        DATES = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchTotalSeats() {
    fetch("../../../../datasets/class-fill-ups-2/total_seats.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        TOTAL_SEATS = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchCrazyFilledClasses() {
    fetch("../../../../datasets/class-fill-ups-2/CrazyFilledClasses.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        Crazy_FilledClasses = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  dataLoaded() {
    let loading = this.state.loading - 1;
    this.setState({ loading: loading });
    if (loading == 0) {
      this._createDropdownClasses();
    }
  }

  componentDidMount() {
    this._isMounted = true;
    const fetchClasses = this.fetchClasses();
    const fetchData = this.fetchData();
    const fetchDates = this.fetchDates();
    const fetchSeats = this.fetchSeats();
    const fetchTotalSeats = this.fetchTotalSeats();
    const fetchCrazyFilledClasses = this.fetchCrazyFilledClasses();
    Promise.all([
      fetchClasses,
      fetchData,
      fetchDates,
      fetchSeats,
      fetchTotalSeats,
      fetchCrazyFilledClasses
    ]);
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  /* adds all the classes to the dropdown menu */
  _createDropdownClasses() {
    let showClass = new Array(CLASSES.length).fill(false);
    this.setState({ showClass: showClass });

    let dropdownClasses = this.state.dropdownClasses;
    for (let i = 0; i < CLASSES.length; i++) {
      let div = (
        <Dropdown.Item key={CLASSES[i]} onClick={this._showClass.bind(null, i)}>
          {CLASSES[i]}
        </Dropdown.Item>
      );
      dropdownClasses.push(div);
    }
    this.setState({ dropdownClasses: dropdownClasses });
  }

  /* used to track mouse position for the crosshair */
  _onNearestX = (value, { index }) => {
    this.setState({ classOnGraph: DATA.map(d => d[index]) });
    //THIS 270 IS HARDCODED IDK WHY WE NEED TO SUBTRACT BY 270
    this.setState({ mouseY: window.event.clientY - 270 });
  };

  /* shows the classes selected */
  _showClass = class_num => {
    let { numClassesShown, showClass, isMobile } = this.state;
    let removeDropdownClasses = [];

    let displayMobile = isMobile ? "" : "inline";
    if (numClassesShown < max_classes) {
      if (showClass[class_num] == false) {
        showClass[class_num] = true;
        numClassesShown += 1;
        let xbutton = (
          <Image
            src="../../../../img/posts/class-fill-ups/xbutton.png"
            roundedCircle
          />
        );
        let colorNum = 0;
        for (let i = 0; i < CLASSES.length; i++) {
          if (showClass[i]) {
            let div = (
              <div
                style={{
                  minWidth: 120,
                  borderRadius: "10px",
                  border: "2px solid",
                  borderColor: colors[colorNum],
                  padding: 10,
                  marginBottom: 10,
                  display: displayMobile,
                  marginRight: 50
                }}
              >
                {CLASSES[i]}
                <a
                  style={{ paddingLeft: 10, cursor: "pointer" }}
                  onClick={this._removeClass.bind(null, i)}
                >
                  {xbutton}
                </a>
              </div>
            );
            removeDropdownClasses.push(div);
            colorNum++;
          }
        }

        let date_filled = DATA[class_num].findIndex(x => x.y == 100);
        let waitlisted = (TOTAL_SEATS[class_num] == -1);
        // let classHeader =
        //   date_filled == -1 ? (
        //     <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        //       {CLASSES[class_num]} never filled up!
        //     </h3>
        //   ) : (
        //     <h3 style={{ textAlign: "center", marginTop: "20px" }}>
        //       {CLASSES[class_num]} filled up after {DATES[date_filled]}
        //     </h3>
        //   );
        let classHeader = <p> undeclared </p>
        if (date_filled == -1) {
          classHeader =
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            {CLASSES[class_num]} never filled up!
          </h3>
        } else if (Crazy_FilledClasses.includes(class_num) ){
          classHeader =
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            {CLASSES[class_num]} filled up after {DATES[date_filled]} <br />
            Percent Full increased over 50% in 24 hours
          </h3>
        } else if (waitlisted == -1) {
          classHeader =
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            {CLASSES[class_num]} was always waitlisted!
          </h3>
        } else {
          classHeader =
          <h3 style={{ textAlign: "center", marginTop: "20px" }}>
            {CLASSES[class_num]} filled up after {DATES[date_filled]}
          </h3>
        }


        this.setState({
          showClass: showClass,
          numClassesShown: numClassesShown,
          removeDropdownClasses: removeDropdownClasses,
          classHeader: classHeader
        });
      }
    }
  };

  /* removes a class when its x is clicked */
  _removeClass = class_num => {
    let { numClassesShown, showClass, isMobile, classHeader } = this.state;
    let removeDropdownClasses = [];

    showClass[class_num] = false;
    numClassesShown -= 1;
    let aClassShown = false;

    let displayMobile = isMobile ? "" : "inline";
    let xbutton = (
      <Image
        src="../../../../img/posts/class-fill-ups/xbutton.png"
        roundedCircle
      />
    );
    let colorNum = 0;
    for (let i = 0; i < CLASSES.length; i++) {
      if (showClass[i]) {
        aClassShown = true;
        let div = (
          <div
            style={{
              minWidth: 120,
              borderRadius: "10px",
              border: "2px solid",
              borderColor: colors[colorNum],
              padding: 10,
              marginBottom: 10,
              display: displayMobile,
              marginRight: 50
            }}
          >
            {CLASSES[i]}
            <a
              style={{ paddingLeft: 10, cursor: "pointer" }}
              onClick={this._removeClass.bind(null, i)}
            >
              {xbutton}
            </a>
          </div>
        );
        removeDropdownClasses.push(div);
        colorNum++;
      }
    }

    if (!aClassShown) {
      classHeader = null;
    }
    this.setState({
      showClass: showClass,
      numClassesShown: numClassesShown,
      removeDropdownClasses: removeDropdownClasses,
      classHeader: classHeader
    });
  };

  _showAcademicYearLines() {
    let showAcademicYearLines = this.state.showAcademicYearLines;
    showAcademicYearLines = !showAcademicYearLines;
    this.setState({ showAcademicYearLines: showAcademicYearLines });
  }

  render() {
    const { useCanvas } = this.state;
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const lineSize = "4px";
    const {
      classOnGraph,
      mouseY,
      showClass,
      dropdownClasses,
      removeDropdownClasses,
      isMobile,
      graphSize,
      loading,
      showAcademicYearLines,
      classHeader
    } = this.state;

    let classInfoBox = [];
    let lines = [];
    let academicYearLines = [];
    let classShown = false;
    let colorNum = 0;

    /* creates all the lines of the classes */
    for (let i = 0; i < CLASSES.length; i++) {
      if (showClass[i]) {
        let div = (
          <Line
            key={CLASSES[i]}
            strokeWidth={lineSize}
            data={DATA[i]}
            onNearestX={this._onNearestX}
            color={colors[colorNum]}
          />
        );
        lines.push(div);
        classShown = true;
        colorNum++;
      }
    }

    /* creates the class info box on the right */
    if (classOnGraph[0]) {
      let padding = 50;
      let div = (
        <div style={{ paddingLeft: padding }}>
          {isMobile ? (
            <h4 style={{ width: "max-content" }}>
              {DATES[classOnGraph[0].x]} passed
            </h4>
          ) : (
            <h2 style={{ width: "max-content" }}>
              {DATES[classOnGraph[0].x]} passed
            </h2>
          )}
        </div>
      );
      classInfoBox.push(div);

      colorNum = 0;
      for (let i = 0; i < CLASSES.length; i++) {
        if (showClass[i]) {
          let date_filled = DATA[i].findIndex(x => x.y == 100);
          let waitlisted = (TOTAL_SEATS[i] == -1);
          let div = (
            <div style={{ paddingLeft: padding }}>
              {isMobile ? (
                <h4 style={{ width: "max-content", color: colors[colorNum] }}>
                  {CLASSES[i]}
                </h4>
              ) : (
                <h3 style={{ width: "max-content", color: colors[colorNum] }}>
                  {CLASSES[i]}
                </h3>
              )}
              <p style={{ marginBottom: "0px" }}>
                Percent Full: {classOnGraph[i].y}%
              </p>
              <p style={{ marginBottom: "0px" }}>
                Seats Filled: {SEATS_FILLED[i][classOnGraph[0].x].y}
              </p>
              <p style={{ marginBottom: "0px" }}>
                Total Seats: {TOTAL_SEATS[i]}
              </p>
              {date_filled == -1 ? (
                <p>{CLASSES[i]} never filled up!</p>
              ) : (
                (waitlisted != -1) ? (
                  <p>
                    {CLASSES[i]} filled up after {DATES[date_filled]}
                  </p>
                ) : (
                  <p>
                    {CLASSES[i]} was always waitlisted
                  </p>
                )
              )}
            </div>
          );
          classInfoBox.push(div);
          colorNum++;
        }
      }
    }

    if (showAcademicYearLines) {
      for (let i = 0; i < YEARS.length; i++) {
        academicYearLines.push(
          <Line
            key={"firstPass" + YEARS[i]}
            className={"firstPass" + YEARS[i]}
            color="gray"
            style={{
              strokeDasharray: "2 2"
            }}
            data={[
              { x: FIRST_PASS_DATES[i], y: 0 },
              { x: FIRST_PASS_DATES[i], y: 100 }
            ]}
          />
        );
        academicYearLines.push(
          <LabelSeries
            key={"firstPass" + YEARS[i] + "Label"}
            className={"firstPass" + YEARS[i] + "Label"}
            labelAnchorX="middle"
            style={{ opacity: 0.6 }}
            data={[
              {
                x: FIRST_PASS_DATES[i],
                y: 74 - 8 * i,
                label: YEARS[i]
              }
            ]}
          />
        );
        academicYearLines.push(
          <Line
            key={"secondPass" + YEARS[i]}
            className={"secondPass" + YEARS[i]}
            color="gray"
            style={{
              strokeDasharray: "2 2"
            }}
            data={[
              { x: SECOND_PASS_DATES[i], y: 0 },
              { x: SECOND_PASS_DATES[i], y: 100 }
            ]}
          />
        );
        academicYearLines.push(
          <LabelSeries
            key={"secondPass" + YEARS[i] + "Label"}
            className={"secondPass" + YEARS[i] + "Label"}
            labelAnchorX="middle"
            style={{ opacity: 0.6 }}
            data={[
              {
                x: SECOND_PASS_DATES[i],
                y: 74 - 8 * 4 - 8 * i,
                label: YEARS[i]
              }
            ]}
          />
        );
      }
      academicYearLines.push(
        <Line
          key="secondPass"
          className="secondPass"
          color="gray"
          style={{
            strokeDasharray: "2 2"
          }}
          data={[
            { x: SECOND_PASS_DATE, y: 0 },
            { x: SECOND_PASS_DATE, y: 100 }
          ]}
        />
      );
      academicYearLines.push(
        <LabelSeries
          key="secondPassLabel"
          className="secondPassLabel"
          labelAnchorX="middle"
          style={{ opacity: 0.6 }}
          data={[
            {
              x: SECOND_PASS_DATE,
              y: 50,
              label: "Second Pass"
            }
          ]}
        />
      );
    }

    /* if all 5 data files haven't been loaded yet, it shows some LOADING text */
    return loading > 0 ? (
      <h1>Graph loading</h1>
    ) : (
      /* dropdown menu */
      <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
        <div id="dropdown" style={{ paddingBottom: "15px" }}>
          <Dropdown>
            <Dropdown.Toggle>Choose a Class</Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-basic-button" as={CustomMenu}>
              {dropdownClasses}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* Display classes selected*/}
        {removeDropdownClasses}

        {/* Class Header*/}
        {classHeader}

        {/* The Chart*/}
        <div
          style={{
            paddingTop: "30px",
            paddingLeft: "30px",
            display: "flex",
            justifyContent: "flex-start",
            width: graphSize,
            height: graphSize / 2
          }}
        >
          <FlexibleXYPlot>
            <HorizontalGridLines />
            <VerticalGridLines />
            {isMobile ? null : (
              <XAxis tickValues={PASS_DATES} tickFormat={tickFormatter} />
            )}
            <YAxis />
            {isMobile ? null : (
              <ChartLabel
                text="Time passed"
                className="alt-x-label"
                includeMargin={false}
                xPercent={0.001}
                yPercent={1.082}
                style={{
                  fontWeight: "bold"
                }}
              />
            )}
            {isMobile ? null : (
              <ChartLabel
                text="Percentage Full"
                className="alt-y-label"
                includeMargin={false}
                xPercent={0.1}
                yPercent={0.08}
                style={{
                  textAnchor: "end",
                  fontWeight: "bold"
                }}
              />
            )}
            {/* Display lines of classes */}
            {lines}
            {/* Display the class full (100%) line */}
            <Line
              key="classFull"
              className="classFull"
              color="#F08080"
              strokeWidth="6px"
              data={[
                { x: 0, y: 100 },
                { x: LAST_DATE, y: 100 }
              ]}
            />
            {/* Display the academic year lines*/}
            {isMobile ? null : academicYearLines}
            {/* xAxis Line to make sure base line is always 0 */}
            <Line
              key="xAxis"
              className="xAxis"
              style={{ opacity: 0 }}
              data={[
                { x: 0, y: 0 },
                { x: LAST_DATE, y: 0 }
              ]}
            />

            {/* Display crosshair if a class has been selected */}
            {classShown ? (
              <Crosshair
                values={classOnGraph}
                itemsFormat={values => {
                  let shownLines = [];
                  for (let i = 0; i < CLASSES.length; i++) {
                    if (showClass[i]) {
                      let line = {
                        title: CLASSES[i],
                        value: classOnGraph[i].y + "%"
                      };
                      shownLines.push(line);
                    }
                  }
                  return shownLines;
                }}
                titleFormat={values => {
                  return { title: "Day", value: DATES[classOnGraph[0].x] };
                }}
                style={{
                  line: {},
                  box: { position: "absolute", top: mouseY },
                  title: {}
                }}
              ></Crosshair>
            ) : null}
          </FlexibleXYPlot>
          {/* Display class info box if class been shown*/}
          {classShown ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "nowrap"
              }}
            >
              {classInfoBox}
            </div>
          ) : null}
        </div>
        {isMobile ? null : (
          <button
            style={{
              boxShadow: "inset 0px 1px 0px 0px #97c4fe",
              background:
                "linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)",
              backgroundColor: "#3d94f6",
              borderRadius: "6px",
              border: "1px solid #337fed",
              display: "inline-block",
              color: "#ffffff",
              padding: "6px 24px"
            }}
            onClick={this._showAcademicYearLines}
          >
            Toggle pass times
          </button>
        )}
      </div>
    );
  }
}

//export default Chart;
ReactDOM.render(<Chart />, document.getElementById("chartMD_winter"));
