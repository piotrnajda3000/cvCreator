import React, { Component } from "react";

class SectionPreview extends Component {
  render() {
    if (this.props.items.length > 0) {
      const itemRows = [];
      this.props.items.forEach((item, idx) => {
        itemRows.push(
          <SectionItem
            where={item.where}
            title={item.title}
            from={item.date.from}
            to={item.date.to}
            key={idx}
          />
        );
      });
      return (
        <div className="SectionPreview">
          <h2>{this.props.header}</h2>
          {itemRows}
        </div>
      );
    } else {
      return null;
    }
  }
}

function SectionItem({ where, title, from, to }) {
  return (
    <div className="SectionItem">
      <div className="ItemLeft">
        <p>{where}</p>
        <p>{title}</p>
      </div>
      <div className="ItemRight">
        <p>
          {from} - {to}
        </p>
      </div>
    </div>
  );
}

export default SectionPreview;
