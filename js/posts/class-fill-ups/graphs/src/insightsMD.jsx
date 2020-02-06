const {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LabelSeries,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  Hint
} = reactVis;

/* Size of graph on screen */
const screenScale = 0.8;
const graphSize =
  screenScale * screen.width > 1000 ? 1000 : screenScale * screen.width;

/* "fields": ["dept", "class_full", "total_classes", "pct_full"] */
let DEPARTMENTSCLASS = [];
let TOPCLASS = [];
let DEPARTMENTSPCT = [];
let TOPPCT = [];
let DEPARTMENTSIZE = [];
let classSlice = graphSize == 1000 ? 30 : 20;

class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 3,
      isMobile: graphSize == screenScale * screen.width ? true : false,
      graphSize: graphSize,
      classHoveredClass: 10,
      classHoveredPct: 10
    };
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
  fetchClass() {
    fetch("../../../../datasets/class-fill-ups/departmentsClass.json")
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
        DEPARTMENTSCLASS = text;
        TOPCLASS = DEPARTMENTSCLASS;
        TOPCLASS.sort((a, b) => parseFloat(b.y) - parseFloat(a.y));
        TOPCLASS = TOPCLASS.slice(0, classSlice);
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchPct() {
    fetch("../../../../datasets/class-fill-ups/departmentsPct.json")
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
        DEPARTMENTSPCT = text;
        TOPPCT = DEPARTMENTSPCT;
        TOPPCT.sort((a, b) => parseFloat(b.y) - parseFloat(a.y));
        TOPPCT = TOPPCT.slice(0, classSlice);
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchSize() {
    fetch("../../../../datasets/class-fill-ups/departmentsSize.json")
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
        DEPARTMENTSIZE = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  componentDidMount() {
    this._isMounted = true;
    const fetchClass = this.fetchClass();
    const fetchPct = this.fetchPct();
    const fetchSize = this.fetchSize();
    Promise.all([fetchClass, fetchPct, fetchSize]);
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  dataLoaded() {
    let { loading } = this.state;
    loading = loading - 1;
    this.setState({ loading: loading });
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  /* used to track mouse position for the hint*/
  _onNearestXCLASS = (value, { index }) => {
    this.setState({ classHoveredClass: index });
    //THIS 270 IS HARDCODED IDK WHY WE NEED TO SUBTRACT BY 270
    //this.setState({ mouseY: window.event.clientY - 270 });
  };

  _onNearestXPCT = (value, { index }) => {
    this.setState({ classHoveredPct: index });
    //THIS 270 IS HARDCODED IDK WHY WE NEED TO SUBTRACT BY 270
    //this.setState({ mouseY: window.event.clientY - 270 });
  };

  render() {
    const {
      loading,
      graphSize,
      classHoveredClass,
      classHoveredPct,
      isMobile
    } = this.state;
    const BarSeries = VerticalBarSeries;
    let classValue = TOPCLASS[classHoveredClass];
    let pctValue = TOPPCT[classHoveredPct];

    return loading > 0 ? (
      <h1>Graph loading</h1>
    ) : (
      <div>
        {isMobile ? (
          <h4>{classSlice} Most Full Departments by Classes</h4>
        ) : (
          <h2 style={{ marginLeft: graphSize / 4 }}>
            {classSlice} Most Full Departments by Classes
          </h2>
        )}
        <XYPlot
          xType="ordinal"
          width={graphSize}
          height={graphSize / 2}
          xDistance={100}
          style={{ marginBottom: 200 }}
          margin={{ bottom: isMobile ? 70 : 150 }}
        >
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-90} />
          <YAxis />
          {isMobile ? null : (
            <ChartLabel
              text="Department"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.018}
              yPercent={1.2}
              style={{
                fontWeight: "bold"
              }}
            />
          )}
          <BarSeries
            className="Insights"
            data={TOPCLASS}
            color="#3c59ff"
            onNearestX={this._onNearestXCLASS}
          />
          <Hint
            value={classValue}
            format={point => {
              return [{ title: point.x, value: point.y + " classes" }];
            }}
          ></Hint>
        </XYPlot>

        {isMobile ? (
          <h4>
            {classSlice} Most Full Departments by Percentage (> 5 classes)
          </h4>
        ) : (
          <h2 style={{ marginLeft: graphSize / 8 }}>
            {classSlice} Most Full Departments (> 5 classes) by Percentage
          </h2>
        )}
        <XYPlot
          xType="ordinal"
          width={graphSize}
          height={graphSize / 2}
          xDistance={100}
          margin={{ bottom: 90 }}
        >
          <HorizontalGridLines />
          <XAxis tickLabelAngle={-90} />
          <YAxis />
          {isMobile ? null : (
            <ChartLabel
              text="Department"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.018}
              yPercent={1.22}
              style={{
                fontWeight: "bold"
              }}
            />
          )}
          <BarSeries
            className="Insights"
            data={TOPPCT}
            color="lightBlue"
            onNearestX={this._onNearestXPCT}
          />
          <Hint
            value={pctValue}
            format={point => {
              let dep =
                DEPARTMENTSIZE[
                  DEPARTMENTSIZE.findIndex(depart => depart.x == point.x)
                ];
              return [
                { title: point.x, value: point.y + "%" },
                { title: "Total Classes", value: dep.y }
              ];
            }}
          ></Hint>
        </XYPlot>
      </div>
    );
  }
}

ReactDOM.render(<Insights />, document.getElementById("insightsMD"));
