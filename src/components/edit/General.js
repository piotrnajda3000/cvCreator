import { Component } from "react";
import Input from "./Input";

class General extends Component {
  render() {
    return (
      <div className="Section">
        <h2>General</h2>
        <Input
          type="text"
          placeholder="First name"
          value={this.props.data.general.name.first}
          onInputChange={this.props.onInputChange}
        />
        <Input
          type="text"
          placeholder="Last name"
          value={this.props.data.general.name.last}
        />
        <Input
          type="tel"
          placeholder="Phone"
          value={this.props.data.general.contact.phone}
        />
        <Input
          type="email"
          placeholder="Email"
          value={this.props.data.general.contact.email}
        />
      </div>
    );
  }
}

export default General;
