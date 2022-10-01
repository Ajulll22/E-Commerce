import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import success from '../images/success.svg'

const Success = () => {
    let navigate = useNavigate();

    return (
        <>
            <Header />
            <hr className='mb-4' />
            <Container>
                <div className='text-center mt-3'>
                    <Image width={"50%"} src={success} className="mb-3" fluid />
                    <h4><strong>Successful Payment</strong></h4>
                    <Button onClick={() => navigate(-1)} variant='outline-info'>Back</Button>
                </div>
            </Container>
        </>
    )
}

export default Success