import React, { Component } from "react";

import Edit from "./edit/Edit";
import Preview from "./preview/Preview";

import uniqid from "uniqid";

class CvCreator extends Component {
  constructor(props) {
    super(props);

    this.clearState = {
      // General
      generalNameFirst: "",
      generalNameLast: "",
      generalContactPhone: "",
      generalContactEmail: "",
      // Education
      // Inputs
      eduWhere: "",
      eduTitle: "",
      eduDateFrom: "",
      eduDateTo: "",
      // List of items
      education: [],
      // Item
      eduItem: { id: uniqid() },
      // Experience
      experience: [],
      expWhere: "",
      expTitle: "",
      expDateFrom: "",
      expDateTo: "",
    };

    this.state = {
      ...this.clearState,
    };
  }

  loadSampleCv = () => {
    const defaultCv = this.props.defaultCv;
    const education = defaultCv.education;
    const experience = defaultCv.experience;
    const general = defaultCv.general;
    this.setState({
      generalNameFirst: general.name.first,
      generalNameLast: general.name.last,
      generalContactPhone: general.contact.phone,
      generalContactEmail: general.contact.email,
      education,
      experience,
    });
  };

  resetCv = () => {
    this.state = {
      ...this.clearState,
    };
  };

  render() {
    // Reconstructing the data model from the state
    const cv = {
      general: {
        name: {
          first: this.state.generalNameFirst,
          last: this.state.generalNameLast,
        },
        contact: {
          email: this.state.generalContactEmail,
          phone: this.state.generalContactPhone,
        },
      },
      education: this.state.education,
      experience: this.state.experience,
    };

    const inputData = {
      education: {
        where: this.state.eduWhere,
        title: this.state.eduTitle,
        from: this.state.eduDateFrom,
        to: this.state.eduDateTo,
      },
    };

    return (
      <div id="CvCreator">
        <Edit
          cv={cv}
          inputData={inputData}
          loadSampleCv={this.loadSampleCv}
          resetCv={this.resetCv}
        />
        <Preview cv={cv} />
      </div>
    );
  }
}

export default CvCreator;
