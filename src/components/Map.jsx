import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: 51.505,
        lng: -0.09
    }
    return (
        <LoadScript googleMapsApiKey='AIzaSyDuNKarwZSPZOU3dXrL7Zwias7XZMLqJHA'>
            <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={9}
            center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map