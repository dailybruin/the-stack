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
const colors = ["#2e59a8", "#73a2c6", "#8abccf", "#ffffe0"];

/* % of how full a class is for every hour */
const DATA = [
  [
    { x: 0, y: 0 },
    { x: 1, y: 15 },
    { x: 2, y: 33 },
    { x: 3, y: 70 },
    { x: 4, y: 100 },
    { x: 5, y: 100 },
    { x: 6, y: 100 }
  ],
  [
    { x: 0, y: 5 },
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 65 },
    { x: 4, y: 80 },
    { x: 5, y: 100 },
    { x: 6, y: 100 }
  ],
  [
    { x: 0, y: 3 },
    { x: 1, y: 20 },
    { x: 2, y: 30 },
    { x: 3, y: 40 },
    { x: 4, y: 60 },
    { x: 5, y: 80 },
    { x: 6, y: 100 }
  ],
  [
    { x: 0, y: 10 },
    { x: 1, y: 11 },
    { x: 2, y: 15 },
    { x: 3, y: 25 },
    { x: 4, y: 35 },
    { x: 5, y: 45 },
    { x: 6, y: 75 }
  ],
  [
    { x: 0, y: 0 },
    { x: 1, y: 8 },
    { x: 2, y: 12 },
    { x: 3, y: 16 },
    { x: 4, y: 24 },
    { x: 5, y: 36 },
    { x: 6, y: 30 }
  ]
];

const SEATS_LEFT = [
  [
    { x: 0, y: 16 },
    { x: 1, y: 16 },
    { x: 2, y: 15 },
    { x: 3, y: 14 },
    { x: 4, y: 13 },
    { x: 5, y: 12 },
    { x: 6, y: 11 }
  ],
  [
    { x: 0, y: 26 },
    { x: 1, y: 26 },
    { x: 2, y: 25 },
    { x: 3, y: 24 },
    { x: 4, y: 23 },
    { x: 5, y: 22 },
    { x: 6, y: 21 }
  ],
  [
    { x: 0, y: 36 },
    { x: 1, y: 36 },
    { x: 2, y: 35 },
    { x: 3, y: 34 },
    { x: 4, y: 33 },
    { x: 5, y: 32 },
    { x: 6, y: 31 }
  ],
  [
    { x: 0, y: 46 },
    { x: 1, y: 46 },
    { x: 2, y: 45 },
    { x: 3, y: 44 },
    { x: 4, y: 43 },
    { x: 5, y: 42 },
    { x: 6, y: 41 }
  ],
  [
    { x: 0, y: 56 },
    { x: 1, y: 56 },
    { x: 2, y: 55 },
    { x: 3, y: 54 },
    { x: 4, y: 53 },
    { x: 5, y: 52 },
    { x: 6, y: 51 }
  ]
];

/* hours scraped */
const DATES = [
  "0th hour",
  "1st hour",
  "2nd hour",
  "2nd day 1st hour",
  "April",
  "May",
  "June"
];
const CLASSES = ["Class A", "Class B", "Class C", "stats10", "iLoveKeith"];
/* max # of seats for each class */
const TOTAL_SEATS = [10, 20, 30, 40, 50];
/* index of the time of second pass */
const SECOND_PASS_DATE = 3;

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
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            child =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false,
      classOnGraph: [],
      mouseY: 0,
      showClass: new Array(CLASSES.length).fill(false),
      dropdownClasses: [],
      removeDropdownClasses: [],
      numClassesShown: 0,
      isMobile: graphSize == screenScale * screen.width ? true : false,
      graphSize: graphSize
    };
  }

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

  componentDidMount() {
    this._createDropdownClasses();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  _createDropdownClasses() {
    let dropdownClasses = this.state.dropdownClasses;
    for (let i = 0; i < CLASSES.length; i++) {
      let div = (
        <Dropdown.Item onClick={this._showClass.bind(null, i)}>
          {CLASSES[i]}
        </Dropdown.Item>
      );
      dropdownClasses.push(div);
    }
    this.setState({ dropdownClasses: dropdownClasses });
  }

  _onNearestX = (value, { index }) => {
    this.setState({ classOnGraph: DATA.map(d => d[index]) });
    this.setState({ mouseY: window.event.clientY });
  };

  _showClass = class_num => {
    let numClassesShown = this.state.numClassesShown;
    let showClass = this.state.showClass;
    let removeDropdownClasses = [];
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

        for (let i = 0; i < CLASSES.length; i++) {
          if (showClass[i]) {
            let div = (
              <div
                style={{
                  width: 120,
                  border: "1px solid brown",
                  padding: 5,
                  marginBottom: 10
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
          }
        }

        this.setState({
          showClass: showClass,
          numClassesShown: numClassesShown,
          removeDropdownClasses: removeDropdownClasses
        });
      }
    }
  };

  _removeClass = class_num => {
    let numClassesShown = this.state.numClassesShown;
    let showClass = this.state.showClass;
    let removeDropdownClasses = [];

    showClass[class_num] = false;
    numClassesShown -= 1;

    let xbutton = (
      <Image
        src="../../../../img/posts/class-fill-ups/xbutton.png"
        roundedCircle
      />
    );
    for (let i = 0; i < CLASSES.length; i++) {
      if (showClass[i]) {
        let div = (
          <div
            style={{
              width: 120,
              border: "1px solid brown",
              padding: 5,
              marginBottom: 10
            }}
          >
            {CLASSES[i]}
            <a
              style={{ paddingLeft: 10 }}
              onClick={this._removeClass.bind(null, i)}
            >
              {xbutton}
            </a>
          </div>
        );
        removeDropdownClasses.push(div);
      }
    }
    this.setState({
      showClass: showClass,
      numClassesShown: numClassesShown,
      removeDropdownClasses: removeDropdownClasses
    });
  };

  render() {
    const { useCanvas } = this.state;
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const lineSize = "4px";
    const classOnGraph = this.state.classOnGraph;
    const mouseY = this.state.mouseY;
    const showClass = this.state.showClass;
    const dropdownClasses = this.state.dropdownClasses;
    const removeDropdownClasses = this.state.removeDropdownClasses;
    const isMobile = this.state.isMobile;
    const graphSize = this.state.graphSize;

    let classInfoBox = [];
    let lines = [];
    let classShown = false;
    let colorNum = 0;

    for (let i = 0; i < CLASSES.length; i++) {
      if (showClass[i]) {
        let div = (
          <Line
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

    if (classOnGraph[0]) {
      let padding = 50;
      let div = (
        <div style={{ paddingLeft: padding }}>
          {isMobile ? (
            <h4 style={{ width: "max-content", color }}>
              {DATES[classOnGraph[0].x]}
            </h4>
          ) : (
            <h2 style={{ width: "max-content" }}>{DATES[classOnGraph[0].x]}</h2>
          )}
        </div>
      );
      classInfoBox.push(div);

      colorNum = 0;
      for (let i = 0; i < CLASSES.length; i++) {
        if (showClass[i]) {
          let div = (
            <div style={{ paddingLeft: padding }}>
              {isMobile ? (
                <h4 style={{ width: "max-content", color: colors[colorNum] }}>
                  {CLASSES[i]}
                </h4>
              ) : (
                <h2 style={{ width: "max-content", color: colors[colorNum] }}>
                  {CLASSES[i]}
                </h2>
              )}
              <p style={{ marginBottom: "0px" }}>
                Percent Full: {classOnGraph[i].y}%
              </p>
              <p style={{ marginBottom: "0px" }}>
                Seats Left: {SEATS_LEFT[i][classOnGraph[0].x].y}
              </p>
              <p>Total Seats: {TOTAL_SEATS[i]}</p>
            </div>
          );
          classInfoBox.push(div);
          colorNum++;
        }
      }
    }

    return (
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div id="dropdown" style={{ paddingBottom: "15px" }}>
          <Dropdown>
            <Dropdown.Toggle>Choose a Class</Dropdown.Toggle>
            <Dropdown.Menu id="dropdown-basic-button" as={CustomMenu}>
              {dropdownClasses}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {removeDropdownClasses}
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
            <XAxis tickFormat={v => DATES[v]} />
            <YAxis />
            {isMobile ? null : (
              <ChartLabel
                text="Days Passed"
                className="alt-x-label"
                includeMargin={false}
                xPercent={0.018}
                yPercent={1.1}
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
            {lines}
            <Line
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
            <LabelSeries
              className="secondPassLabbel"
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
            <Line
              className="classFull"
              color="#F08080"
              strokeWidth="6px"
              data={[
                { x: 0, y: 100 },
                { x: 6, y: 100 }
              ]}
            />

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
                  return { title: "Day", value: classOnGraph[0].x };
                }}
                style={{
                  line: {},
                  box: { position: "absolute", top: mouseY },
                  title: {}
                }}
              ></Crosshair>
            ) : null}
          </FlexibleXYPlot>
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
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById("chartMD"));
