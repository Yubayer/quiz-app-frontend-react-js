import React from 'react'

function Button({label, ...rest}) {
    return (
        <button className="button" {...rest}>
            <span>{label}</span>
        </button>
    )
}

export default Button