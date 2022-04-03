import React, {useRef} from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";
import  "./Map.css"

const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultOption = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    fullscreenControl: false,
    minZoom: 3,
    maxZoom: 15
}

const Map = ({center}) => {

    const mapRef = useRef(undefined);

    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined
    }, [])

    return <div className={"container"}>
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={3}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOption}
            tilt={2}
        >
            <Marker position={{ lat: -34.397, lng: 150.644 }} label={{className:"marker", text:"2500", fontSize:"18px"}} options={{}} icon={"false"} />
            <Marker position={{ lat: -34.450, lng: 150.600 }} label={{className:"marker", text:"5435", fontSize:"18px"}} options={{}} icon={"false"} />
            <Marker position={{ lat: -34.600, lng: 150.700 }} label={{className:"marker", text:"400", fontSize:"18px"}} options={{}} icon={"false"} />
        </GoogleMap>
    </div>
}

export {Map}