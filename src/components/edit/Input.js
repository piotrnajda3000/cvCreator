import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <div className="Input">
        <input
          type={this.props.type}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          data-section={this.props.section}
          data-itemprop={this.props.itemprop}
          data-itemid={this.props.itemId}
          onChange={(e) => this.props.onChange(e)}
        />
      </div>
    );
  }
}

export default Input;
