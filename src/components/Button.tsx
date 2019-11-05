import React from "react"
import styled from "styled-components"
import { theme } from "../styles"

type Props = {
  children: string
  bgColor: "red" | "green"
  isDisabled: boolean
  buttonType: "small" | "big"
  isReverse: boolean
}

export const Button = (props: Props) => {
  const { isReverse, isDisabled, buttonType, children, bgColor } = props
  return (
    <StyledButton
      bgColor={bgColor}
      isDisabled={isDisabled}
      disabled={isDisabled}
      buttonType={buttonType}
      isReverse={isReverse}
    >
      {children}
    </StyledButton>
  )
}

const getButtonBgColor = (color: string, isDisabled: boolean, isReverse: boolean) => {
  if (color === "green" && !isDisabled && !isReverse) {
    return theme.green.middle
  } else if (color === "green" && isDisabled && !isReverse) {
    return theme.green.light
  } else if (color === "red" && !isDisabled && !isReverse) {
    return theme.red.middle
  } else if (color === "red" && isDisabled && !isReverse) {
    return theme.red.light
  } else if ((color === "red" || "green") && (isDisabled || !isDisabled) && isReverse) {
    return theme.white
  }
}
const getButtonColor = (color: string, isDisabled: boolean, isReverse: boolean) => {
  if (color === "green" && !isDisabled && isReverse) {
    return theme.green.middle
  } else if (color === "green" && isDisabled && isReverse) {
    return theme.green.light
  } else if (color === "red" && !isDisabled && isReverse) {
    return theme.red.middle
  } else if (color === "red" && isDisabled && isReverse) {
    return theme.red.light
  } else if ((color === "green" || "red") && (!isDisabled || isDisabled) && !isReverse) {
    return theme.white
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
const getHoverColor = (color: string, isDisabled: boolean, isReverse: boolean) => {
  if (color === "red" && !isDisabled && !isReverse) {
    return theme.red.dark
  } else if (color === "green" && !isDisabled && !isReverse) {
    return theme.green.dark
  } else if ((color === "red" || "green") && (isDisabled || !isDisabled) && isReverse) {
    return "none"
  }
}

const getBorder = (isReverse: boolean, color: string, isDisabled: boolean) => {
  if (isReverse && color === "red" && !isDisabled) {
    return `1px solid ${theme.red.middle}`
  } else if (isReverse && color === "red" && isDisabled) {
    return `1px solid ${theme.red.light}`
  } else if (isReverse && color === "green" && !isDisabled) {
    return `1px solid ${theme.green.middle}`
  } else if (isReverse && color === "green" && isDisabled) {
    return `1px solid ${theme.green.light}`
  } else {
    return "none"
  }
}

const StyledButton = styled.button<{
  bgColor: "red" | "green"
  isDisabled: boolean
  buttonType: string
  isReverse: boolean
}>`text-align: center;
  display: block;
  min-width: 234px;
  height: ${props => getButtonHeight(props.buttonType)};
  border-radius: ${props => getButtonBorderRadius(props.buttonType)};
  background-color: ${props => getButtonBgColor(props.bgColor, props.isDisabled, props.isReverse)};
  color: ${props => getButtonColor(props.bgColor, props.isDisabled, props.isReverse)};
  /**
  TODO: border, color
   */
  :hover {
    background-color: ${props => getHoverColor(props.bgColor, props.isDisabled, props.isReverse)}
    border: ${props => {
      if (props.bgColor === "red" && props.isReverse && !props.isDisabled) {
        return `1px solid ${theme.red.dark}`
      } else if (props.bgColor === "red" && props.isReverse && props.isDisabled) {
        return `1px solid ${theme.red.light}`
      } else if (props.bgColor === "green" && props.isReverse && !props.isDisabled) {
        return `1px solid ${theme.green.dark}`
      } else if (props.bgColor === "green" && props.isReverse && props.isDisabled) {
        return `1px solid ${theme.green.light}`
      } else {
        return "none"
      }
    }}
    color:${props => {
      if (props.bgColor === "red" && props.isReverse && !props.isDisabled) {
        return theme.red.dark
      } else if (props.bgColor === "red" && props.isReverse && props.isDisabled) {
        return theme.red.light
      } else if (props.bgColor === "green" && props.isReverse && !props.isDisabled) {
        return theme.green.dark
      } else if (props.bgColor === "green" && props.isReverse && props.isDisabled) {
        return theme.green.light
      } else {
        return theme.white
      }
    }}
    
    }
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  /**
  TODO fix border
   */
  border: ${props => getBorder(props.isReverse, props.bgColor, props.isDisabled)} ;
  cursor: ${props => (props.isDisabled ? "not-allowed" : "pointer")};
  padding: ${props => getButtonPadding(props.buttonType)};

  margin: 10px;
`
