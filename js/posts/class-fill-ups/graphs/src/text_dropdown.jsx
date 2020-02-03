const { useState } = React;

const {
  Dropdown,
  DropdownButton,
  MenuItem,
  Image,
  FormControl
} = ReactBootstrap;

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
        <div style={{ overflowY: "scroll", height: "200px" }}>
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              child =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      </div>
    );
  }
);

class TextDropdown extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      DATA: [],
      CLASSES: [],
      DATES: [],
      dropdownClasses: [],
      text: "",
      loading: 2
    };
  }

  /* these fetch functions get the data from their json files */
  fetchData() {
    fetch("../../../../datasets/class-fill-ups/pct_data.json")
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
        this.setState({ DATA: text });
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchClasses() {
    fetch("../../../../datasets/class-fill-ups/class_names.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        this.setState({ CLASSES: text });
        if (this._isMounted) this.dataLoaded();
      });
  }

  fetchDates() {
    fetch("../../../../datasets/class-fill-ups/dates.json")
      .then(res => {
        return res.json();
      })
      .then(text => {
        this.setState({ DATES: text });
        if (this._isMounted) this.dataLoaded();
      });
  }

  dataLoaded() {
    let loading = this.state.loading - 1;
    this.setState({ loading: loading });
    if (loading == 0) {
      this._createDropdownClasses();
    }
  }

  _createDropdownClasses() {
    const { CLASSES } = this.state;
    let showClass = new Array(CLASSES.length).fill(false);
    this.setState({ showClass: showClass });

    let dropdownClasses = this.state.dropdownClasses;
    for (let i = 0; i < CLASSES.length; i++) {
      let div = (
        <Dropdown.Item key={CLASSES[i]} onClick={this._showClass.bind(null, i)}>
          {CLASSES[i]}
        </Dropdown.Item>
      );
      dropdownClasses.push(div);
    }
    this.setState({ dropdownClasses: dropdownClasses });
  }

  _showClass = class_num => {
    const { CLASSES, DATES, DATA } = this.state;
    let date_filled = DATA[class_num].findIndex(x => x.y == 100);
    let text =
      date_filled == -1 ? (
        <h1 style={{ textAlign: "center" }}>
          {CLASSES[class_num]} never filled up!
        </h1>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          {CLASSES[class_num]} filled up on: {DATES[date_filled]}
        </h1>
      );
    this.setState({ text: text });
  };

  componentDidMount() {
    this._isMounted = true;
    const fetchClasses = this.fetchClasses();
    const fetchData = this.fetchData();
    const fetchDates = this.fetchDates();
    Promise.all([fetchClasses, fetchData, fetchDates]);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { loading, dropdownClasses, text } = this.state;
    return loading > 0 ? (
      <h1>LOADING, THIS MAY TAKE A WHILE</h1>
    ) : (
      <div style={{ paddingTop: "10px" }}>
        <div id="text_dropdown" style={{ paddingBottom: "15px" }}>
          <Dropdown>
            <Dropdown.Toggle>Choose a Class</Dropdown.Toggle>
            <Dropdown.Menu id="text_dropdown-basic-button" as={CustomMenu}>
              {dropdownClasses}
            </Dropdown.Menu>
          </Dropdown>
          {text}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<TextDropdown />, document.getElementById("text_dropdownMD"));
