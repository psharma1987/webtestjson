import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick: () => void;
}

const StyledButton = styled.button`
  background-color: #049dd2;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick }) => (
  <StyledButton onClick={onClick}>Explore Web APIs</StyledButton>
);

export default Button;
