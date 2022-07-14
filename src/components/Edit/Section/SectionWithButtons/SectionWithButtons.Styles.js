import styled, { css } from "styled-components/macro";

import * as S from "../../Edit.Styles";

import { StyledIcon } from "../../../../styles/components/StyledIcon";

export const ItemControlButton = styled(S.Button)`
  width: 100%;
  ${(props) =>
    props.delete &&
    css`
      &,
      ${StyledIcon} {
        border-color: hsl(358, 93%, 62%);
        color: hsl(358, 93%, 62%);
      }
    `}

  ${(props) =>
    props.new &&
    css`
      &,
      ${StyledIcon} {
        border-color: hsl(137, 64%, 56%);
        color: hsl(137, 64%, 56%) !important;
      }
    `}
`;
