import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix Leaflet's default icon issue in React apps
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
});

const containerStyle = {
    width: '100%',
    height: '100%',
};

const LiveTracking = ({ onClick }) => {
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        const handlePositionUpdate = (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude,
            });
        };

        // Get initial position
        navigator.geolocation.getCurrentPosition(handlePositionUpdate);

        // Watch for position changes
        const watchId = navigator.geolocation.watchPosition(handlePositionUpdate);

        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    if (!currentPosition) return <div>Loading...</div>;

    return (
        <div style={{ width: '100%', height: '100%' }} onClick={onClick}>
            <MapContainer
                center={currentPosition}
                zoom={15}
                style={containerStyle}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={currentPosition}>
                    <Popup>Your current location</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LiveTracking;
