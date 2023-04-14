import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0;
  padding: 10px;

  border: 1px solid #000;
  color: black;
  border-radius: 5px;
  padding: 10px 25px;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &:hover {
    border-color: orange;
  }

  &: focus {
    border-color: orange;
  }
`;
