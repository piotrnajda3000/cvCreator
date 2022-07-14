import React, { useContext } from "react";

import { Fields, Items, Section, SectionContext } from "../Section";

import * as S from "../Section.Styles";
import * as S2 from "./SectionWithButtons.Styles";

import { StyledIcon } from "../../../../styles/components/StyledIcon";
import { mdiClose, mdiPlus } from "@mdi/js";

export default function SectionWithButtons({
  section,
  onFieldChange,
  newItem,
  deleteItem,
}) {
  return (
    <Section name={section.name}>
      <SectionContext.Provider
        value={{
          sectionName: section.name,
          onFieldChange,
          deleteItem,
        }}
      >
        <Items items={section.items} Item={Item} />
      </SectionContext.Provider>
      <S2.ItemControlButton
        fullWidth
        onClick={newItem}
        data-section-name={section.name}
        new
      >
        <StyledIcon
          path={mdiPlus}
          onClick={newItem}
          data-section-name={section.name}
        />
      </S2.ItemControlButton>
    </Section>
  );
}

function Item({ item }) {
  const { sectionName, deleteItem } = useContext(SectionContext);
  return (
    <S.Item>
      <div className="inputs">
        <Fields itemId={item.id} fields={item.fields} />
      </div>
      <S2.ItemControlButton
        delete
        onClick={deleteItem}
        data-id={item.id}
        data-section-name={sectionName}
      >
        <StyledIcon
          path={mdiClose}
          onClick={deleteItem}
          data-id={item.id}
          data-section-name={sectionName}
        />
      </S2.ItemControlButton>
    </S.Item>
  );
}
