import React, { useContext } from "react";

import * as S from "./Section.Styles";

import Heading from "./Heading";

import { AccordionContext } from "../Edit";

export const SectionContext = React.createContext(null);

export function Section({ name, children }) {
  const { selected, toggleAccordion } = useContext(AccordionContext);
  const isSelected = selected === name ? true : false;
  return (
    <S.Section>
      <Heading
        isSelected={isSelected}
        sectionName={name}
        onClick={() => toggleAccordion(name)}
      />
      <div className={`accordionWrapper ${isSelected ? "unroll" : ""}`}>
        {children}
      </div>
    </S.Section>
  );
}

export function Items({ items, Item }) {
  const itemRows = items.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  return <div className="SectionItems">{itemRows}</div>;
}

export function Fields({ fields, itemId }) {
  return fields.map((field) => {
    return (
      <Field
        itemId={itemId}
        field={field}
        key={`${itemId}-${field.fieldName}`}
      />
    );
  });
}

export function Field({ itemId, field }) {
  const { sectionName, onFieldChange } = useContext(SectionContext);
  const { fieldName, value, type, label } = field;
  return (
    <S.Field>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        type={type}
        value={value}
        onChange={onFieldChange}
        data-id={itemId}
        data-section-name={sectionName}
        data-field-name={fieldName}
      />
    </S.Field>
  );
}
