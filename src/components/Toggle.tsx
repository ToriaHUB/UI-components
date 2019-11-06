import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../styles"

export const Toggle = () => {
  const [isSwitchedOn, setIsSwitchedOn] = useState(false)

  const handleToggle = () => {
    setIsSwitchedOn(!isSwitchedOn)
  }
  return (
    <SwitchBackground toggleState={isSwitchedOn} onClick={handleToggle}>
      <Switch toggleState={isSwitchedOn} />
    </SwitchBackground>
  )
}

const SwitchBackground = styled.div<{
  toggleState: boolean
}>`
  width: 40px;
  height: 23px;
  display: flex;
  align-items: center;
  border-radius: 33px;
  padding: 2px 2px;
  background-color: ${props => (props.toggleState ? theme.green.middle : theme.grey.dark)};
`

const Switch = styled.div<{
  toggleState: boolean
}>`
  transform: ${props => (props.toggleState ? "translate3d(20px, 0px, 0px)" : "translate3d(0px, 0px, 0px)")};
  transition: transform 200ms ease-in-out;
  width: 20px;
  height: 20px;
  background-color: ${theme.white};
  border-radius: 50%;
`
