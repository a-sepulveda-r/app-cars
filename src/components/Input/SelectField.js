import styled from 'styled-components';
import arrowIcon from '../../assets/svg/arrowIcon.svg';

export const SelectField = styled.select`
  color: var(--gray-2);
  padding: 15px;
  font-size: 0.75rem;
  border: 2px solid var(--blue);
  border-radius: 5px;
  background: url(${arrowIcon}) right 10px center no-repeat;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
