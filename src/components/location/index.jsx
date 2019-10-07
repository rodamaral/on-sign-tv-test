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
    /* location input for controlled component */
    const [location, setLocation] = useState('')
    /* loading indicator for request */
    const [loading, setLoading] = useState(false)
    /* message to show in case of network/API errors */
    const [message, setMessage] = useState('');

    /* closes the Snackbar */
    const handleClose = () => {
        setMessage('')
    }

    /* input controller */
    const onChange = event => {
        setLocation(event.target.value)
    }

    /* get location from navigator */
    /* closes the Snackbar */
    const getLocationFromBrowser = () => {
        setLoading(true);
        fetchGeolocation()
            .then(pos => {
                handleClose()
                setLoading(false);
                const crd = pos.coords;
                setLatitude(roundCoordinate(crd.latitude))
                setLongitude(roundCoordinate(crd.longitude))
            })
            .catch(error => {
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
                    handleClose()
                } else {
                    throw new Error('ZERO_RESULTS')
                }
            })
            .catch(error => {
                setLoading(false);
                setMessage(fetchGoogleErrors(error))
            })
    }

    const onSubmit = () => {
        getLocation(location)
    }

    return (
        <section className={component}>
            <header className={header}>
                <h3>
                    Enter your location

                    <Tooltip title="Click to allow access to your location">
                        <MyLocation className={locationIcon} size={10} onClick={getLocationFromBrowser} />
                    </Tooltip>
                </h3>
            </header>

            {loading &&
                <Progress />}

            <div className={input}>
                <input
                    type="text"
                    value={location}
                    onChange={onChange}
                    className={inputField}
                />

                <Button
                    label="Get coordinates"
                    onClick={onSubmit}
                />
            </div>

            <SnackError
                open={message !== ''}
                onClose={handleClose}
                message={message}
            />
        </section>
    )
}
