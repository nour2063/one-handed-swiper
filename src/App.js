import './App.css';
import {Menu} from "./components/Menu";
import {Nav} from "./components/Nav";
import {useEffect, useRef, useState} from "react";

function App() {

  return (
    <>
        <Menu/>
        <Nav keyCount={9}/>
    </>
  );
}

export default App;
