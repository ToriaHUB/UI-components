import React from "react"
import styled from "styled-components"
import { theme } from "../styles"
import { Warning } from "./Warning"

type Props = {
  label: string
  isValidate: boolean
  placeholder: string
  warningMessage: string
}

export const Input = (props: Props) => {
  const { label, isValidate, placeholder, warningMessage } = props
  return (
    <InputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextarea isValidate={isValidate} placeholder={placeholder} />
      {isValidate ? null : <Warning warningMessage={warningMessage} />}
    </InputWrapper>
  )
}

const StyledTextarea = styled.input<{ isValidate: boolean }>`
  width: 543px;
  height: 48px;
  margin-top: 38px;
  border: 1px solid ${props => (props.isValidate ? theme.grey.middle : theme.red.middle)};
  border-radius: 5px;
  display: flex;
  padding: 0 0 0 5px;
`
const StyledLabel = styled.label`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
`

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
