import styled, { css } from "styled-components/macro";

import { verticalItem } from "../../styles/mixins";

/*
- edit section 
	- SectionNoButtons  
		- heading 
		- input group 
			- input
			- input
			- ... 
	- SectionWithButtons 
		- heading 
		- items
			- item  
				- input group 
					- input
					- input
					- ... 
				- item control buttons
					- ? delete
		- new item button  
	- cv control buttons
		- load sample cv
		- reset cv 

- Shared styles between two variants of sections: Section.Styles.js:
*/

export const EditSection = styled.div`
  ${({ theme }) => css`
    ${verticalItem(-1)};
    gap: ${theme.space[3]};
  `}

  .cvControlButtons {
    ${verticalItem(1)}
  }
  position: sticky;
  height: fit-content;
  top: 16px;
`;

export const Button = styled.button`
  padding-block: ${(props) => props.theme.space[0]};

  color: ${(props) => props.theme.grayscale[3]};
  border: 1px solid ${(props) => props.theme.grayscale[7]};
  background: transparent;

  cursor: pointer;

  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  text-align: center;

  .cvControlButtons & {
    border-radius: 10px;
    background: white;
  }

  .cvControlButtons &:hover {
    border-color: ${(props) => props.theme.grayscale[6]};
    color: ${(props) => props.theme.grayscale[2]};
  }
`;
