import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 5px;

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

export const Btn = styled.button`
  border: 1px solid #000;
  padding: 5px 15px;
  color: black;
  border-radius: 5px;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  boxshadow: 0px 0px 2px 2px rgb(red, 0, 0, 5);

  &:hover {
    border: none;
    background-color: orange;
    color: #fff;
  }
`;
