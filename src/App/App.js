import "./app.css"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import {Home} from "../Home/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;