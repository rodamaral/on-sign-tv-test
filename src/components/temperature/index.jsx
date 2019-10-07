import React, {useState} from 'react'
import Progress from '@material-ui/core/LinearProgress'
import SnackError from '../shared/SnackError'
import Inputs from './Inputs'
import Report from './Report'
import {fetchWeather, fetchWeatherErrors} from '../../utils/api.js'
import {component, header, title} from './Temperature.module.css';

export default function Temperature({latitude, longitude, setLatitude, setLongitude}) {
    /* the coordinates in the Report are not the same as in the input */
    const [reportLat, setReportLat] = useState('')
    const [reportLong, setReportLong] = useState('')
    const [temperature, setTemperature] = useState('')
    /* loading indicator for request */
    const [loading, setLoading] = useState(false)
    /* message to show in case of network/API errors */
    const [message, setMessage] = useState('');

    /* closes the Snackbar */
    const handleClose = () => {
        setMessage('')
    }

    const onSubmit = () => {
        setLoading(true);
        fetchWeather(latitude, longitude)
            .then(res => {
                handleClose()
                setLoading(false);
                setTemperature(res.main.temp)
                setReportLat(latitude)
                setReportLong(longitude)
            })
            .catch(error => {
                setLoading(false);
                setMessage(fetchWeatherErrors(error))
            })
    }

    return (
        <section className={component}>
            <header className={header}>
                <h2 className={title}>
                    Current Temperature For Location
                </h2>
            </header>

            {loading &&
                <Progress />}

            <Inputs
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                onSubmit={onSubmit}
            />

            <Report
                latitude={reportLat}
                longitude={reportLong}
                temperature={temperature}
            />

            <SnackError
                open={message !== ''}
                onClose={handleClose}
                message={message}
            />
        </section>
    )
}
