import { Component } from "react";

class GeneralPreview extends Component {
  render() {
    if (
      this.props.firstName ||
      this.props.lastName ||
      this.props.email ||
      this.props.phone
    ) {
      return (
        <div id="GeneralPreview">
          <div id="name">
            <h2>
              {this.props.firstName} {this.props.lastName}
            </h2>
          </div>
          <div id="contact">
            <h2>{this.props.email}</h2>
            <h2>{this.props.phone}</h2>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default GeneralPreview;
