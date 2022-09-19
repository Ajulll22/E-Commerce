import { MDBBtn, MDBCol, MDBInput, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import { Button } from 'react-bootstrap'

const TransactionCart = () => {
    return (
        <MDBCol lg="4" className="bg-grey">
            <div className="p-5">
                <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                    Summary
                </MDBTypography>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-4">
                    <MDBTypography tag="h5" className="text-uppercase">
                        items 3
                    </MDBTypography>
                    <MDBTypography tag="h5">€ 132.00</MDBTypography>
                </div>

                <MDBTypography tag="h5" className="text-uppercase mb-3">
                    Address
                </MDBTypography>

                <p>Jalan Pulau Damar Gg. Madrasah 7, Tanjung Senang</p>

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
                    <MDBTypography tag="h5">€ 137.00</MDBTypography>
                </div>

                <Button variant='secondary'>Check Out</Button>
            </div>
        </MDBCol>
    )
}

export default TransactionCart