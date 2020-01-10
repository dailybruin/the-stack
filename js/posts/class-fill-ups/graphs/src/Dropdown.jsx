class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: this.props
    };
    console.log(this.state.classes);
  }

  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

export default Dropdown;
