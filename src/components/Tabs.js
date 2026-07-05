import React from "react";

const tabs = [
  { id: "search", label: "What I Want to Eat" },
  { id: "deals", label: "Current Deals" },
  { id: "map", label: "Map View" }
];

function Tabs({ activeTab, onChange }) {
  return (
    <div className="tabs">
      {tabs.map(t => (
        <button
          key={t.id}
          className={`tab ${activeTab === t.id ? "active" : ""}`}
          onClick={() => onChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
