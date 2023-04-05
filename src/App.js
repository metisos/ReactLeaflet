import "./styles.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const markers = [
  {
    geocode: [38.6709784, -90.4625126],
    popUp: "Hello, I'm a popup1"
  },
  {
    geocode: [38.6692361, -90.4340168],
    popUp: "Hello, I'm a popup2"
  },
  {
    geocode: [38.6184552, -90.4448315],
    popUp: "Hello, I'm a popup3"
  }
];

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38]
});

export default function App() {
  return (
    <MapContainer center={[38.6532851, -90.3835483]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
