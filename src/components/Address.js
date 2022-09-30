import axios from 'axios'
import { MDBTypography } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsPencilSquare } from 'react-icons/bs'
import { API_URL } from '../utils/Api'

const Address = ({ user, getUserLogin, address, setAddress }) => {
    const [edit, setEdit] = useState(false)

    const Edit = () => {
        setEdit(true)
        setAddress(user.alamat_user)
    }

    const onEditAlamat = async (e) => {
        e.preventDefault();
        try {
            const data = {
                alamat_user: address
            }
            await axios.put(API_URL + "auth/user", data, {
                withCredentials: true
            })
            await getUserLogin()
            setEdit(false)
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    return (
        <>
            <MDBTypography tag="h5" className="text-uppercase mb-3">
                Address
            </MDBTypography>
            {edit === false
                ? <p>{user.alamat_user} <BsPencilSquare onClick={Edit} className='add-to-cart' /></p>
                : <Form onSubmit={onEditAlamat}>
                    <Form.Control as="textarea" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} required />
                    <Button onClick={() => setEdit(false)} size="sm" className='my-3 me-2' variant="outline-secondary">
                        Cancel
                    </Button>
                    <Button size="sm" className='my-3' variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            }
        </>
    )
}

export default Address