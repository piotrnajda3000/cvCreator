import React, { Component } from "react";

class SectionPreview extends Component {
  render() {
    const itemRows = [];
    this.props.items.forEach((item, idx) => {
      if (item.where || item.title || item.from || item.to) {
        itemRows.push(
          <SectionItem
            where={item.where}
            title={item.title}
            from={item.from ? item.from : ""}
            to={item.to ? item.to : ""}
            key={idx}
          />
        );
      }
    });
    if (itemRows.length > 0) {
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
  let date;
  if (from || to) {
    date = `${from} - ${to}`;
  } else {
    date = "";
  }

  return (
    <div className="SectionItem">
      <div className="ItemLeft">
        <p>{where}</p>
        <p>{title}</p>
      </div>
      <div className="ItemRight">
        <p>{date}</p>
      </div>
    </div>
  );
}

export default SectionPreview;
