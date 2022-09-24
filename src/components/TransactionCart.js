import { MDBCol, MDBInput, MDBTypography } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { numberWithCommas } from '../utils/CostFormat'
import Address from './Address'
import ErrorMessage from './ErrorMessage'

const TransactionCart = ({ carts }) => {
    const total_trx = carts.reduce(function (result, item) {
        return result + item.total_harga;
    }, 0);
    const [address, setAddress] = useState('')
    const [show, setShow] = useState(false)
    const [error, setError] = useState([])

    const CheckOut = () => {
        if (carts.length === 0) {
            setError(['Keranjang Kosong'])
            setShow(true)
            console.log(1);
        } else if (address.length < 5) {
            setError(['Alamat Kosong'])
            setShow(true)
            console.log(1);
        }
    }

    return (
        <MDBCol lg="4" className="bg-grey">
            <div className="p-5">
                <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                    Summary
                </MDBTypography>

                <hr className="my-4" />
                {
                    error.length ?
                        <ErrorMessage error={error} show={show} setShow={setShow} />
                        : null
                }
                <Address address={address} setAddress={setAddress} />

                <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Give code
                </MDBTypography>

                <div className="mb-5">
                    <MDBInput size="lg" label="Enter your code" />
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-5">
                    <MDBTypography tag="h5" className="text-uppercase">
                        Total price
                    </MDBTypography>
                    <MDBTypography tag="h5">Rp. {numberWithCommas(total_trx)}</MDBTypography>
                </div>

                <Button onClick={CheckOut} variant='secondary'>Check Out</Button>
            </div>
        </MDBCol>
    )
}

export default TransactionCart