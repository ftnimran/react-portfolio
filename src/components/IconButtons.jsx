import React from 'react'
import './IconButtons.css'

const IconButtons = ({ btnText, url, nextwindows, index }) => {
    return (
        <>
            <a className="home-sci" href={url} target={nextwindows} style={{ "--i":  index  }}>{btnText}</a>
        </>
    )
}

export default IconButtons
