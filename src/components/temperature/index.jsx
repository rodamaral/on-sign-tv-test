import React, {useState} from 'react'
import Progress from '@material-ui/core/LinearProgress'
import SnackError from '../shared/SnackError'
import Inputs from './Inputs'
import Report from './Report'
import {fetchWeather, fetchWeatherErrors} from '../../utils/api.js'
import {component, header, title} from './Temperature.module.css';

export default function Temperature({latitude, longitude, setLatitude, setLongitude}) {
    const [reportLat, setReportLat] = useState('')
    const [reportLong, setReportLong] = useState('')
    const [temperature, setTemperature] = useState('')
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = () => {
        setLoading(true);
        fetchWeather(latitude, longitude)
            .then(res => {
                setLoading(false);
                setOpen(false);
                setTemperature(res.main.temp)
                setReportLat(latitude)
                setReportLong(longitude)
            })
            .catch(error => {
                setLoading(false);
                setOpen(true);
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
                open={open}
                onClose={handleClose}
                message={message}
            />
        </section>
    )
}
