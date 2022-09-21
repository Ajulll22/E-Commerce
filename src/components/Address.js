import { MDBTypography } from 'mdb-react-ui-kit'
import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BsPencilSquare } from 'react-icons/bs'
import AuthContext from './AuthContext'

const Address = () => {
    const { user } = useContext(AuthContext)
    const [edit, setEdit] = useState(false)
    const [address, setAddress] = useState('')

    const Edit = () => {
        setEdit(true)
        setAddress(`${user.alamat_user}`)
    }

    return (
        <>
            <MDBTypography tag="h5" className="text-uppercase mb-3">
                Address
            </MDBTypography>
            {edit === false
                ? <p>{user.alamat_user} <BsPencilSquare onClick={Edit} className='add-to-cart' /></p>
                : <Form>
                    <Form.Control as="textarea" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} />
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