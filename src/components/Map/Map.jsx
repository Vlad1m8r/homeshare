import React, {useRef} from "react";
import {GoogleMap} from "@react-google-maps/api";
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
    // allowFullScreen: true,
    // fullscreenControlOptions: true
    fullscreenControl: false

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
            zoom={7}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOption}
            tilt={2}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    </div>
}

export {Map}