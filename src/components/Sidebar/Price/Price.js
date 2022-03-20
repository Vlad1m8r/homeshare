import "./price.css"

const Price = () => {

    return <div className={"price-bar"}>
        <p className={"rent"}>
            Снять
        </p>
        <div>
            <div className={"price_rent"}>2500</div>
            <br/>
            <div className={"price_rent_day"}>₽/ночь</div>
        </div>
    </div>
}

export {Price}