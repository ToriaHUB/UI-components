import React from "react"
import styled from "styled-components"
import { theme } from "../styles"
import { ExclamationIcon } from "../icons/ExclamationIcon"

type Props = {
  warningMessage: string
}

export const Warning = (props: Props) => {
  const { warningMessage } = props
  return (
    <WarningWrapper>
      <WarningMessage>{warningMessage}</WarningMessage>
      <ExclamationIcon />
    </WarningWrapper>
  )
}

const WarningWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  margin: 6px 0 0 5px;
  align-self: flex-end;
`
const WarningMessage = styled.div`
  color: ${theme.grey.dark};
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
  padding-right: 5px;
`
