import React, { useContext } from "react";

import { Section } from "../Section";

import { Fields, Items, SectionContext } from "../Section";

import * as S from "../Section.Styles";

export default function SectionWithNoButtons({ section, onFieldChange }) {
  return (
    <Section name={section.name}>
      <SectionContext.Provider
        value={{ sectionName: section.name, onFieldChange }}
      >
        <Items items={section.items} Item={Item} />
      </SectionContext.Provider>
    </Section>
  );
}

function Item({ item }) {
  return (
    <S.Item>
      <div className="inputs">
        <Fields itemId={item.id} fields={item.fields} />
      </div>
    </S.Item>
  );
}
