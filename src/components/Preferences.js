import React, { useState, useEffect } from "react";
import { storage } from "../services/storageService";

const dietaryOptions = ["vegetarian", "vegan", "halal", "gluten-free"];

function Preferences() {
  const [dietary, setDietary] = useState([]);
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const prefs = storage.get("preferences", { dietary: [], budget: "" });
    setDietary(prefs.dietary);
    setBudget(prefs.budget);
  }, []);

  const toggleDietary = tag => {
    const updated = dietary.includes(tag)
      ? dietary.filter(t => t !== tag)
      : [...dietary, tag];
    setDietary(updated);
    storage.set("preferences", { dietary: updated, budget });
  };

  const updateBudget = e => {
    const value = e.target.value;
    setBudget(value);
    storage.set("preferences", { dietary, budget: value });
  };

  return (
    <div className="card">
      <h3>Preferences</h3>
      <div>
        <strong>Dietary:</strong>
        <div style={{ marginTop: "0.5rem" }}>
          {dietaryOptions.map(opt => (
            <button
              key={opt}
              className={`tab ${dietary.includes(opt) ? "active" : ""}`}
              onClick={() => toggleDietary(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <strong>Budget cap ($ per meal):</strong>
        <input
          type="number"
          value={budget}
          onChange={updateBudget}
          style={{ marginLeft: "0.5rem" }}
        />
      </div>
    </div>
  );
}

export default Preferences;
