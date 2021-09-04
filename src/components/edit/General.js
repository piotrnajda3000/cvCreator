import { Component } from "react";
import Input from "./Input";

class General extends Component {
  render() {
    const handleChange = this.props.handleChange;

    return (
      <div className="Section">
        <h2>General</h2>
        <Input
          type="text"
          placeholder="First name"
          value={this.props.data.general.first}
          onChange={handleChange}
          name="generalNameFirst"
        />
        <Input
          type="text"
          placeholder="Last name"
          value={this.props.data.general.last}
          onChange={handleChange}
          name="generalNameLast"
        />
        <Input
          type="tel"
          placeholder="Phone"
          value={this.props.data.general.phone}
          onChange={handleChange}
          name="generalContactPhone"
        />
        <Input
          type="email"
          placeholder="Email"
          value={this.props.data.general.email}
          onChange={handleChange}
          name="generalContactEmail"
        />
      </div>
    );
  }
}

export default General;
