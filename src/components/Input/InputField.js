import styled from 'styled-components';

export const InputField = styled.input`
  color: var(--gray-2);
  padding: 15px;
  font-size: 0.75rem;
  border: 2px solid var(--blue);
  border-radius: 5px;
  background: white;
  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  min-width: 100%;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: fit-content;
  position: static;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: var(--blue);
  position: relative;
  top: 0.5rem;
  margin: 0 0 0 7px;
  padding: 0 3px;
  background: white;
  width: fit-content;
`;

export const RequiredSpan = styled.span`
  color: var(--red);
  font-size: 14px;
`;
