import React, {useState} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import MyLocation from '@material-ui/icons/MyLocation'
import Button from '../shared/Button'
import {component, locationIcon, input, header} from './Location.module.css';
import {fetchGeolocation} from '../../utils/api.js'

export default function Location({getLocation, setLatitude, setLongitude}) {
    const [value, setValue] = useState('')

    const onChange = event => {
        setValue(event.target.value)
    }

    const onGetLocation = () => {
        fetchGeolocation()
            .then(pos => {
                const crd = pos.coords;

                setLatitude(crd.latitude)
                setLongitude(crd.longitude)
            })
            .catch(error => {
                console.warn(`ERROR(${error.code}): ${error.message}`);
            })
    }

    const onSubmit = () => {
        console.info('value', value)
        getLocation(value)
    }

    return (
        <section className={component}>
            <header className={header}>
                <h3>
                    Enter your location

                    <Tooltip title="Click to allow access to your location">
                        <MyLocation className={locationIcon} size={10} onClick={onGetLocation} />
                    </Tooltip>
                </h3>
            </header>

            <div className={input}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />

                <Button
                    label="Get coordinates"
                    onClick={onSubmit}
                />
            </div>
        </section>
    )
}
