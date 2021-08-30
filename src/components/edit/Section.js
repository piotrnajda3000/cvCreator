import { Component } from "react";
import Input from "./Input";
import "../../styles/edit/Section.css";

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h2>{this.props.header}</h2>
        <Input
          type="text"
          placeholder={this.props.place}
          value={this.props.inputData.where}
        />
        <Input
          type="text"
          placeholder={this.props.placeAttr}
          value={this.props.inputData.title}
        />
        <h3>Date</h3>
        <Input
          type="text"
          placeholder="From"
          value={this.props.inputData.from}
        />
        <Input type="text" placeholder="To" value={this.props.inputData.to} />
      </div>
    );
  }
}

export default Section;
