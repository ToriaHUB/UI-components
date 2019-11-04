import React from 'react';

import './App.css';
import { Button } from "./components/Button"

function App() {
  return (
    <div >
      <Button color = {'red'} isDisabled = {false}>Hello</Button>
      <Button color = {'red'} isDisabled = {true}>Hello</Button>
      <Button color = {'green'} isDisabled = {false}>Hello</Button>
      <Button color = {'green'} isDisabled = {true}>Hello</Button>
    </div>
  );
}

export default App;
