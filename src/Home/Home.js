import {useJsApiLoader} from "@react-google-maps/api";
import {Map} from "../components/Map";
import {Sidebar} from "../components/Sidebar";
import "./home.css"

const API_KEY = process.env.REACT_APP_API_KEY

const startPoint = {
    lat: -34.397,
    lng: 150.644
};

export const Home = () => {
    const {isLoaded, isError} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })
    console.log(isError)
    return <div>
        {isLoaded
            ? <div className={"section"}>
                <div className={"section__map"}>
                    <Map center={startPoint}/>
                </div>
                <div className={"section__sidebar"}>
                    <Sidebar/>
                </div>
            </div>
            : <h2>Loading</h2>}
    </div>;
}