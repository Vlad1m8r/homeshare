import "./button.css"


const Button = (props) => {

    return <div className={"button"}>
        {props.name}
    </div>

}

export {Button}