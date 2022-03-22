import "./info.css"
import {Button} from "../../Button/button";


const Info = ({description, name}) => {

    return <div className={"info"}>
        <div className={"info__title"}>{name}</div>
        <hr/>
        <div className={"buttons"}>
            <Button
                name={"Снять"}
            />
            <Button
                name={"Забронировать"}
            />
        </div>
        <div className={"info__description"}>{description}</div>
        <div className={"info__more"}>Подробнее</div>
    </div>
}

export {Info}