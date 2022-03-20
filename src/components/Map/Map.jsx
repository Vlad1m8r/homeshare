import React, {useRef} from "react";
import {GoogleMap} from "@react-google-maps/api";
import  "./Map.css"

const containerStyle = {
    width: '100%',
    height: '100%'
};

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
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    </div>
}

export {Map}