import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HeroDetail from "./pages/HeroDetail";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //EndPoint icin lazim bilgiler
  const hash = "742d1eb28d5ad65eca97fd40feaae46a";
  const [url, setUrl] = useState(
    `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=36228b591971779d1294703f2c538f19&hash=${hash}`
  );

  const [heroes, setHeroes] = useState([]);

  //API'den tum karakterleri cekiyorum
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();
      const fetchedData = json.data.results;
      setHeroes(fetchedData);
    };
    fetchData();
    console.log(heroes);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home heroes={heroes} />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/details/:id"
            element={<HeroDetail heroes={heroes} hash={hash} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
