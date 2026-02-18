import React from 'react'
import './PillButtons.css'

const PillButtons = ({ btnText, url }) => {
    return (
        <>
            <a className="btn-box" href={url}>{btnText}</a>
        </>
    )
}

export default PillButtons
