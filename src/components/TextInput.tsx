import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Props = {
  label: string
  isValidate: boolean
  placeholder: string
}

export const TextInput = (props: Props) => {
  const { label, isValidate, placeholder } = props
  return (
    <div>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextarea isValidate={isValidate} placeholder={placeholder} />
    </div>
  )
}

const StyledTextarea = styled.input<{ isValidate: boolean }>`
  width: 550px;
  height: 48px;
  margin-top: 38px;
  border: 1px solid ${props => (props.isValidate ? theme.grey.middle : theme.red.middle)};
  border-radius: 5px;
  display: block;
  padding: 0px 14px;
`
const StyledLabel = styled.label`
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
`
