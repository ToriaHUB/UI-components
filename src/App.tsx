import React from "react"

import "./App.css"
import { Input } from "./components/Input"

function App() {
  return (
    <div style={{ width: "550px" }}>
      <Input label={"Normal:"} isValidate={true} placeholder={"Type something"} warningMessage={"Warning notice"} />
    </div>
  )
}

export default App

// TODO: Remove

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
