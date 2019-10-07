import React from 'react';
import {header, title} from './Header.module.css';

export default function Header() {
    return (
        <header className={`centralizedSection ${header}`}>
            <h2 className={title}>
                OnSign TV Temperature App
            </h2>
        </header>
    )
}
