import React from "react";
import { useState } from "react";

import { produce } from "immer";
import update from "immutability-helper";

import uniqid from "uniqid";

import Edit from "./Edit/Edit";
import Preview from "./Preview/Preview";

export default function CvCreator({ emptyCv, sampleCv }) {
  const [cv, setCv] = useState(emptyCv);

  const loadSampleCv = () => {
    setCv(sampleCv);
  };

  const resetCv = () => {
    setCv(emptyCv);
  };

  const newItem = (e) => {
    console.log(e.target);
    const { sectionName } = e.target.dataset;

    console.log(sectionName, cv);

    const blankSection = emptyCv.find((s) => s.name === sectionName);
    const blankItem = blankSection.items[0];

    const newBlankItem = update(blankItem, {
      id: { $set: uniqid() },
    });

    setCv(
      produce((draft) => {
        const section = draft.find((s) => s.name === sectionName);
        section.items.push(newBlankItem);
      })
    );
  };

  const deleteItem = (e) => {
    const { sectionName, id } = e.target.dataset;

    console.log(sectionName, id, cv);

    const sectionToUpdate = cv.find((s) => s.name === sectionName);
    const withoutItem = sectionToUpdate.items.filter((i) => i.id !== id);

    const updatedCv = cv.map((section) => {
      if (section.name === sectionName) {
        section = {
          ...section,
          items: withoutItem,
        };
      }
      return section;
    });

    setCv(updatedCv);
  };

  const onFieldChange = (e) => {
    const { id, fieldName, sectionName } = e.target.dataset;

    setCv(
      produce((draft) => {
        const sectionToUpdate = draft.find((s) => s.name === sectionName);
        const itemToUpdate = sectionToUpdate.items.find((i) => i.id === id);
        const fieldToUpdate = itemToUpdate.fields.find(
          (f) => f.fieldName === fieldName
        );
        fieldToUpdate.value = e.target.value;
      })
    );
  };

  return (
    <>
      <Edit
        cv={cv}
        loadSampleCv={loadSampleCv}
        resetCv={resetCv}
        onFieldChange={onFieldChange}
        newItem={newItem}
        deleteItem={deleteItem}
      />
      <Preview emptyCv={emptyCv} cv={cv} />
    </>
  );
}
