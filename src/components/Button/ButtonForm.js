import styled from 'styled-components';

export const ButtonForm = styled.button`
  background-color: var(--blue);
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  width: 211px;
  height: 48px;

  padding: 12px, 16px, 12px, 16px;
  border-radius: 100px;

  &:hover {
    background-color: var(--blue-dark);
  }
  @media (min-width: 768px) {
    width: 140px;
    height: 48px;
  }
`;
