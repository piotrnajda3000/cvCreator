import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          data-stateprefix={this.props.stateprefix}
          data-statename={this.props.statename}
        />
      </div>
    );
  }
}

export default Input;
