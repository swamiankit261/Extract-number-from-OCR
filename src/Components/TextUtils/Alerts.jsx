import React from 'react'

function Alerts(props) {
    return (
        <>
            <div class={`alert alert-${props.color}`} role="alert">
                This is a primary alert with <a href="#" class="alert-link">{props.message}</a>. Give it a click if you like.
            </div>
        </>
    )
}

export default Alerts