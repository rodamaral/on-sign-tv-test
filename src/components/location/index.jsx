import React, {useState} from 'react'
import {component} from './Location.module.css';

export default function Location({getLocation}) {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
    }

    const onSubmit = () => {
        console.info('value', value)
        getLocation(value)
        // TODO
        // event.preventDefault()
    }

    return (
        <section className={component}>
            <h3>Enter your location</h3>

            <input
                type="text"
                value={value}
                onChange={onChange}
            />

            <button onClick={onSubmit}>
                Get coordinates
            </button>
        </section>
    )
}
