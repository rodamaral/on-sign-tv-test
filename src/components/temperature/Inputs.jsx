import React from 'react';
import Coordinate from './Coordinate'
import Button from '../shared/Button'
import {division} from './Temperature.module.css';

export default function Inputs({latitude, longitude, setLatitude, setLongitude, onSubmit}) {
    return (
        <div>
            <div className={division}>
                <Coordinate
                    label="Latitude"
                    value={latitude}
                    setValue={setLatitude}
                />

                <Coordinate
                    label="Longitude"
                    value={longitude}
                    setValue={setLongitude}
                />
            </div>

            <div className={division}>
                <Button
                    label="Show Temperature"
                    onClick={onSubmit}
                />
            </div >
        </div >
    )
}
