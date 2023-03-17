import './button.scss'

function Button(props) {
    return (<button className={props.color} >
        {props.children}
    </button>)
}

export {Button};