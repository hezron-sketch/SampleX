// StyledButton.js

import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
`;

export default Button;
    