const {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
  Crosshair
} = reactVis;

const { Dropdown, DropdownButton, MenuItem, Image } = ReactBootstrap;

//const { xbutton } = "./img/posts/class-fill-ups/xbutton.png";

const graphSize = 600;
const max_classes = 2;

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
  ]
];

const DATES = ["0", "Jan", "Feb", "March", "April", "May", "June"];
const CLASSES = ["Class A", "Class B", "Class C"];

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false,
      values: [],
      mouseY: 0,
      showClass: new Array(CLASSES.length).fill(false),
      dropdownClasses: [],
      removeDropdownClasses: [],
      numClassesShown: 0
    };
  }

  componentDidMount() {
    this._createDropdownClasses();
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
    this.setState({ values: DATA.map(d => d[index]) });
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
    const values = this.state.values;
    const mouseY = this.state.mouseY;
    const showClass = this.state.showClass;
    const dropdownClasses = this.state.dropdownClasses;
    const removeDropdownClasses = this.state.removeDropdownClasses;

    let classInfoBox = [];
    let lines = [];
    let classShown = false;

    for (let i = 0; i < CLASSES.length; i++) {
      if (showClass[i]) {
        let div = (
          <Line
            color="green"
            strokeWidth={lineSize}
            data={DATA[i]}
            onNearestX={this._onNearestX}
          />
        );
        lines.push(div);
        classShown = true;
      }
    }

    if (values[0]) {
      let padding = 50;
      let div = (
        <div style={{ paddingLeft: padding }}>
          <h1>Day: {DATES[values[0].x]}</h1>
        </div>
      );
      classInfoBox.push(div);

      for (let i = 0; i < CLASSES.length; i++) {
        if (showClass[i]) {
          let div = (
            <div style={{ paddingLeft: padding }}>
              <h1>{CLASSES[i]}</h1>
              <p>Percent Full: {values[i].y}%</p>
            </div>
          );
          classInfoBox.push(div);
        }
      }
    }

    return (
      <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div id="dropdown" style={{ paddingBottom: "15px" }}>
          <DropdownButton id="dropdown-basic-button" title="Choose a Class">
            {dropdownClasses}
          </DropdownButton>
        </div>
        {removeDropdownClasses}
        <div
          style={{
            paddingTop: "30px",
            paddingLeft: "30px",
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <FlexibleXYPlot width={graphSize} height={graphSize}>
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis tickFormat={v => DATES[v]} />
            <YAxis />
            <ChartLabel
              text="Days Passed"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.018}
              yPercent={1.08}
              style={{
                fontWeight: "bold"
              }}
            />
            <ChartLabel
              text="Percentage Full"
              className="alt-y-label"
              includeMargin={false}
              xPercent={0.18}
              yPercent={0.06}
              style={{
                textAnchor: "end",
                fontWeight: "bold"
              }}
            />
            {lines}
            <Line
              className="classFull"
              color="red"
              strokeWidth="6px"
              data={[
                { x: 0, y: 100 },
                { x: 6, y: 100 }
              ]}
            />
            {classShown ? (
              <Crosshair
                values={values}
                itemsFormat={values => {
                  let shownLines = [];
                  for (let i = 0; i < CLASSES.length; i++) {
                    if (showClass[i]) {
                      let line = {
                        title: CLASSES[i],
                        value: values[i].y + "%"
                      };
                      shownLines.push(line);
                    }
                  }
                  return shownLines;
                }}
                titleFormat={values => {
                  return { title: "Day", value: values[0].x };
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              {classInfoBox}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById("chartMD"));
