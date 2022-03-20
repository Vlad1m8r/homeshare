import {Map} from "../components/Map"
import {useJsApiLoader} from "@react-google-maps/api";
import {Sidebar} from "../components/Sidebar";
import "./app.css"

const API_KEY = process.env.REACT_APP_API_KEY

const Dcenter = {
    lat: -3.745,
    lng: -38.523
};

const App = () => {

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    return (
        <div className={"app"}>
            {isLoaded
                ? <div className={"app__section"}>
                    <div className={"section_map"}>
                        <Map center={Dcenter}/>
                    </div>
                    <div className={"section_sidebar"}>
                        <Sidebar/>
                    </div>
                </div>
                : <h2>Loading</h2>}
        </div>
    )
}

export default App;