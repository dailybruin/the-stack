import React, { Component } from "react";
import { render } from "react-dom";
import { Card } from "react-bootstrap/Card";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: true,
      pct: 60,
      shotsTook: 30,
      shotsMade: 50
    };
  }

  render() {
    const { visible, pct, shotsTook, shotsMade } = this.state;
    return visible ? (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <p>hello</p>
        <p>
          {visible}, {pct}%, {shotsTook}, {shotsMade}
        </p>
      </div>
    ) : null;
  }
}

render(<PopUp />, document.getElementById("root"));
