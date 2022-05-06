import React, { useState } from "react";
import { tabs } from "./Navigatinon.config";
import NavigationTab from "./NavigationTab";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Home")

  return (
    <nav className="navigation">
      {tabs.map((t) => {
        return <NavigationTab title={t.title} key={t.title} isActive={activeTab==t.title} setActiveTab={setActiveTab}/>;
      })}
    </nav>
  );
};

export default Navigation;
