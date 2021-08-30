import { Component } from "react";
import General from "./General";
import Section from "./Section";
import "../../styles/Edit.css";

class Edit extends Component {
  render() {
    return (
      <div id="Edit">
        <General data={this.props.cv} />
        <Section
          header="Education"
          place="School"
          title="Degree"
          prefix="edu"
          items={this.props.cv.education}
          inputData={this.props.inputData.education}
        />
        {/* <Section
          header="Experience"
          place="Company"
          title="Position"
          items={this.props.cv.experience}
        /> */}
        <button onClick={this.props.loadSampleCv}>Load sample CV</button>
      </div>
    );
  }
}

export default Edit;
