import React from 'react';
import {component, header, button} from './Temperature.module.css';

function Temperature() {
    return (
        <section className={component}>
            <h2 className={header}>
                Temperature
            </h2>

            <button className={button}>
                Show Temperature
            </button>
        </section>
    )
}

export default Temperature
