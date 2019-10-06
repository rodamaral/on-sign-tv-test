import React, {useState} from 'react'
// import Snackbar from '@material-ui/core/Snackbar'
import Snackbar from '../shared/SnackError'
import Inputs from './Inputs'
import Report from './Report'
import {fetchWeather} from '../../utils/api.js'
import {component, header, title, error} from './Temperature.module.css';

export default function Temperature({latitude, longitude, setLatitude, setLongitude}) {
    const [reportLat, setReportLat] = useState('')
    const [reportLong, setReportLong] = useState('')
    const [temperature, setTemperature] = useState('')
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = () => {
        fetchWeather(latitude, longitude)
            .then(res => {
                setTemperature(res.main.temp)
                setReportLat(latitude)
                setReportLong(longitude)
                setOpen(false);
            })
            .catch(error => {
                console.error(error)
                setOpen(true);
            })
    }

    return (
        <section className={component}>
            <header className={header}>
                <h2 className={title}>
                    Current Temperature For Location
                </h2>
            </header>

            <Inputs
                latitude={latitude}
                longitude={longitude}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                onSubmit={onSubmit}
            />

            <Snackbar
                open={open}
                onClose={handleClose}
                message="API error"
            />

            <Report
                latitude={reportLat}
                longitude={reportLong}
                temperature={temperature}
            />
        </section>
    )
}
