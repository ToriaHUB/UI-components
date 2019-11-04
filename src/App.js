import React from 'react';

import './App.css';
import { Button } from "./components/Button"

function App() {
  return (
    <div >
      <Button color = {'red'} isDisabled = {false}  buttonType={'big'}>Hello</Button>
      <Button color = {'red'} isDisabled = {true} buttonType={'big'}>Hello</Button>
      <Button color = {'green'} isDisabled = {false} buttonType={'big'}>Hello</Button>
      <Button color = {'green'} isDisabled = {true} buttonType={'big'}>Hello</Button>

      <Button color = {'red'} isDisabled = {false}  buttonType={'small'} >Hello</Button>
      <Button color = {'red'} isDisabled = {true} buttonType={'small'}>Hello</Button>
      <Button color = {'green'} isDisabled = {false} buttonType={'small'}>Hello</Button>
      <Button color = {'green'} isDisabled = {true} buttonType={'small'}>Hello</Button>
    </div>
  );
}

export default App;
