import React from 'react'

const Button = ({title, classname, type, }) => {
    return (
        <button type={type} classname={classname} >{title}</button>
    )
}

export default Button
