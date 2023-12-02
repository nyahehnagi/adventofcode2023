// import React from 'react';

import "./App.css";
import Calibration from "./components/Calibration";
import day1 from "./data/day1";

function App() {

  const convertStringToArray = (str: string): string[] => {
    const lines = str.split("\n");
    return lines;
  };


  return (
    <div className="App">
      <header className="App-header">
        Advent of Code 2023<br></br>
        Day 1<Calibration calibration={convertStringToArray(day1)} />
      </header>
    </div>
  );
}

export default App;
