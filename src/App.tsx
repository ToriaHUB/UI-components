import React from "react"

import "./App.css"
import { TextInput } from "./components/TextInput"

function App() {
  return (
    <div>
      <TextInput label={"Normal:"} isValidate={false} placeholder={"Type something"}></TextInput>
    </div>
  )
}

export default App

// const ColumnContainer = styled.div`
//   display: grid;
//   grid-gap: 10px;
// `
// const ButtonTitleStyle = styled.p`
//   text-align: center;
// `
//
// const Content = styled.div`
//   display: flex;
// `
