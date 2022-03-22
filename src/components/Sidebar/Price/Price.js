import "./price.css"

const dict = {
    "day" : "₽/ночь"
}

const Price = ({price, tariff, buttonStatus}) => {

    return <div className={"price-container"}>
        <div className={"rent"}>
            {buttonStatus? "Снять":"Забронировать"}
        </div>
        <div className={"price-container__price_tariff"}>
            <div className={"price_rent"}>{price}</div>
            <div className={"price_tariff"}>{dict[tariff]}</div>
        </div>
    </div>
}

export {Price}