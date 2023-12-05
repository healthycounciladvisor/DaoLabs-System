import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import LaunchPad from "./pages/launchpad/LaunchPad";
import Games from "./pages/game/Games";
import Staking from "./pages/staking/Staking";
import Markets from "./pages/Markets";
import Layout from "./pages/layout/Layout";


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
