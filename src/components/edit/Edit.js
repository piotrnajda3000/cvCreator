import { Component } from "react";
import General from "./General";
import Section from "./Section";
import "../../styles/Edit.css";

class Edit extends Component {
  render() {
    return (
      <div id="Edit">
        <General
          data={this.props.cv}
          handleChange={this.props.handleGeneralSection}
        />
        <Section
          header="Education"
          place="School"
          title="Degree"
          sectionName="education"
          items={this.props.cv.education}
          onItemUpdate={this.props.onItemUpdate}
          handleAdd={this.props.handleAdd}
          handleDelete={this.props.handleDelete}
        />
        <Section
          header="Experience"
          place="Company"
          title="Position"
          sectionName="experience"
          items={this.props.cv.experience}
          onItemUpdate={this.props.onItemUpdate}
          handleAdd={this.props.handleAdd}
          handleDelete={this.props.handleDelete}
        />

        <button id="loadCv" onClick={this.props.loadSampleCv}>
          Load sample CV
        </button>
        <button id="resetCv" onClick={this.props.resetCv}>
          Reset
        </button>
      </div>
    );
  }
}

export default Edit;
