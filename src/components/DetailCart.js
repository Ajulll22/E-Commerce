import { MDBCol, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import ListCart from './ListCart'

const DetailCart = () => {
    return (
        <MDBCol lg="8">
            <div className="p-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                        Shopping Cart
                    </MDBTypography>
                    <MDBTypography className="mb-0 text-muted">
                        3 items
                    </MDBTypography>
                </div>

                <hr className="my-4" />

                <ListCart />

            </div>
        </MDBCol>
    )
}

export default DetailCart