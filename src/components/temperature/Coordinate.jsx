import React from 'react';
import {coordinate, input} from './Temperature.module.css';

export default function Coordinate({value, label, setValue}) {
    const onChange = event => {
        setValue(event.target.value)
    }

    return (
        <div className={coordinate}>
            <h5>{label}</h5>

            <input
                type="text"
                value={value}
                onChange={onChange}
                className={input}
            />
        </div>
    )
}
