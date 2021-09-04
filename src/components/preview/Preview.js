import React, { Component } from "react";
import GeneralPreview from "./GeneralPreview";
import SectionPreview from "./SectionPreview";
import "../../styles/Preview.css";

class Preview extends Component {
  render() {
    return (
      <div id="Preview">
        <GeneralPreview
          firstName={this.props.cv.general.first}
          lastName={this.props.cv.general.last}
          email={this.props.cv.general.email}
          phone={this.props.cv.general.phone}
        />
        <SectionPreview header="Education" items={this.props.cv.education} />
        <SectionPreview header="Experience" items={this.props.cv.experience} />
      </div>
    );
  }
}

export default Preview;
