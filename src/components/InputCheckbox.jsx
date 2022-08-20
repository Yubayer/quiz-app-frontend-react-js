import React from 'react'

function InputCheckbox({label, ...rest}) {
    return (
        <label>
            <input type="checkbox" {...rest} />
            <span>{label}</span>
        </label>
    )
}

export default InputCheckbox