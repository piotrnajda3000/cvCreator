import React, { Component } from "react";
import Edit from "./edit/Edit";
import Preview from "./preview/Preview";
import uniqid from "uniqid";

class CvCreator extends Component {
  constructor(props) {
    super(props);
    this.state = this.ClearState();
  }

  ClearState() {
    return Object.assign(
      {},
      {
        generalNameFirst: "",
        generalNameLast: "",
        generalContactPhone: "",
        generalContactEmail: "",
        education: [{ id: uniqid() }],
        experience: [{ id: uniqid() }],
      }
    );
  }

  resetCv = () => {
    const clearStateObj = this.ClearState();

    // It seems like I have to explicitly call to update experience and education, because their value is an array which holds objects.

    this.setState({
      experience: clearStateObj.experience,
      education: clearStateObj.education,
      ...clearStateObj,
    });
  };

  loadSampleCv = () => {
    this.resetCv();
    const defaultCv = this.props.defaultCv;
    const { education, experience, general } = defaultCv;
    this.setState({
      generalNameFirst: general.first,
      generalNameLast: general.last,
      generalContactPhone: general.phone,
      generalContactEmail: general.email,
      education,
      experience,
    });
  };

  itemUpdate = (e) => {
    const sectionName = e.target.dataset.section;
    const sectionArray = this.state[sectionName];
    let copy = [...sectionArray];

    const itemID = e.target.dataset.itemid;

    const propToUpdate = e.target.dataset.itemprop;
    const newValue = e.target.value;

    const [itemToUpdate] = sectionArray.filter((item) => item.id === itemID);
    const indexToUpdate = sectionArray.findIndex((item) => item.id == itemID);

    itemToUpdate[propToUpdate] = newValue;
    copy[indexToUpdate] = itemToUpdate;

    this.setState({
      [sectionName]: [...copy],
    });
  };

  handleAdd = (e) => {
    const sectionName = e.target.dataset.section;
    const emptyItem = { id: uniqid() };
    this.setState({ [sectionName]: [...this.state[sectionName], emptyItem] });
  };

  handleDelete = (e) => {
    const sectionName = e.target.dataset.section;
    const itemID = e.target.dataset.itemid;
    const sectionWithoutItem = this.state[sectionName].filter(
      (item) => item.id !== itemID
    );
    this.setState({
      [sectionName]: sectionWithoutItem,
    });
  };

  handleGeneralSection = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const cv = {
      general: {
        first: this.state.generalNameFirst,
        last: this.state.generalNameLast,
        email: this.state.generalContactEmail,
        phone: this.state.generalContactPhone,
      },
      education: this.state.education,
      experience: this.state.experience,
    };

    return (
      <div id="CvCreator">
        <Edit
          cv={cv}
          loadSampleCv={this.loadSampleCv}
          resetCv={this.resetCv}
          onItemUpdate={this.itemUpdate}
          handleAdd={this.handleAdd}
          handleDelete={this.handleDelete}
          handleGeneralSection={this.handleGeneralSection}
        />
        <Preview cv={cv} />
      </div>
    );
  }
}

export default CvCreator;
