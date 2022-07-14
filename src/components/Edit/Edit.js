import React, { useState } from "react";

import { StyledIcon } from "../../styles/components/StyledIcon";
import * as S from "./Edit.Styles";

import SectionNoButtons from "./Section/SectionNoButtons/SectionNoButtons";
import SectionWithButtons from "./Section/SectionWithButtons/SectionWithButtons";

import { mdiClipboardSearchOutline, mdiRestore } from "@mdi/js";

export const AccordionContext = React.createContext(null);

export default function Edit({
  cv,
  loadSampleCv,
  resetCv,
  onFieldChange,
  newItem,
  deleteItem,
}) {
  const general = cv.find((s) => s.name === "General");
  const education = cv.find((s) => s.name === "Education");
  const experience = cv.find((s) => s.name === "Experience");

  const [selected, setSelected] = useState("General");

  const toggleAccordion = (sectionName) => {
    console.log(sectionName, selected);
    if (sectionName === selected) {
      return setSelected(null);
    }
    setSelected(sectionName);
  };

  return (
    <S.EditSection>
      <AccordionContext.Provider value={{ selected, toggleAccordion }}>
        <SectionNoButtons section={general} onFieldChange={onFieldChange} />
        <SectionsWithButtons
          sections={[education, experience]}
          onFieldChange={onFieldChange}
          newItem={newItem}
          deleteItem={deleteItem}
        />
      </AccordionContext.Provider>
      <ControlButtons loadSampleCv={loadSampleCv} resetCv={resetCv} />
    </S.EditSection>
  );
}

function SectionsWithButtons({ sections, onFieldChange, newItem, deleteItem }) {
  return sections.map((section) => {
    if (section.hasButtons == false) return;
    return (
      <SectionWithButtons
        key={section.name}
        section={section}
        onFieldChange={onFieldChange}
        newItem={newItem}
        deleteItem={deleteItem}
      />
    );
  });
}

function ControlButtons({ loadSampleCv, resetCv }) {
  return (
    <div className="cvControlButtons">
      <S.Button load onClick={loadSampleCv}>
        Load sample
        <StyledIcon size={"20px"} $dark path={mdiClipboardSearchOutline} />
      </S.Button>
      <S.Button reset onClick={resetCv}>
        Reset
        <StyledIcon size={"20px"} $dark path={mdiRestore} />
      </S.Button>
    </div>
  );
}
