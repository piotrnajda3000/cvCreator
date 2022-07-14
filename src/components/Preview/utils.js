import ReactDOMServer from "react-dom/server";

export const isChildNull = (child) => {
  return !Boolean(ReactDOMServer.renderToStaticMarkup(child));
};

export const isEveryChildNull = (children) => {
  const arr = children.map((child) => isChildNull(child));
  return arr.every((child) => child === true);
};

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

export const getValFromFields = (fields, fieldName) => {
  const value = fields.find((f) => f.fieldName == fieldName).value;
  return isEmptyOrSpaces(value) ? null : value;
};
