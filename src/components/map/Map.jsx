import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";
import "./map.css";

function SetViewOnClick({ coord }) {
    const map = useMap();
    map.setView(coord, map.getMaxZoom());
    return null;
}

const Map = ({ coord }) => {

    return (
        <MapContainer className="map" zoom={20} scrollWheelZoom={false} center={coord}>
            
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            <Marker position={coord}></Marker>

            <SetViewOnClick coord={coord} />
        </MapContainer>
    )
}

export default Map;