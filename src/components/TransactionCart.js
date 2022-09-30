import { MDBCol, MDBInput, MDBTypography } from 'mdb-react-ui-kit'
import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { numberWithCommas } from '../utils/CostFormat'
import Address from './Address'
import AuthContext from './AuthContext'
import ErrorMessage from './ErrorMessage'

const TransactionCart = ({ error, show, setShow, onCheckout, carts }) => {
    const total_trx = carts.reduce(function (result, item) {
        return result + item.total_harga;
    }, 0);
    const { user, getUserLogin } = useContext(AuthContext)
    const [address, setAddress] = useState(user.alamat_user)

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
                <Address user={user} getUserLogin={getUserLogin} address={address} setAddress={setAddress} />

                <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Give code
                </MDBTypography>

                <div className="mb-5">
                    <MDBInput size="lg" label="Enter your code" />
                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-5">
                    <MDBTypography tag="h6" >
                        Total Harga
                    </MDBTypography>
                    <MDBTypography tag="h6">Rp. {numberWithCommas(total_trx)}</MDBTypography>
                </div>

                <Button className={carts.length === 0 && "disabled"} onClick={onCheckout} variant='secondary'>Check Out</Button>
            </div>
        </MDBCol>
    )
}

export default TransactionCart