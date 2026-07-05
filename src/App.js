import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import SearchWant from "./components/SearchWant";
import DealsFeed from "./components/DealsFeed";
import MapView from "./components/MapView";
import SuburbManager from "./components/SuburbManager";
import Preferences from "./components/Preferences";

function App() {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="app-shell">
      <Navbar />
      <Tabs activeTab={activeTab} onChange={setActiveTab} />

      <div className="app-content">
        {activeTab === "search" && (
          <>
            <SuburbManager />
            <Preferences />
            <SearchWant />
          </>
        )}
        {activeTab === "deals" && <DealsFeed />}
        {activeTab === "map" && <MapView />}
      </div>
    </div>
  );
}

export default App;
