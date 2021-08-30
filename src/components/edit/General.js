import { Component } from "react";
import Input from "./Input";
import "../../styles/edit/Section.css";

class General extends Component {
  render() {
    return (
      <div className="section">
        <h2>General</h2>
        <Input
          type="text"
          placeholder="First name"
          value={this.props.inputData.name.first}
          handleInputChange={this.props.onInputChange}
        />
        <Input
          type="text"
          placeholder="Last name"
          value={this.props.inputData.name.last}
          handleInputChange={this.props.onInputChange}
        />
        <Input
          type="tel"
          placeholder="Phone"
          value={this.props.inputData.contact.phone}
          handleInputChange={this.props.onInputChange}
        />
        <Input
          type="email"
          placeholder="Email"
          value={this.props.inputData.contact.email}
          handleInputChange={this.props.onInputChange}
        />
      </div>
    );
  }
}

export default General;
