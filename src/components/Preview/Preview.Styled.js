import styled, { css } from "styled-components/macro";

import { elevation, horizontalItem } from "../../styles/mixins";

export const Page = styled.div`
  flex-shrink: 0;

  position: sticky;
  top: 16px;

  width: 210mm;
  height: 297mm;

  background: white;
  ${elevation("medium")};

  display: grid;
  grid-template-rows: min-content min-content;
`;

export const General = styled.div`
  display: grid;

  background: hsl(223, 87%, 30%);

  ${({ theme }) => css`
    gap: ${theme.space[3]};
    padding: ${theme.space[4]};
  `}

  .name {
    place-self: center;
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights[5]};
      font-size: ${theme.fontSizes[6]};
    `}
    color: white;
  }

  .infoBar {
    display: flex;
    justify-content: center;
    gap: 24px;

    ${({ theme }) => css`
      color: hsl(222, 64%, 90%);
    `}
  }

  .infoItem {
    ${horizontalItem(-0)};
  }
`;

export const Section = styled.div`
  display: grid;

  grid-template-rows: min-content min-content;

  .header {
    width: 100%;
    text-align: center;
    place-self: center;
    ${({ theme }) => css`
      font-weight: ${theme.fontWeights[4]};
      font-size: ${theme.fontSizes[3]};
      padding-block: ${theme.space[1]};
    `}
    color: white;
    background: hsl(223, 65%, 50%);
  }
  .items {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: ${({ theme }) => theme.space[1]};
  }

  .item {
    display: grid;
    grid-template-columns: 24% auto;
    gap: 32px;

    .thick {
      font-weight: ${({ theme }) => theme.fontWeights[3]};
    }

    .thin {
      font-weight: ${({ theme }) => theme.fontWeights[6]};
    }
  }
`;
