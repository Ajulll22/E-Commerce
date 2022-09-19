import React from 'react'
import { Alert } from 'react-bootstrap'

const ErrorLogin = ({ error, show, setShow }) => {

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    {error}
                </p>
            </Alert>
        );
    }
}

export default ErrorLogin