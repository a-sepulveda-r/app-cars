import { InputContainer, InputLabel, RequiredSpan } from './InputField'
import PropTypes from 'prop-types'

export const InputForm = ({ htmlFor, labelText, children }) => {
  return (
    <InputContainer>
      <InputLabel htmlFor={htmlFor}>
        {labelText} <RequiredSpan>*</RequiredSpan>
      </InputLabel>
      {children}
    </InputContainer>
  )
}

InputForm.propTypes = {
  htmlFor: PropTypes.string,
  labelText: PropTypes.string,
  children: PropTypes.node
}
