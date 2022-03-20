import "./info.css"
import {Button} from "../../Button/button";


const infoBar = {
    name: "Солнечные аппартаменты",
    description: "Уютные апартаменты с новым ремонтом, выполненные в ретро-музыкальном стиле. Идеально расположены в 4 мин от метро Бауманская, в районе немецкой слободы на тихой,но при этом центральной улице. Вдоль улицы много кафе, ресторанов, пивных- на любой вкус и цвет. Сами апартаменты расположены в небольшом трех этажном теплом особняке с прекрасным видом, который вас порадует в любую погоду! Ждем вас в гости!"
}
const Info = () => {

    return <div className={"info"}>
        <h1>{infoBar.name}</h1>
        <div className={"buttons"}>
            <Button name={"Снять"}/>
            <Button name={"Забронировать"}/>
        </div>
        <div className={"description"}>{infoBar.description}</div>
    </div>
}

export {Info}