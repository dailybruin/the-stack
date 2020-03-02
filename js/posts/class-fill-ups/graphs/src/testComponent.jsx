const { Component } = React;
import Chart from "../../../../js/posts/class-fill-ups/graphs/src/ChartMD.jsx";

/* DISREGARD THIS FILE, IT WAS(IS) JUST BEING USED TO TRY TO MAKE REACT COMPONENTS WORK ON THE STACK */
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tester: "hi"
    };
  }
  render() {
    const { tester } = this.state;
    return (
      <div id="testComponent">
        <Chart />
        <h1>Hello</h1>
      </div>
    );
  }
}

//ReactDOM.render(<Test />, document.getElementById("chartMD"));
