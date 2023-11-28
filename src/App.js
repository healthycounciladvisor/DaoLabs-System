import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import LaunchPad from "./pages/LaunchPad";
import Games from "./pages/Games";
import Staking from "./pages/Staking";
import Markets from "./pages/Markets";
import Layout from "./pages/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/LaunchPad" element={<LaunchPad />} />
          <Route path="/Staking" element={<Staking />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Markets" element={<Markets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
