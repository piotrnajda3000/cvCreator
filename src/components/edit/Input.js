import { Component } from "react";

class Input extends Component {
  render() {
    console.log(this.props);

    return (
      <div id="input">
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={(e) => this.props.handleInputChange(e)}
        />
      </div>
    );
  }
}

export default Input;
