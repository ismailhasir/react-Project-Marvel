import "./App.css";
import React from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import fetchData from "./api/api";

function App() {
  useEffect(() => {
    fetchData();
  });

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
