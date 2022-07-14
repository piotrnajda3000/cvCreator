import { Icon as I } from "@mdi/react";

import styled from "styled-components/macro";
import { css } from "styled-components/macro";

export const StyledIcon = styled(I).attrs((p) => ({
  size: p.size || 1,
}))`
  ${({ theme }) => css`
    color: ${({ $dark }) =>
      $dark ? `${theme.colors.icon.dark}` : `${theme.colors.icon.light}`};
  `}
`;
