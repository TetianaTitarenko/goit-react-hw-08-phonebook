import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledP = styled.div`
  font-weight: 700;
`;

export const Button = styled.button`
  border: 1px solid #000;
  padding: 5px 15px;
  color: black;
  border-radius: 5px;
  background: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border: none;
    background-color: orange;
    color: #fff;
  }
`;
