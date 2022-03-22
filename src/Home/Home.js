import {useJsApiLoader} from "@react-google-maps/api";
import {Map} from "../components/Map";
import {Sidebar} from "../components/Sidebar";
import "./home.css"

const API_KEY = process.env.REACT_APP_API_KEY

const Dcenter = {
    lat: -3.745,
    lng: -38.523
};

export const Home = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    return <div>
        {isLoaded
            ? <div className={"section"}>
                <div className={"section__map"}>
                    <Map center={Dcenter}/>
                </div>
                <div className={"section__sidebar"}>
                    <Sidebar/>
                </div>
            </div>
            : <h2>Loading</h2>}
    </div>;
}