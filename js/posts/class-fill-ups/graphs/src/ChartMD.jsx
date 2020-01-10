const {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
  Crosshair
} = reactVis;

const { Dropdown, DropdownButton } = ReactBootstrap;

//const { Dropdown } = "./Dropdown";

const graphSize = 600;
const max_classes = 5;

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
  ]
];

const DATES = ["0", "Jan", "Feb", "March", "April", "May", "June"];
const CLASSES = ["Class A", "Class B"];

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false,
      values: [],
      mouseY: 0,
      showClass: new Array(CLASSES.length).fill(false),
      shownClasses: new Array(max_classes).fill(-1)
    };
  }

  _onMouseLeave = () => {
    this.setState({ values: [] });
  };

  _onNearestX = (value, { index }) => {
    this.setState({ values: DATA.map(d => d[index]) });
    this.setState({ mouseY: window.event.clientY });
  };

  _showClass = class_num => {
    let temp = this.state.showClass.slice();
    temp[class_num] = !temp[class_num];
    this.setState({ showClass: temp });

    let temp2 = this.state.shownClasses;
    if (temp2.includes(class_num)) {
      for (let i = 0; i < max_classes; i++) {
        if (temp2[i] == class_num) {
          temp2[i] = -1;
          break;
        }
      }
      this.setState({ shownClasses: temp2 });
    } else {
      for (let i = 0; i < max_classes; i++) {
        if (temp2[i] == -1) {
          temp2[i] = class_num;
          break;
        }
      }
      this.setState({ shownClasses: temp2 });
    }
  };

  render() {
    const { useCanvas } = this.state;
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const lineSize = "4px";
    const values = this.state.values;
    const mouseY = this.state.mouseY;
    const shownClasses = this.state.shownClasses;
    const showClass = this.state.showClass;

    let classInfo = [];

    if (values[0]) {
      classInfo = [];
      let padding = 50;
      let div = (
        <div style={{ paddingLeft: padding }}>
          <h1>Date: {DATES[values[0].x]}</h1>
        </div>
      );
      classInfo.push(div);

      for (let i = 0; i < CLASSES.length; i++) {
        if (showClass[i]) {
          let div = (
            <div style={{ paddingLeft: padding }}>
              <h1>{CLASSES[i]}</h1>
              <p>Percent Full: {values[i].y}%</p>
            </div>
          );
          classInfo.push(div);
        }
      }
    }

    return (
      <div>
        <div id="dropdown">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item onClick={this._showClass.bind(null, 0)}>
              class A
            </Dropdown.Item>
            <Dropdown.Item onClick={this._showClass.bind(null, 1)}>
              class B
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <div
          style={{
            paddingTop: "30px",
            paddingLeft: "30px",
            display: "flex",
            justifyContent: "flex-start"
          }}
        >
          <XYPlot
            onMouseLeave={this._onMouseLeave}
            width={graphSize}
            height={graphSize}
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis tickFormat={v => DATES[v]} />
            <YAxis />
            <ChartLabel
              text="Date"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.028}
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
            {shownClasses[0] > -1 ? (
              <Line
                color="green"
                strokeWidth={lineSize}
                data={DATA[shownClasses[0]]}
                onNearestX={this._onNearestX}
              />
            ) : null}
            {shownClasses[1] > -1 ? (
              <Line
                color="green"
                strokeWidth={lineSize}
                data={DATA[shownClasses[1]]}
                onNearestX={this._onNearestX}
              />
            ) : null}
            <Line
              className="classFull"
              color="red"
              strokeWidth="6px"
              data={[
                { x: 0, y: 100 },
                { x: 6, y: 100 }
              ]}
            />
            {values ? (
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
          </XYPlot>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {classInfo}
          </div>
        </div>
        <p>add dropdown menu(s?) to add up to 5? classes</p>
      </div>
    );
  }
}

ReactDOM.render(<Chart />, document.getElementById("graph"));
