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
//classes full per department
let DEPARTMENTSCLASS = [];
//above but spliced
let TOPCLASS = [];
//% classes full per department
let DEPARTMENTSPCT = [];
//above but spliced
let TOPPCT = [];
//total classes per department
let DEPARTMENTSIZE = [];
let classSlice = graphSize == 1000 ? 30 : 20;
//timeline data
let TIMELINE = [];
const LAST_TIME = 299 - 2;
//timeline data json'ified
let TIMEDATA = [];
//tick times
let COMPRESSEDTIMES = [];
//dates
let DATES = [];

//same as other file, used for creating label lines
const YEARS = ["Junior", "Sophomore", "Freshman"];
const FIRST_PASS_DATES = [58, 100, 122];
const SECOND_PASS_DATES = [226, 268, 290];
const SECOND_PASS_DATE = 166;
const PASS_DATES = FIRST_PASS_DATES.concat(SECOND_PASS_DATE, SECOND_PASS_DATES);
let academicYearLines = [];

/* tick formatter for the X axis labels */
function tickFormatter(t) {
  return (
    <tspan>
      <tspan x="0" dy="1em">
        {DATES[t].split(" ")[0]} {DATES[t].split(" ")[1]}
      </tspan>
    </tspan>
  );
}

class Insights extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 5,
      isMobile: graphSize == screenScale * screen.width ? true : false,
      graphSize: graphSize,
      classHoveredClass: 10,
      classHoveredPct: 10,
      timeHovered: 150
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

  fetchTimeline() {
    fetch("../../../../datasets/class-fill-ups/timeline.json")
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
        TIMELINE = text;
        if (TIMEDATA.length != LAST_TIME) {
          for (let i = 0; i < LAST_TIME; i++) {
            TIMEDATA.push({ x: i, y: TIMELINE[i] });
          }
        }
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchDates() {
    fetch("../../../../datasets/class-fill-ups/dates.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        DATES = text;
        if (this._isMounted) this.dataLoaded();
      });
  }

  componentDidMount() {
    this._isMounted = true;
    const fetchClass = this.fetchClass();
    const fetchPct = this.fetchPct();
    const fetchSize = this.fetchSize();
    const fetchTimeline = this.fetchTimeline();
    const fetchDates = this.fetchDates();
    Promise.all([fetchClass, fetchPct, fetchSize, fetchTimeline, fetchDates]);
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  dataLoaded() {
    let { loading, isMobile } = this.state;
    loading = loading - 1;
    this.setState({ loading: loading });

    if (loading == 0) {
      if (!isMobile) {
        for (let i = 0; i < LAST_TIME / 24; i++) {
          COMPRESSEDTIMES.push(24 * i);
        }
      } else {
        for (let i = 0; i < 6; i++) {
          COMPRESSEDTIMES.push(48 * i);
        }
      }

      for (let i = 0; i < YEARS.length; i++) {
        academicYearLines.push(
          <LineSeries
            key={"firstPass" + YEARS[i]}
            className={"firstPass" + YEARS[i]}
            color="gray"
            style={{
              strokeDasharray: "2 2"
            }}
            data={[
              { x: FIRST_PASS_DATES[i], y: 0 },
              { x: FIRST_PASS_DATES[i], y: 550 }
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
                y: 400 - 30 * i,
                label: YEARS[i]
              }
            ]}
          />
        );
        academicYearLines.push(
          <LineSeries
            key={"secondPass" + YEARS[i]}
            className={"secondPass" + YEARS[i]}
            color="gray"
            style={{
              strokeDasharray: "2 2"
            }}
            data={[
              { x: SECOND_PASS_DATES[i], y: 0 },
              { x: SECOND_PASS_DATES[i], y: 550 }
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
                y: 400 - 30 * 4 - 30 * i,
                label: YEARS[i]
              }
            ]}
          />
        );
      }
      academicYearLines.push(
        <LineSeries
          key="secondPass"
          className="secondPass"
          color="gray"
          style={{
            strokeDasharray: "2 2"
          }}
          data={[
            { x: SECOND_PASS_DATE, y: 0 },
            { x: SECOND_PASS_DATE, y: 550 }
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
              y: 310,
              label: "Second Pass"
            }
          ]}
        />
      );
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  /* used to track mouse position for the hint*/
  _onNearestXCLASS = (value, { index }) => {
    this.setState({ classHoveredClass: index });
  };

  _onNearestXPCT = (value, { index }) => {
    this.setState({ classHoveredPct: index });
  };
  _onNearestXTime = (value, { index }) => {
    this.setState({ timeHovered: index });
  };

  render() {
    const {
      loading,
      graphSize,
      classHoveredClass,
      classHoveredPct,
      isMobile,
      timeHovered
    } = this.state;
    const BarSeries = VerticalBarSeries;
    let classValue = TOPCLASS[classHoveredClass];
    let pctValue = TOPPCT[classHoveredPct];
    let timeValue = TIMEDATA[timeHovered];

    return loading > 0 ? (
      <h1>Graph loading</h1>
    ) : (
      <div>
        {/* graph of top departments full by classes */}
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
              yPercent={1.21}
              style={{
                fontWeight: "bold"
              }}
            />
          )}
          <BarSeries
            className="Insights"
            data={TOPCLASS}
            color="#2D898B"
            onNearestX={this._onNearestXCLASS}
          />
          <Hint
            value={classValue}
            format={point => {
              let dep =
                DEPARTMENTSIZE[
                  DEPARTMENTSIZE.findIndex(depart => depart.x == point.x)
                ];
              return [
                { title: point.x, value: point.y + " classes" },
                { title: "Total Classes", value: dep.y }
              ];
            }}
          ></Hint>
        </XYPlot>

        {/* graph of top classes full by % */}
        {isMobile ? (
          <h4>
            {classSlice} Most Full Departments by Percentage (>= 5 classes)
          </h4>
        ) : (
          <h2 style={{ marginLeft: graphSize / 8 }}>
            {classSlice} Most Full Departments (>= 5 classes) by Percentage
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
            color="#88CCF1"
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

        {/* timeline of # of classes full */}
        {isMobile ? (
          <h4>Timeline of Classes Filling Up</h4>
        ) : (
          <h2 style={{ marginLeft: graphSize / 3 }}>
            Timeline of Classes Filling Up
          </h2>
        )}
        <XYPlot
          xType="ordinal"
          width={graphSize}
          height={graphSize / 2}
          xDistance={100}
          margin={{ bottom: isMobile ? 60 : 90 }}
        >
          <HorizontalGridLines />
          <VerticalGridLines tickValues={COMPRESSEDTIMES} />
          <XAxis tickValues={COMPRESSEDTIMES} tickFormat={tickFormatter} />
          <YAxis />
          {isMobile ? null : (
            <ChartLabel
              text="Time Passed"
              className="alt-x-label"
              includeMargin={false}
              xPercent={0.018}
              yPercent={1.12}
              style={{
                fontWeight: "bold"
              }}
            />
          )}
          <LineSeries
            className="Insights"
            data={TIMEDATA}
            color="#219CCF"
            onNearestX={this._onNearestXTime}
          />
          {isMobile || loading > 0 ? null : academicYearLines}
          <Hint
            value={timeValue}
            format={point => {
              return [
                { title: "Time Passed", value: DATES[point.x] },
                { title: "Classes Filled", value: point.y + " classes" }
              ];
            }}
          ></Hint>
        </XYPlot>
      </div>
    );
  }
}

ReactDOM.render(<Insights />, document.getElementById("insightsMD"));
