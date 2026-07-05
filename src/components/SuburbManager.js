import React, { useState, useEffect } from "react";
import { storage } from "../services/storageService";

function SuburbManager() {
  const [suburbs, setSuburbs] = useState([]);

  useEffect(() => {
    setSuburbs(storage.get("suburbs", []));
  }, []);

  const addSuburb = () => {
    const name = prompt("Suburb name (e.g. New Farm):");
    if (!name) return;
    const updated = [...suburbs, { name }];
    setSuburbs(updated);
    storage.set("suburbs", updated);
  };

  return (
    <div className="card">
      <h3>Saved Suburbs</h3>
      <ul>
        {suburbs.map((s, i) => (
          <li key={i}>{s.name}</li>
        ))}
      </ul>
      <button onClick={addSuburb}>Add suburb</button>
    </div>
  );
}

export default SuburbManager;
