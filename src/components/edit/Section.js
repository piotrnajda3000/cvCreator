import { Component } from "react";
import Input from "./Input";

class Section extends Component {
  render() {
    const itemRows = [];
    this.props.items.forEach((item) => {
      let isLastItem;
      if (this.props.items.indexOf(item) == this.props.items.length - 1) {
        isLastItem = true;
      }

      itemRows.push(
        <SectionItem
          placeholders={{
            place: this.props.place,
            title: this.props.title,
          }}
          onItemUpdate={this.props.onItemUpdate}
          handleAdd={this.props.handleAdd}
          handleDelete={this.props.handleDelete}
          section={this.props.sectionName}
          where={item.where}
          title={item.title}
          from={item.from}
          to={item.to}
          id={item.id}
          isLastItem={isLastItem}
        />
      );
    });

    return (
      <div className="Section">
        <h2>{this.props.header}</h2>
        {itemRows.length < 1 &&
          AddButton(this.props.handleAdd, this.props.sectionName)}
        {itemRows}
      </div>
    );
  }
}

function AddButton(handleAdd, section) {
  return (
    <button className="addButton" onClick={handleAdd} data-section={section}>
      Add
    </button>
  );
}

class SectionItem extends Component {
  render() {
    // Props from Edit
    const onItemUpdate = this.props.onItemUpdate;
    const section = this.props.section;
    const handleAdd = this.props.handleAdd;
    const handleDelete = this.props.handleDelete;
    const placeholders = this.props.placeholders;

    // Props from Section
    const where = this.props.where;
    const title = this.props.title;
    const id = this.props.id;
    const from = this.props.from;
    const to = this.props.to;

    const addButton = AddButton(handleAdd, section);
    const deleteButton = (
      <button
        className="deleteButton"
        onClick={handleDelete}
        data-section={section}
        data-itemid={id}
      >
        Delete
      </button>
    );

    return (
      <div className="EditSectionItem">
        <Input
          type="text"
          placeholder={placeholders.place}
          itemprop="where"
          value={where || ""}
          section={section}
          itemId={id}
          onChange={onItemUpdate}
        />
        <Input
          type="text"
          placeholder={placeholders.title}
          itemprop="title"
          value={title || ""}
          section={section}
          itemId={id}
          onChange={onItemUpdate}
        />
        <Input
          type="text"
          placeholder="From"
          value={from || ""}
          itemprop="from"
          section={section}
          itemId={id}
          onChange={onItemUpdate}
        />
        <Input
          type="text"
          placeholder="To"
          value={to || ""}
          itemprop="to"
          section={section}
          itemId={id}
          onChange={onItemUpdate}
        />
        {deleteButton}
        {this.props.isLastItem ? addButton : null}
      </div>
    );
  }
}

export default Section;
