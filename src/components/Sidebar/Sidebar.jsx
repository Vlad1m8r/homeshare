import "./sidebar.css"
import {Photo} from "./Photo/photo";
import {Info} from "./Info/info";
import {Price} from "./Price/Price";


const Sidebar = () => {

    return <div className={"sidebar"}>
        <Photo/>
        <Info/>
        <Price/>
    </div>
}

export {Sidebar}