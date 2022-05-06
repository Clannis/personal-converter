import React, { useState, useEffect } from "react";
const { ipcRenderer } = require("electron");

import "../assets/sass/main.scss";
import Navigation from "../Navigation/Navigation";
import MainPage from "./MainPage";

function App() {
  const [platform, setPlatform] = useState();

  useEffect(() => {
    ipcRenderer.send("get-platform");

    ipcRenderer.on("set-platform", (e, platform) => {
      setPlatform(platform);
      console.log(platform);
    });
  },[])
  

  return (
    <div className="App">
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
