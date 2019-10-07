import React, {useState} from 'react'
import Tooltip from '@material-ui/core/Tooltip'
import Progress from '@material-ui/core/LinearProgress'
import MyLocation from '@material-ui/icons/MyLocation'
import Button from '../shared/Button'
import SnackError from '../shared/SnackError'
import {component, locationIcon, input, header, inputField} from './Location.module.css';
import {fetchGeolocation, fetchGoogle, fetchGoogleErrors} from '../../utils/api.js'
import {roundCoordinate} from '../../utils/math.js'

export default function Location({setLatitude, setLongitude}) {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const onChange = event => {
        setValue(event.target.value)
    }

    const onGetLocation = () => {
        setLoading(true);
        fetchGeolocation()
            .then(pos => {
                setLoading(false);
                const crd = pos.coords;
                setLatitude(roundCoordinate(crd.latitude))
                setLongitude(roundCoordinate(crd.longitude))
                setOpen(false);
            })
            .catch(error => {
                setOpen(true);
                setLoading(false);
                setMessage(error.message)
            })
    }

    const getLocation = text => {
        setLoading(true);
        fetchGoogle(text)
            .then(res => {
                setLoading(false);
                const {results} = res

                if (results.length > 0) {
                    const {lat, lng} = results[0].geometry.location
                    setLatitude(roundCoordinate(lat))
                    setLongitude(roundCoordinate(lng))
                    setOpen(false);
                } else {
                    throw new Error('ZERO_RESULTS')
                }
            })
            .catch(error => {
                setLoading(false);
                setOpen(true);
                setMessage(fetchGoogleErrors(error))
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

            {loading &&
                <Progress />}

            <div className={input}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className={inputField}
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
