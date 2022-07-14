import styled from "styled-components/macro";
import { css } from "styled-components/macro";

import {
  verticalItem,
  elevation,
  horizontalItem,
} from "../../../styles/mixins";

export const Section = styled.div`
  background: white;
  ${({ theme }) => css`
    ${verticalItem(-1)}
    border: 1px solid ${theme.grayscale[8]};
    padding: ${({ theme }) => theme.space[4]};
    border-radius: 10px;
  `}
  ${elevation("light")}

  max-width: 40ch;

  .heading {
    ${horizontalItem()};
    justify-content: space-between;
    ${({ theme }) => css`
      padding-block: ${theme.space[1]};
    `}
  }

  .SectionItems {
    ${verticalItem(-1)};
  }

  .accordionWrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
  }

  .accordionWrapper.unroll {
    max-height: 1600px;
    transition: max-height 0.5s cubic-bezier(1, 0, 1, 0);
  }
`;

export const Item = styled.div`
  ${({ theme }) => css`
    ${verticalItem(3)};
    margin-block: ${theme.space[3]};
  `}

  .inputs {
    ${({ theme }) => css`
      ${verticalItem(2)};
    `}
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[0]};

  label {
    font-size: ${(props) => props.theme.fontSizes[0]};
    font-weight: ${(props) => props.theme.fontWeights[6]};
  }

  input {
    ${({ theme }) => css`
      padding-block: ${theme.space[0]};
      border: 0;
      border-bottom: 1px solid ${theme.grayscale[6]};
      outline: none;
    `}
  }
`;
