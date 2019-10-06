import React, {useState} from 'react'
import {component} from './Location.module.css';
import {fetchGeolocation} from '../../utils/api.js'

export default function Location({getLocation, setLatitude, setLongitude}) {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
    }

    function success(pos) {
        const crd = pos.coords;
        console.warn(crd)

        setLatitude(crd.latitude)
        setLongitude(crd.longitude)
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    const onGetLocation = () => {
        fetchGeolocation(success, error)
            .then(success)
            .catch(error)
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

            <button onClick={onGetLocation}>
                Test navigator
            </button>
        </section>
    )
}
