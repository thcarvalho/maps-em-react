import React from 'react';
import MapViewDirections from "react-native-maps-directions";


const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={{
            latitude: destination.latitude,
            longitude: destination.longitude
        }}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyC6rZ97U7AO6Lzz2CNmmhiBwDdh8zim7HY"
        strokeWidth={3}
        strokeColor="#222"
    />
);
export default Directions;
