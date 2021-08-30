import { Component } from "react";
import General from "./General";
import Section from "./Section";

import "../../styles/edit/Edit.css";

class Edit extends Component {
  render() {
    const inputData = this.props.inputData;

    const general = {
      name: {
        first: inputData.firstName,
        last: inputData.lastName,
      },
      contact: {
        phone: inputData.phone,
        email: inputData.email,
      },
    };

    const education = {
      where: inputData.eduWhere,
      title: inputData.eduTitle,
      from: inputData.eduFrom,
      to: inputData.eduTo,
    };

    const experience = {
      where: inputData.expWhere,
      title: inputData.expTitle,
      from: inputData.expFrom,
      to: inputData.expTo,
    };

    return (
      <div id="Edit">
        <General inputData={general} onInputChange={this.props.onInputChange} />
        <Section
          header="Education"
          place="School"
          placeAttr="Degree"
          inputData={education}
        />
        <Section
          header="Experience"
          place="Company"
          placeAttr="Position"
          inputData={experience}
        />
      </div>
    );
  }
}

export default Edit;
