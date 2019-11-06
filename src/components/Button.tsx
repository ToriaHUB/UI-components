import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Props = {
  label: string
  children?: React.ReactNode
  bgColor: "red" | "green"
  isDisabled: boolean
  buttonType: "small" | "big"
  isReverse: boolean
}

export const Button = (props: Props) => {
  const { isReverse, isDisabled, buttonType, children, bgColor, label } = props
  return (
    <StyledButton
      bgColor={bgColor}
      isDisabled={isDisabled}
      disabled={isDisabled}
      buttonType={buttonType}
      isReverse={isReverse}
    >
      {children} <Label>{label}</Label>
    </StyledButton>
  )
}

const getButtonBgColor = (color: string, isDisabled: boolean, isReverse: boolean) => {
  if (color === "green" && !isDisabled && !isReverse) return theme.green.middle
  if (color === "green" && isDisabled && !isReverse) return theme.green.light
  if (color === "red" && !isDisabled && !isReverse) return theme.red.middle
  if (color === "red" && isDisabled && !isReverse) return theme.red.light
  if ((color === "red" || "green") && (isDisabled || !isDisabled) && isReverse) return theme.white
}

const getReverseButtonColor = (color: string, isDisabled: boolean, isReverse: boolean): string | undefined => {
  if (color === "green" && !isDisabled && isReverse) return theme.green.middle
  if (color === "green" && isDisabled && isReverse) return theme.green.light
  if (color === "red" && !isDisabled && isReverse) return theme.red.middle
  if (color === "red" && isDisabled && isReverse) return theme.red.light
}

const getBorderFontColorHover = (color: string, isDisabled: boolean, isReverse: boolean) => {
  if (color === "red" && isReverse && !isDisabled) return theme.red.dark
  if (color === "red" && isReverse && isDisabled) return theme.red.light
  if (color === "green" && isReverse && !isDisabled) return theme.green.dark
  if (color === "green" && isReverse && isDisabled) return theme.green.light
  return "none"
}

const getButtonHeight = (buttonType: string): string => {
  switch (buttonType) {
    case "small":
      return "30px"
    case "big":
      return "50px default"
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
const getHoverColor = (color: string, isDisabled: boolean, isReverse: boolean) => {
  if (color === "red" && !isDisabled && !isReverse) return theme.red.dark
  if (color === "green" && !isDisabled && !isReverse) return theme.green.dark
  if ((color === "red" || "green") && (isDisabled || !isDisabled) && !isReverse) return "none"
  if ((color === "red" || "green") && (isDisabled || !isDisabled) && isReverse) return theme.white
}

const StyledButton = styled.button<{
  bgColor: "red" | "green"
  isDisabled: boolean
  buttonType: string
  isReverse: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 234px;
  height: ${props => getButtonHeight(props.buttonType)};
  border-radius: ${props => getButtonBorderRadius(props.buttonType)};
  background-color: ${props => getButtonBgColor(props.bgColor, props.isDisabled, props.isReverse)};
  color: ${props =>
    !props.isReverse ? theme.white : getReverseButtonColor(props.bgColor, props.isDisabled, props.isReverse)};
  border: ${props =>
    !props.isReverse ? "none" : `1px solid ${getReverseButtonColor(props.bgColor, props.isDisabled, props.isReverse)}`};
  :hover {
    background-color: ${props => getHoverColor(props.bgColor, props.isDisabled, props.isReverse)};
    border: 1px solid ${props => getBorderFontColorHover(props.bgColor, props.isDisabled, props.isReverse)};
    color: ${props => getBorderFontColorHover(props.bgColor, props.isDisabled, props.isReverse)};
    svg {
      fill: ${props =>
        !props.isReverse ? theme.white : getBorderFontColorHover(props.bgColor, props.isDisabled, props.isReverse)};
    }
  }
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
  padding: ${props => getButtonPadding(props.buttonType)};
  svg {
    fill: ${props =>
      !props.isReverse ? theme.white : getReverseButtonColor(props.bgColor, props.isDisabled, props.isReverse)};
  }
`
const Label = styled.span`
  padding-left: 5px;
`
