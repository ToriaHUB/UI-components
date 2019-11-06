import React from "react"

import "./App.css"
import styled from "styled-components"
import { Button } from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { DeleteIcon } from "./icons/DeleteIcon"

function App() {
  return (
    <Content>
      <ColumnContainer>
        <ButtonTitleStyle>Buttons with Icon</ButtonTitleStyle>
        <Button label={"Buttons with Icon"} bgColor={"green"} isDisabled={false} buttonType={"big"} isReverse={false}>
          <PlusIcon size={"big"} />
        </Button>
        <Button label={"Buttons with Icon"} bgColor={"red"} isDisabled={false} buttonType={"big"} isReverse={false}>
          <DeleteIcon size={"big"} />
        </Button>
        <Button label={"Buttons with Icon"} bgColor={"green"} isDisabled={false} buttonType={"small"} isReverse={true}>
          <PlusIcon size={"small"} />
        </Button>
        <Button label={"Buttons with Icon"} bgColor={"red"} isDisabled={false} buttonType={"small"} isReverse={true}>
          <DeleteIcon size={"small"} />
        </Button>
      </ColumnContainer>
    </Content>
  )
}

export default App

const ColumnContainer = styled.div`
  display: grid;
  grid-gap: 10px;
`
const ButtonTitleStyle = styled.p`
  text-align: center;
`

const Content = styled.div`
  display: flex;
`
