import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  ${() => {
    return css`
      flex: 1 0 21%; /* explanation below */
      margin: 25px 5px 5px;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      text-align: center
    `
  }}
`;
export const StyledSpan = styled.span`
  ${() => {
    return css`
      display: block;
      margin-top: 10px;
      color: #000;
      font-weight: bold;
    `
  }}
`;
