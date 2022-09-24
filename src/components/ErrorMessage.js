import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ error, show, setShow }) => {

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <ul>
                    {error.map((err) => (
                        <li>{err}</li>
                    ))}
                </ul>
            </Alert>
        );
    }
}

export default ErrorMessage