import React from 'react';
import {useHistory} from "react-router-dom"

export default function BackButton() {
    const history = useHistory()
    const handleBack = () => {
        history.push('/')
    }
    return (
        <div>
            <button onClick={handleBack}>Home</button>
        </div>
    )
}
