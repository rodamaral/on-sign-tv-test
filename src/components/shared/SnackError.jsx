import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import {error} from './shared.module.css'

export default function SnackError({
    open,
    message,
    autoHideDuration = 3000,
    anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'left',
    },
    onClose,
}) {
    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
            ContentProps={{className: error}}
            message={<span>{message}</span>}
        />
    )
}
