import "./button.css"


const Button = ({name, stateButtonStatus}) => {

    return <button className={"button"}>
        {name}
    </button>

}

export {Button}