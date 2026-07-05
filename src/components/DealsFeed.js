import React from "react";
import deals from "../data/mockDeals.json";

function DealsFeed() {
  return (
    <div className="card">
      <h3>Current Deals</h3>
      {deals.map(d => (
        <div key={d.id} className="card" style={{ marginBottom: "0.5rem" }}>
          <div><strong>{d.restaurant}</strong></div>
          <div>{d.description}</div>
          <div>
            <strong>${d.price.toFixed(2)}</strong> (was ${d.original.toFixed(2)})
          </div>
        </div>
      ))}
    </div>
  );
}

export default DealsFeed;
