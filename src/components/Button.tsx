function Button(props) {
    return (<button className={'bg-' + props.color} >
        {props.children}
    </button>)
}

export {Button};