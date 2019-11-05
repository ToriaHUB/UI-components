import React from "react"

import "./App.css"
import { Button } from "./components/Button"

function App() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p>Normal state</p>
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
      </div>

      <div>
        <p>Normal reverse state</p>
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
      </div>

      <div>
        <p>Normal disabled state</p>
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
      </div>

      <div>
        <p>Reverse disabled state</p>
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
      </div>
    </div>
  )
}

export default App
