import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView() {
  return (
    <div className="card" style={{ padding: 0 }}>
      <MapContainer
        center={[-27.4698, 153.0251]}
        zoom={14}
        style={{ height: "70vh", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
}

export default MapView;
