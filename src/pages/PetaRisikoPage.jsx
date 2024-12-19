// src/pages/PetaRisikoPage.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; // Import CSS Leaflet di sini
import './PetaRisikoPage.css'; // Import CSS untuk komponen Anda

const PetaRisikoPage = () => {
  const indonesiaCenter = [-2.5489, 118.0149]; // Pusat Indonesia (koordinat)

  return (
    <div className="peta-risiko-container">
      <div className="map-section">
        <h2 className="map-title">Peta Indeks Rawan Bencana di Indonesia</h2>
        <div className="map-container">
          <MapContainer
            center={indonesiaCenter}
            zoom={5} // Zoom yang sesuai untuk cakupan seluruh Indonesia
            scrollWheelZoom={true}
            className="map-container"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Marker Pusat Indonesia */}
            <Marker position={indonesiaCenter}>
              <Popup>
                <h3 className="font-bold">Pusat Geografis Indonesia</h3>
                <p>
                  Marker ini menunjukkan titik pusat geografis Indonesia berdasarkan
                  koordinat latitudinal dan longitudinal.
                </p>
                <p><strong>Koordinat:</strong> {indonesiaCenter[0]}, {indonesiaCenter[1]}</p>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default PetaRisikoPage;
