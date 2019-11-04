import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Props = {
  children: string
  color: "red" | "green"
  isDisabled: boolean
}

export const Button = (props: Props) => {
  return (
    <StyledButton color={props.color} isDisabled={props.isDisabled} disabled={props.isDisabled}>
      {props.children}
    </StyledButton>
  )
}

const getColor = (color: string, isDisabled: boolean) => {
  if (color === "green" && !isDisabled) {
    return theme.green.middle
  } else if (color === "green" && isDisabled) {
    return theme.green.light
  } else if (color === "red" && !isDisabled) {
    return theme.red.middle
  } else if (color === "red" && isDisabled) {
    return theme.red.light
  }
}

const StyledButton = styled.button<{ color: string; isDisabled: boolean }>`
  text-align: center;
  display: block;
  min-width: 234px;
  min-height: 50px;
  border-radius: 25px;
  background-color: ${props => getColor(props.color, props.isDisabled)};
  color: #ffffff;
  font-family: SansSerif;
  font-size: 16px;
  border: none;
  cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
  padding: 14px 40px;
  overflow: fragments;
`
