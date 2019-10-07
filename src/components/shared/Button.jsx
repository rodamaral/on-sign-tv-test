import React from 'react'
import {button} from './shared.module.css'

export default function Button({label, onClick}) {
    return (
        <button className={button} onClick={onClick} >
            {label}
        </button >
    )
}
