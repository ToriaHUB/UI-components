import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Props = {
  children: string
  color: "red" | "green"
  isDisabled: boolean
  buttonType: "small" | "big"
}

export const Button = (props: Props) => {
  return (
    <StyledButton
      color={props.color}
      isDisabled={props.isDisabled}
      disabled={props.isDisabled}
      buttonType={props.buttonType}
    >
      {props.children}
    </StyledButton>
  )
}

const getButtonColor = (color: string, isDisabled: boolean) => {
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
const getButtonHeight = (buttonType: string): string => {
  switch (buttonType) {
    case "small":
      return "30px"
    case "big":
      return "50px"
    default:
      return "50px"
  }
}
const getButtonPadding = (buttonType: string): string => {
  switch (buttonType) {
    case "small":
      return "4px 20px"
    case "big":
      return "14px 40px"
    default:
      return "14px 40px"
  }
}

const getButtonBorderRadius = (buttonType: string): string => {
  switch (buttonType) {
    case "small":
      return "15px"
    case "big":
      return "25px"
    default:
      return "25px"
  }
}

const StyledButton = styled.button<{ color: string; isDisabled: boolean; buttonType: string }>`
  text-align: center;
  display: block;
  width: 234px;
  height: ${props => getButtonHeight(props.buttonType)};
  border-radius: ${props => getButtonBorderRadius(props.buttonType)};
  background-color: ${props => getButtonColor(props.color, props.isDisabled)};
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  border: none;
  cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
  padding: ${props => getButtonPadding(props.buttonType)};

  margin: 10px;
`
