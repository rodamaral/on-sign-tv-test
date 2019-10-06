import React from 'react';
import {coordinate} from './Temperature.module.css';

function Coordinate({label}) {
    return (
        <div className={coordinate}>
            <h5>{label}</h5>

            <input />
        </div>
    )
}

export default Coordinate
