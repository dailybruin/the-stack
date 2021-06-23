// let precovidFileName = '/datasets/covid-grade-inflation/LG_19sum.csv';
// let precovidFields = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
// let postcovidFileName = '/datasets/covid-grade-inflation/LG_20sum.csv';
// let postcovidFields = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

// let dropdown = d3.select('#dropdown-menu').insert('select', 'svg');
// let precovidMap = {};
// let postcovidMap = {};

// let CLASSES;
// let dropdownValue = 'Choose a Class';
// let precovidCanvas;
// let precovidxScale;
// let precovidheight;
// let precovidyScale;
// let postcovidCanvas;
// let postcovidxScale;
// let postcovidheight;
// let postcovidyScale;

// let changeDuration = 300;
// let delayDuration = 100;

// // Handler for dropdown value change
// let DropdownChange = function () {
//     dropdownValue = d3.select(this).property('value');
//     updateprecovidBars(precovidMap[dropdownValue]);
//     updatepostcovidBars(postcovidMap[dropdownValue]);
// };

// dropdown.on('change', DropdownChange);

// d3.csv(precovidFileName, function (error, data) {
//     //precovid csv input
//     data.forEach(function (d) {
//         let CLASS = d.CLASS;
//         precovidMap[CLASS] = [];
//         // { cerealName: [ bar1Val, bar2Val, ... ] }
//         precovidFields.forEach(function (field) {
//             precovidMap[CLASS].push(+d[field]);
//         });
//     });
//     // Get names of CLASSES, for dropdown
//     CLASSES = Object.keys(precovidMap);
//     dropdown
//         .selectAll('option')
//         .data(CLASSES)
//         .enter()
//         .append('option')
//         .attr('value', function (d) {
//             return d;
//         })
//         .text(function (d) {
//             return d[0].toUpperCase() + d.slice(1, d.length); // capitalize 1st letter
//         });
//     dropdownValue = CLASSES[0];
//     makePrecovidVis(precovidMap);
// });







// // set the dimensions and margins of the graph
// const margin = { top: 30, right: 30, bottom: 70, left: 60 },
//     width = 460 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// const svg = d3.select("#my_dataviz")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

// console.log('Chart accessed')

// // Initialize the X axis
// const x = d3.scaleBand()
//     .range([0, width])
//     .padding(0.2);
// const xAxis = svg.append("g")
//     .attr("transform", `translate(0,${height})`);

// // Initialize the Y axis
// const y = d3.scaleLinear()
//     .range([height, 0]);
// const yAxis = svg.append("g")
//     .attr("class", "myYaxis");


// // A function that create / update the plot for a given variable:
// function update(selectedVar) {

//     // Parse the Data
//     d3.csv(precovidFileName).then(function (data) {

//         // X axis
//         x.domain(data.map(d => d.group));
//         xAxis.transition().duration(1000).call(d3.axisBottom(x));

//         // Add Y axis
//         y.domain([0, d3.max(data, d => +d[selectedVar])]);
//         yAxis.transition().duration(1000).call(d3.axisLeft(y));

//         // variable u: map data to existing bars
//         const u = svg.selectAll("rect")
//             .data(data)

//         // update bars
//         u.join("rect")
//             .transition()
//             .duration(1000)
//             .attr("x", d => x(d.group))
//             .attr("y", d => y(d[selectedVar]))
//             .attr("width", x.bandwidth())
//             .attr("height", d => height - y(d[selectedVar]))
//             .attr("fill", "#69b3a2")
//     })

// }

// // Initialize plot
// update('var1')



//TRY 2!
// path = '/datasets/covid-grade-inflation/LG_19sum.csv';

// const {
//     FlexibleXYPlot,
//     XAxis,
//     YAxis,
//     ChartLabel,
//     HorizontalGridLines,
//     VerticalGridLines,
//     LineSeries,
//     LineSeriesCanvas,
//     Crosshair,
//     LabelSeries
// } = reactVis;

// const { useState } = React;

// const {
//     Dropdown,
//     DropdownButton,
//     MenuItem,
//     Image,
//     FormControl
// } = ReactBootstrap;

// /* Size of graph on screen */
// const screenScale = 0.8;
// const graphSize =
//     screenScale * screen.width > 1000 ? 1000 : screenScale * screen.width;

// /* array of class names */
// let CLASSES = [];
// /* array of % of class full for every time (json objects) */
// let DATA = [];

// const LAST_DATE = 305;

// /* custom menu component to allow searching for classes */
// const CustomMenu = React.forwardRef(
//     ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
//         const [value, setValue] = useState("");

//         return (
//             <div
//                 ref={ref}
//                 style={style}
//                 className={className}
//                 aria-labelledby={labeledBy}
//             >
//                 <FormControl
//                     autoFocus
//                     className="mx-3 my-2 w-auto"
//                     placeholder="Type to filter..."
//                     onChange={e => setValue(e.target.value)}
//                     value={value}
//                 />
//                 <div style={{ overflowY: "scroll", height: "200px" }}>
//                     <ul className="list-unstyled">
//                         {React.Children.toArray(children).filter(
//                             child =>
//                                 !value ||
//                                 child.props.children.toLowerCase().includes(value.toLowerCase())
//                         )}
//                     </ul>
//                 </div>
//             </div>
//         );
//     }
// );

// /* tick formatter for the X axis labels */
// function tickFormatter(t) {
//     return (
//         <tspan>
//             <tspan x="0" dy="1em">
//                 {DATES[t].split(" ")[0]} {DATES[t].split(" ")[1]}
//             </tspan>
//             <tspan x="0" dy="1em">
//                 {DATES[t].split(" ")[2]} {DATES[t].split(" ")[3]}
//             </tspan>
//         </tspan>
//     );
// }

// class Chart extends React.Component {
//     // _isMounted = false;
//     constructor(props) {
//         super(props);
//         this.state = {
//             useCanvas: false,
//             classOnGraph: [],
//             mouseY: 0,
//             showClass: [],
//             dropdownClasses: [],
//             removeDropdownClasses: [],
//             numClassesShown: 0,
//             isMobile: graphSize == screenScale * screen.width ? true : false,
//             graphSize: graphSize,
//             classHeader: ""
//         };
//     }

//     /* updates the dimensions of the chart based on screen size */
//     updateDimensions() {
//         this.setState({
//             graphSize:
//                 screenScale * screen.width > 1000 ? 1000 : screenScale * screen.width
//         });
//         this.setState({
//             isMobile:
//                 this.state.graphSize == screenScale * screen.width ? true : false
//         });
//     }

//     /* these fetch functions get the data from their json files */
//     fetchData() {
//         fetch("../../../../datasets/class-fill-ups-2/pct_data.json")
//             .then(res => {
//                 return res.json();
//             })
//             .then(text => {
//                 text = JSON.stringify(text, function (key, value) {
//                     // limit precision of floats
//                     if (typeof value === "number") {
//                         return parseFloat(value.toFixed(2));
//                     }
//                     return value;
//                 });
//                 text = JSON.parse(text);
//                 DATA = text;
//                 //if (this._isMounted) this.dataLoaded();
//             });
//     }

//     fetchClasses() {
//         fetch("../../../../datasets/class-fill-ups-2/class_names.json")
//             .then(res => {
//                 return res.json();
//             })
//             .then(text => {
//                 CLASSES = text;
//                 //if (this._isMounted) this.dataLoaded();
//             });
//     }

//     // componentDidMount() {
//     //     this._isMounted = true;
//     //     const fetchClasses = this.fetchClasses();
//     //     const fetchData = this.fetchData();
//     //     const fetchDates = this.fetchDates();
//     //     const fetchSeats = this.fetchSeats();
//     //     const fetchTotalSeats = this.fetchTotalSeats();
//     //     const fetchCrazyFilledClasses = this.fetchCrazyFilledClasses();
//     //     Promise.all([
//     //         fetchClasses,
//     //         fetchData,
//     //         fetchDates,
//     //         fetchSeats,
//     //         fetchTotalSeats,
//     //         fetchCrazyFilledClasses
//     //     ]);
//     //     window.addEventListener("resize", this.updateDimensions.bind(this));
//     // }

//     // componentWillUnmount() {
//     //     this._isMounted = false;
//     //     window.removeEventListener("resize", this.updateDimensions.bind(this));
//     // }

//     /* adds all the classes to the dropdown menu */
//     _createDropdownClasses() {
//         let showClass = new Array(CLASSES.length).fill(false);
//         this.setState({ showClass: showClass });

//         let dropdownClasses = this.state.dropdownClasses;
//         for (let i = 0; i < CLASSES.length; i++) {
//             let div = (
//                 <Dropdown.Item key={CLASSES[i]} onClick={this._showClass.bind(null, i)}>
//                     {CLASSES[i]}
//                 </Dropdown.Item>
//             );
//             dropdownClasses.push(div);
//         }
//         this.setState({ dropdownClasses: dropdownClasses });
//     }

//     /* used to track mouse position for the crosshair */
//     _onNearestX = (value, { index }) => {
//         this.setState({ classOnGraph: DATA.map(d => d[index]) });
//         //THIS 270 IS HARDCODED IDK WHY WE NEED TO SUBTRACT BY 270
//         this.setState({ mouseY: window.event.clientY - 270 });
//     };

//     /* shows the classes selected */
//     _showClass = class_num => {
//         let { numClassesShown, showClass, isMobile } = this.state;
//         let removeDropdownClasses = [];

//         let displayMobile = isMobile ? "" : "inline";
//         if (numClassesShown < max_classes) {
//             if (showClass[class_num] == false) {
//                 showClass[class_num] = true;
//                 numClassesShown += 1;
//                 let colorNum = 0;
//                 for (let i = 0; i < CLASSES.length; i++) {
//                     if (showClass[i]) {
//                         let div = (
//                             <div
//                                 style={{
//                                     minWidth: 120,
//                                     borderRadius: "10px",
//                                     border: "2px solid",
//                                     borderColor: colors[colorNum],
//                                     padding: 10,
//                                     marginBottom: 10,
//                                     display: displayMobile,
//                                     marginRight: 50
//                                 }}
//                             >
//                                 {CLASSES[i]}
//                                 <a
//                                     style={{ paddingLeft: 10, cursor: "pointer" }}
//                                     onClick={this._removeClass.bind(null, i)}
//                                 >
//                                     {xbutton}
//                                 </a>
//                             </div>
//                         );
//                         removeDropdownClasses.push(div);
//                         colorNum++;
//                     }
//                 }

//                 let date_filled = DATA[class_num].findIndex(x => x.y == 100);
//                 let classHeader = <p> undeclared </p>
//                 if (date_filled == -1) {
//                     classHeader =
//                         <h3 style={{ textAlign: "center", marginTop: "20px" }}>
//                             {CLASSES[class_num]} never filled up!
//                         </h3>
//                 } else if (Crazy_FilledClasses.includes(class_num)) {
//                     classHeader =
//                         <h3 style={{ textAlign: "center", marginTop: "20px" }}>
//                             {CLASSES[class_num]} filled up after {DATES[date_filled]} <br />
//                             Percent Full increased over 50% in 24 hours
//                         </h3>
//                 } else if (waitlisted == -1) {
//                     classHeader =
//                         <h3 style={{ textAlign: "center", marginTop: "20px" }}>
//                             {CLASSES[class_num]} was always waitlisted!
//                         </h3>
//                 } else {
//                     classHeader =
//                         <h3 style={{ textAlign: "center", marginTop: "20px" }}>
//                             {CLASSES[class_num]} filled up after {DATES[date_filled]}
//                         </h3>
//                 }


//                 this.setState({
//                     showClass: showClass,
//                     numClassesShown: numClassesShown,
//                     removeDropdownClasses: removeDropdownClasses,
//                     classHeader: classHeader
//                 });
//             }
//         }
//     };

//     render() {
//         const { useCanvas } = this.state;
//         const Line = useCanvas ? LineSeriesCanvas : LineSeries;
//         const lineSize = "4px";
//         const {
//             classOnGraph,
//             mouseY,
//             showClass,
//             dropdownClasses,
//             removeDropdownClasses,
//             isMobile,
//             graphSize,
//             loading,
//             showAcademicYearLines,
//             classHeader
//         } = this.state;

//         let classInfoBox = [];
//         let lines = [];
//         let academicYearLines = [];
//         let classShown = false;
//         let colorNum = 0;

//         /* creates all the lines of the classes */
//         for (let i = 0; i < CLASSES.length; i++) {
//             if (showClass[i]) {
//                 let div = (
//                     <Line
//                         key={CLASSES[i]}
//                         strokeWidth={lineSize}
//                         data={DATA[i]}
//                         onNearestX={this._onNearestX}
//                         color={colors[colorNum]}
//                     />
//                 );
//                 lines.push(div);
//                 classShown = true;
//                 colorNum++;
//             }
//         }

//         /* creates the class info box on the right */
//         if (classOnGraph[0]) {
//             let padding = 50;
//             let div = (
//                 <div style={{ paddingLeft: padding }}>
//                     {isMobile ? (
//                         <h4 style={{ width: "max-content" }}>
//                             {DATES[classOnGraph[0].x]} passed
//                         </h4>
//                     ) : (
//                         <h2 style={{ width: "max-content" }}>
//                             {DATES[classOnGraph[0].x]} passed
//                         </h2>
//                     )}
//                 </div>
//             );
//             classInfoBox.push(div);

//             colorNum = 0;
//             for (let i = 0; i < CLASSES.length; i++) {
//                 if (showClass[i]) {
//                     let date_filled = DATA[i].findIndex(x => x.y == 100);
//                     let waitlisted = (TOTAL_SEATS[i] == -1);
//                     let div = (
//                         <div style={{ paddingLeft: padding }}>
//                             {isMobile ? (
//                                 <h4 style={{ width: "max-content", color: colors[colorNum] }}>
//                                     {CLASSES[i]}
//                                 </h4>
//                             ) : (
//                                 <h3 style={{ width: "max-content", color: colors[colorNum] }}>
//                                     {CLASSES[i]}
//                                 </h3>
//                             )}
//                             <p style={{ marginBottom: "0px" }}>
//                                 Percent Full: {classOnGraph[i].y}%
//                             </p>
//                             <p style={{ marginBottom: "0px" }}>
//                                 Seats Filled: {SEATS_FILLED[i][classOnGraph[0].x].y}
//                             </p>
//                             <p style={{ marginBottom: "0px" }}>
//                                 Total Seats: {TOTAL_SEATS[i]}
//                             </p>
//                             {date_filled == -1 ? (
//                                 <p>{CLASSES[i]} never filled up!</p>
//                             ) : (
//                                 (waitlisted != -1) ? (
//                                     <p>
//                                         {CLASSES[i]} filled up after {DATES[date_filled]}
//                                     </p>
//                                 ) : (
//                                     <p>
//                                         {CLASSES[i]} was always waitlisted
//                                     </p>
//                                 )
//                             )}
//                         </div>
//                     );
//                     classInfoBox.push(div);
//                     colorNum++;
//                 }
//             }
//         }

//         /* if all 5 data files haven't been loaded yet, it shows some LOADING text */
//         return loading > 0 ? (
//             <h1>Graph loading</h1>
//         ) : (
//             /* dropdown menu */
//             <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>
//                 <div id="dropdown" style={{ paddingBottom: "15px" }}>
//                     <Dropdown>
//                         <Dropdown.Toggle>Choose a Class</Dropdown.Toggle>
//                         <Dropdown.Menu id="dropdown-basic-button" as={CustomMenu}>
//                             {dropdownClasses}
//                         </Dropdown.Menu>
//                     </Dropdown>
//                 </div>
//                 {console.log('Made it to dropdown')}
//                 {/* Display classes selected*/}
//                 {removeDropdownClasses}

//                 {/* Class Header*/}
//                 {classHeader}

//                 {/* The Chart*/}
//                 <div
//                     style={{
//                         paddingTop: "30px",
//                         paddingLeft: "30px",
//                         display: "flex",
//                         justifyContent: "flex-start",
//                         width: graphSize,
//                         height: graphSize / 2
//                     }}
//                 >
//                     <FlexibleXYPlot>
//                         <HorizontalGridLines />
//                         <VerticalGridLines />
//                         {isMobile ? null : (
//                             <XAxis tickValues={PASS_DATES} tickFormat={tickFormatter} />
//                         )}
//                         <YAxis />
//                         {/* Display lines of classes */}
//                         {lines}
//                         {/* Display the class full (100%) line */}
//                         <Line
//                             key="classFull"
//                             className="classFull"
//                             color="#F08080"
//                             strokeWidth="6px"
//                             data={[
//                                 { x: 0, y: 100 },
//                                 { x: LAST_DATE, y: 100 }
//                             ]}
//                         />
//                         {/* xAxis Line to make sure base line is always 0 */}
//                         <Line
//                             key="xAxis"
//                             className="xAxis"
//                             style={{ opacity: 0 }}
//                             data={[
//                                 { x: 0, y: 0 },
//                                 { x: LAST_DATE, y: 0 }
//                             ]}
//                         />

//                         {/* Display crosshair if a class has been selected
//                         {classShown ? (
//                             <Crosshair
//                                 values={classOnGraph}
//                                 itemsFormat={values => {
//                                     let shownLines = [];
//                                     for (let i = 0; i < CLASSES.length; i++) {
//                                         if (showClass[i]) {
//                                             let line = {
//                                                 title: CLASSES[i],
//                                                 value: classOnGraph[i].y + "%"
//                                             };
//                                             shownLines.push(line);
//                                         }
//                                     }
//                                     return shownLines;
//                                 }}
//                                 titleFormat={values => {
//                                     return { title: "Day", value: DATES[classOnGraph[0].x] };
//                                 }}
//                                 style={{
//                                     line: {},
//                                     box: { position: "absolute", top: mouseY },
//                                     title: {}
//                                 }}
//                             ></Crosshair>
//                         ) : null} */}
//                     </FlexibleXYPlot>
//                     {/* Display class info box if class been shown*/}
//                     {classShown ? (
//                         <div
//                             style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 flexWrap: "nowrap"
//                             }}
//                         >
//                             {classInfoBox}
//                         </div>
//                     ) : null}
//                 </div>
//             </div>
//         );
//     }
// }

// //export default Chart;
// ReactDOM.render(<Chart />, document.getElementById("test"));



// function loadCSVData(start, end) {
//     return new Promise(resolve => {
//         d3.csv(path, function (csv) {
//             csv = csv.filter(function (row) {
//                 return row['start'] == start
//             });
//             resolve(csv);
//         });
//     });
// }

//TRY 3!

d3.select('#start_location')
    .on('change', function (e) {
    })
    .selectAll('option')
    .data(Object.keys(CLASSES))
    .enter()
    .append('option')
    .attr('value', function (d) {
        return d;
    })
    .text(function (d) {
        return d;
    });


let dropdownClasses = []
for (let i = 0; i < CLASSES.length; i++) {
    let div = (
        <Dropdown.Item key={CLASSES[i]} onClick={this._showClass.bind(null, i)}>
            {CLASSES[i]}
        </Dropdown.Item>
    );
    dropdownClasses.push(div);
}

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


<div id="dropdown" style={{ paddingBottom: "15px" }}>
    <Dropdown>
        <Dropdown.Toggle>Choose a Class</Dropdown.Toggle>
        <Dropdown.Menu id="dropdown-basic-button" as={CustomMenu}>
            {dropdownClasses}
        </Dropdown.Menu>
    </Dropdown>
</div>

