import React from "react"

import "./App.css"
import { Button } from "./components/Button"
import styled from "styled-components"

function App() {
  return (
    <Content>
      <ColumnContainer>
        <ButtonTitleStyle>Normal state</ButtonTitleStyle>
        <Button bgColor={"green"} isDisabled={false} buttonType={"big"} isReverse={false}>
          Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={false} buttonType={"big"} isReverse={false}>
          Red Button without Icon
        </Button>
        <Button bgColor={"green"} isDisabled={false} buttonType={"small"} isReverse={false}>
          Small Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={false} buttonType={"small"} isReverse={false}>
          Small Red Button without Icon
        </Button>
      </ColumnContainer>

      <ColumnContainer>
        <ButtonTitleStyle>Normal reverse state</ButtonTitleStyle>
        <Button bgColor={"green"} isDisabled={false} buttonType={"big"} isReverse={true}>
          Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={false} buttonType={"big"} isReverse={true}>
          Red Button without Icon
        </Button>
        <Button bgColor={"green"} isDisabled={false} buttonType={"small"} isReverse={true}>
          Small Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={false} buttonType={"small"} isReverse={true}>
          Small Red Button without Icon
        </Button>
      </ColumnContainer>

      <ColumnContainer>
        <ButtonTitleStyle>Normal disabled state</ButtonTitleStyle>
        <Button bgColor={"green"} isDisabled={true} buttonType={"big"} isReverse={false}>
          Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={true} buttonType={"big"} isReverse={false}>
          Red Button without Icon
        </Button>
        <Button bgColor={"green"} isDisabled={true} buttonType={"small"} isReverse={false}>
          Small Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={true} buttonType={"small"} isReverse={false}>
          Small Red Button without Icon
        </Button>
      </ColumnContainer>

      <ColumnContainer>
        <ButtonTitleStyle>Reverse disabled state</ButtonTitleStyle>
        <Button bgColor={"green"} isDisabled={true} buttonType={"big"} isReverse={true}>
          Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={true} buttonType={"big"} isReverse={true}>
          Red Button without Icon
        </Button>
        <Button bgColor={"green"} isDisabled={true} buttonType={"small"} isReverse={true}>
          Small Button without Icon
        </Button>
        <Button bgColor={"red"} isDisabled={true} buttonType={"small"} isReverse={true}>
          Small Red Button without Icon
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
