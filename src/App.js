import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import Request from "./components/Request";

function App() {
  const [selectedOption, setSelectedOption] = useState(Request.fetchAnimation);
  return (
    <div className="App">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
