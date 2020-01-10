import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineSeriesCanvas,
  Crosshair,
} from 'react-vis';
const graphSize = 600;

const DATA = [
  [
    { x: 0, y: 0 },
    { x: 1, y: 15 },
    { x: 2, y: 33 },
    { x: 3, y: 70 },
    { x: 4, y: 100 },
    { x: 5, y: 100 },
    { x: 6, y: 100 },
  ],
  [
    { x: 0, y: 5 },
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 65 },
    { x: 4, y: 80 },
    { x: 5, y: 100 },
    { x: 6, y: 100 },
  ],
];

const DATES = ['0', 'Jan', 'Feb', 'March', 'April', 'May', 'June'];
const CLASSES = ['Class A', 'Class B'];

export default class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      useCanvas: false,
      values: [],
      mouseY: 0,
    };
  }

  _onMouseLeave = () => {
    this.setState({ values: [] });
  };

  _onNearestX = (value, { index }) => {
    this.setState({ values: DATA.map(d => d[index]) });
    this.setState({ mouseY: window.event.clientY });
  };

  render() {
    const { useCanvas } = this.state;
    const Line = useCanvas ? LineSeriesCanvas : LineSeries;
    const lineSize = '4px';
    const values = this.state.values;
    const mouseY = this.state.mouseY;
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

      for (let i = 0; i < values.length; i++) {
        let div = (
          <div style={{ paddingLeft: padding }}>
            <h1>{CLASSES[i]}</h1>
            <p>Percent Full: {values[i].y}%</p>
          </div>
        );
        classInfo.push(div);
      }
    }

    return (
      <div>
        <div
          style={{
            paddingTop: '30px',
            paddingLeft: '30px',
            display: 'flex',
            justifyContent: 'flex-start',
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
                fontWeight: 'bold',
              }}
            />
            <ChartLabel
              text="Percentage Full"
              className="alt-y-label"
              includeMargin={false}
              xPercent={0.18}
              yPercent={0.06}
              style={{
                textAnchor: 'end',
                fontWeight: 'bold',
              }}
            />
            <Line
              className="classA"
              color="green"
              strokeWidth={lineSize}
              data={DATA[0]}
            />
            <Line
              className="classB"
              color="green"
              strokeWidth={lineSize}
              data={DATA[1]}
              onNearestX={this._onNearestX}
            />
            <Line
              className="classFull"
              color="red"
              strokeWidth="6px"
              data={[
                { x: 0, y: 100 },
                { x: 6, y: 100 },
              ]}
            />
            {values ? (
              <Crosshair
                values={values}
                itemsFormat={values => {
                  return [
                    { title: CLASSES[0], value: values[0].y + '%' },
                    { title: CLASSES[1], value: values[1].y + '%' },
                  ];
                }}
                titleFormat={values => {
                  return { title: 'Day', value: values[0].x };
                }}
                style={{
                  line: {},
                  box: { position: 'absolute', top: mouseY },
                  title: {},
                }}
              ></Crosshair>
            ) : null}
          </XYPlot>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {classInfo}
          </div>
        </div>
        <p>add dropdown menu(s?) to add up to 5? classes</p>
      </div>
    );
  }
}
