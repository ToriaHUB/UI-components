import React from "react"

import "./App.css"
import styled from "styled-components"
import { PlusIcon } from "./icons/PlusIcon"
import { DeleteIcon } from "./icons/DeleteIcon"

function App() {
  return (
    <div>
      <PlusIcon size={"big"} />
      <DeleteIcon size={"big"} />
    </div>
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
