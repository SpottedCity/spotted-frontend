import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer as Map, Marker, Popup, TileLayer } from 'react-leaflet';

const LeafletMap = () => {
  return (
    <Map
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>An approach to solve using osm in expo web platform.</Popup>
      </Marker>
    </Map>
  );
};
export default LeafletMap;
