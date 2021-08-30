import { Component } from "react";
import Input from "./Input";

class Section extends Component {
  render() {
    const itemRows = [];

    if (this.props.items.length > 0) {
      this.props.items.forEach((item) => {
        itemRows.push(
          AlreadyAddedItem(
            this.props.place,
            this.props.title,
            item.where,
            item.title,
            item.date.from,
            item.date.to
          )
        );
      });
    }

    itemRows.push(
      EmptyItem(
        this.props.place,
        this.props.title,
        this.props.inputData,
        this.props.prefix
      )
    );

    return (
      <div className="Section">
        <h2>{this.props.header}</h2>
        {itemRows}
      </div>
    );
  }
}

function EmptyItem(placePlaceholder, titlePlaceholder, inputData, prefix) {
  return (
    <div className="EditSectionItem">
      <Input
        type="text"
        placeholder={placePlaceholder}
        value={inputData.where}
        statename={prefix + "Where"}
        stateprefix={prefix}
      />
      <Input
        type="text"
        placeholder={titlePlaceholder}
        value={inputData.title}
        statename={prefix + "Title"}
        stateprefix={prefix}
      />
      <Input
        type="text"
        placeholder="From"
        value={inputData.from}
        statename={prefix + "DateFrom"}
        stateprefix={prefix}
      />
      <Input
        type="text"
        placeholder="To"
        value={inputData.to}
        statename={prefix + "DateTo"}
        stateprefix={prefix}
      />
      <button className="addButton" data-stateprefix={prefix}>
        Add
      </button>
    </div>
  );
}

function AlreadyAddedItem(
  placePlaceholder,
  titlePlaceholder,
  where,
  title,
  from,
  to
) {
  return (
    <div className="EditSectionItem">
      <Input type="text" placeholder={placePlaceholder} value={where} />
      <Input type="text" placeholder={titlePlaceholder} value={title} />
      <Input type="text" placeholder="From" value={from} />
      <Input type="text" placeholder="To" value={to} />
      <button className="deleteButton">Delete</button>
    </div>
  );
}

export default Section;
