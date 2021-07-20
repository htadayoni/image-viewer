import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  ${() => {
    return css`
      text-decoration: none;
      display: block;
      color: black;
    `
  }}
`;