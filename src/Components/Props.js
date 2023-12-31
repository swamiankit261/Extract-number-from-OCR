import React from 'react'

function props(props) {
    return (
        <>
            {/* <h1>props</h1>
            <h1>{props.name1}</h1>
            <p>{props.age}</p> */}
            <p>{props.abc}</p>
            <p>{props.b}</p>
            <p>{props.obj.name}</p>
            <p>{props.obj.age}</p>
            <p>{props.obj.class}</p>
        </>
    )
}

export default props;
