import "./sidebar.css"
import {Photo} from "./Photo/photo";
import {Info} from "./Info/info";
import {Price} from "./Price/Price";
import {useState} from "react";

const data = {
    name: "Солнечные аппартаменты",
    description: "Уютные апартаменты с новым ремонтом, выполненные в ретро-музыкальном стиле. Идеально расположены в 4 " +
        "мин от метро Бауманская, в районе немецкой слободы на тихой,но при этом центральной улице. Вдоль улицы много " +
        "кафе, ресторанов, пивных- на любой вкус и цвет. Сами апартаменты расположены в небольшом трех этажном теплом особняке " +
        "с прекрасным видом, который вас порадует в любую погоду! Ждем вас в гости!",
    price: 2500,
    tariff: "day",
}

const Sidebar = () => {
    const [buttonStatus, stateButtonStatus] = useState(true)

    return <div className={"sidebar"}>
        <Photo/>
        <Info
            name={data.name}
            description={data.description}
        />
        <Price
            price={data.price}
            tariff={data.tariff}
            buttonStatus={buttonStatus}
        />
    </div>
}

export {Sidebar}