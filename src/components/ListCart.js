import { MDBCardImage, MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import { Button } from 'react-bootstrap'
import { HiMinus, HiPlus } from 'react-icons/hi'

const ListCart = () => {
    return (
        <>
            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                        fluid className="rounded-3" alt="Cotton T-shirt" />
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3">
                    <MDBTypography tag="h6" className="text-muted">
                        Shirt
                    </MDBTypography>
                    <MDBTypography tag="h6" className="text-black mb-0">
                        Cotton T-shirt
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                    <Button variant="secondary" size="sm" className="m-2"><HiMinus /></Button>

                    <strong>1</strong>

                    <Button variant="secondary" size="sm" className="m-2"><HiPlus /></Button>
                </MDBCol>
                <MDBCol md="3" lg="2" xl="2" className="text-end">
                    <MDBTypography tag="h6" className="mb-0">
                        € 44.00
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <Button variant="secondary" size="sm">X</Button>
                </MDBCol>
            </MDBRow>
            <hr className="my-4" /></>
    )
}

export default ListCart