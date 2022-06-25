import React from 'react'

// alert type proped from app.js and make it from here to others.
export default function Alert(props) {
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.msg}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
