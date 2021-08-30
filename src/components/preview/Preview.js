import React, { Component } from "react";
import GeneralPreview from "./GeneralPreview";
import SectionPreview from "./SectionPreview";
import "../../styles/preview/Preview.css";

class Preview extends Component {
  render() {
    const cv = this.props.cv;
    const general = cv.general;
    const education = cv.education;
    const experience = cv.experience;

    console.log(this.props.cv);

    return (
      <div id="Preview">
        <GeneralPreview
          firstName={general.name.first}
          lastName={general.name.last}
          email={general.contact.email}
          phone={general.contact.phone}
        />
        <SectionPreview header="Education" items={education} />
        <SectionPreview header="Experience" items={experience} />
      </div>
    );
  }
}

export default Preview;
