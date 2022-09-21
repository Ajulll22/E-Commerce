import React, { useContext, useState } from 'react'
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/Api';
import { useNavigate } from 'react-router-dom';
import ErrorLogin from '../components/ErrorLogin';
import AuthContext from '../components/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [show, setShow] = useState(true);
    let navigate = useNavigate();
    const { setAuth } = useContext(AuthContext)

    const onLogin = async (e) => {
        try {
            e.preventDefault();
            const data = {
                'email_user': email,
                'password_user': password
            }
            await axios.post(API_URL + 'auth/login', data, {
                withCredentials: true
            })
            setAuth(true)
            navigate("/")
        } catch (error) {
            setError(error.response.data.message)
            setShow(true)
        }

    }

    return (
        <MDBContainer className="my-5">

            <MDBCard>
                <MDBRow className='g-0'>

                    <MDBCol md='6'>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100' />
                    </MDBCol>

                    <MDBCol md='6'>
                        <MDBCardBody className='d-flex flex-column'>

                            <div className='d-flex flex-row mt-2'>
                                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                                <span className="h1 fw-bold mb-0">Log In</span>
                            </div>

                            <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                            {
                                error ?
                                    <ErrorLogin error={error} show={show} setShow={setShow} />
                                    : null
                            }

                            <Form onSubmit={onLogin}>

                                <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email address' type='email' size="lg" required />
                                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' type='password' size="lg" required />
                                <div className="d-grid gap-2">
                                    <Button className='mb-4 px-5' type='submit' variant="outline-secondary" size='lg'>Login</Button>
                                </div>
                            </Form>


                            <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>Register here</a></p>

                            <div className='d-flex flex-row justify-content-start'>
                                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                                <a href="#!" className="small text-muted">Privacy policy</a>
                            </div>

                        </MDBCardBody>
                    </MDBCol>

                </MDBRow>
            </MDBCard>

        </MDBContainer>
    );
}

export default Login