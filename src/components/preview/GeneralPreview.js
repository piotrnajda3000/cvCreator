import { Component } from "react";
import "../../styles/preview/GeneralPreview.css";

class GeneralPreview extends Component {
  render() {
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
  }
}

export default GeneralPreview;
