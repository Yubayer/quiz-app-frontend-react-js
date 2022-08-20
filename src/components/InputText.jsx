import React from 'react'

function InputText({icon, ...rest}) {
    return (
        <div className="textInput">
            <input {...rest} />
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    )
}

export default InputText