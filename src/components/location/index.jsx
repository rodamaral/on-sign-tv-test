import React, {useState} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import MyLocation from '@material-ui/icons/MyLocation'
import Button from '../shared/Button'
import SnackError from '../shared/SnackError'
import {component, locationIcon, input, header} from './Location.module.css';
import {fetchGeolocation, fetchGoogle, fetchGoogleErrors} from '../../utils/api.js'

export default function Location({setLatitude, setLongitude}) {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const handleClose = () => {
        setOpen(false)
    }

    const onChange = event => {
        setValue(event.target.value)
    }

    const onGetLocation = () => {
        fetchGeolocation()
            .then(pos => {
                const crd = pos.coords;
                setLatitude(crd.latitude)
                setLongitude(crd.longitude)
                setOpen(false);
            })
            .catch(error => {
                setMessage(error.message)
                setOpen(true);
            })
    }

    const getLocation = text => {
        fetchGoogle(text)
            .then(res => {
                const {results} = res

                if (results.length > 0) {
                    const {lat, lng} = results[0].geometry.location
                    setLatitude(lat)
                    setLongitude(lng)
                    setOpen(false);
                } else {
                    throw new Error('ZERO_RESULTS')
                }
            })
            .catch(error => {
                setMessage(fetchGoogleErrors(error))
                setOpen(true);
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

            <SnackError
                open={open}
                onClose={handleClose}
                message={message}
            />
        </section>
    )
}
