import React, { Component } from "react";
import GeneralPreview from "./GeneralPreview";
import SectionPreview from "./SectionPreview";
import "../../styles/Preview.css";

class Preview extends Component {
  render() {
    return (
      <div id="Preview">
        <GeneralPreview
          firstName={this.props.cv.general.name.first}
          lastName={this.props.cv.general.name.last}
          email={this.props.cv.general.contact.email}
          phone={this.props.cv.general.contact.phone}
        />
        <SectionPreview header="Education" items={this.props.cv.education} />
        <SectionPreview header="Experience" items={this.props.cv.experience} />
      </div>
    );
  }
}

export default Preview;
