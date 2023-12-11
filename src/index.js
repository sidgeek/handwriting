import React from "./react";
import ReactDOM from "./react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  onClick() {
    this.setState({ num: this.state.num + 1 });
  }

  render() {
    return (
      <div>
        <h1>count: {this.state.num}</h1>
        <button onClick={() => this.onClick()}>add</button>
      </div>
    );
  }
}

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// ReactDOM.render(<Welcome name="jack" />, document.getElementById("root"));
ReactDOM.render(<Counter />, document.getElementById("root"));
