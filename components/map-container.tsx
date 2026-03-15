import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { MapContainer as Map, Marker, Popup, TileLayer } from 'react-leaflet';

{
  /*
   * PLACEHOLDER FOR ICONS, LATER WE NEED MORE SPECIFIC ICONS
   */
}
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
});

const LeafletMap = () => {
  return (
    <Map
      center={[53.1235, 18.0084]}
      zoom={13}
      minZoom={6}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', position: 'absolute' }}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={[53.1235, 18.0084]}>
        <Popup>Tutaj zgłoszenie siema</Popup>
      </Marker>
      <Marker position={[53.1235, 18.0]}>
        <Popup>Tutaj w brdzie ktoś pływa</Popup>
      </Marker>
    </Map>
  );
};
export default LeafletMap;
