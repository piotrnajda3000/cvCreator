import React from "react";

import { StyledIcon } from "../../../styles/components/StyledIcon";

import { css } from "styled-components/macro";

import { mdiChevronDown } from "@mdi/js";

export default function Heading({ sectionName, onClick, isSelected }) {
  const chevronSelected = `
    transform: rotate(180deg);
    transform-origin: center;
    transition: all 0.5s ease-in; 
    `;

  return (
    <div className="heading" onClick={onClick}>
      <h2>{sectionName}</h2>
      <StyledIcon
        $dark
        path={mdiChevronDown}
        css={isSelected ? chevronSelected : "transition: all 0.5s ease-out; "}
      />
    </div>
  );
}
