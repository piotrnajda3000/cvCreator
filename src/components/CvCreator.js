import "../styles/CvCreator.css";
import React, { Component } from "react";

import Edit from "./edit/Edit";
import Preview from "./preview/Preview";

class CvCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      eduWhere: "",
      eduTitle: "",
      eduFrom: "",
      eduTo: "",
      expWhere: "",
      expTitle: "",
      expFrom: "",
      expTo: "",
      experience: [
        {
          where: "",
          title: "",
          date: {
            from: "",
            to: "",
          },
        },
      ],
      education: [
        {
          where: "",
          title: "",
          date: {
            from: "",
            to: "",
          },
        },
        {
          where: "a",
          title: "b",
          date: {
            from: "c",
            to: "d",
          },
        },
      ],
    };
  }

  handleInputChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
  };

  render() {
    const cv = {
      general: {
        name: {
          first: this.state.firstName,
          last: this.state.lastName,
        },
        contact: {
          email: this.state.email,
          phone: this.state.phone,
        },
      },
      education: this.state.education,
      experience: this.state.experience,
    };

    return (
      <div id="CvCreator">
        <Edit inputData={this.state} onInputChange={this.handleInputChange} />
        <Preview cv={cv} />
      </div>
    );
  }
}

export default CvCreator;
