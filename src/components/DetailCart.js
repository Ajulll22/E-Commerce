import { MDBCol, MDBTypography } from 'mdb-react-ui-kit'
import React from 'react'
import { Image } from 'react-bootstrap'
import ListCart from './ListCart'
import no_data from '../images/not-found.svg'

const DetailCart = ({ carts, getCart }) => {
    return (
        <MDBCol lg="8">
            <div className="p-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                        Shopping Cart
                    </MDBTypography>
                    <MDBTypography className="mb-0 text-muted">
                        {carts.length} items
                    </MDBTypography>
                </div>

                <hr className="my-4" />
                {carts.length ?
                    carts.map((cart) => (
                        <ListCart key={cart.id_cart} getCart={getCart} cart={cart} />
                    ))
                    : <div className='text-center mt-3'>
                        <Image width={'50%'} height={'50%'} src={no_data} />
                        <h2>Data Not Found</h2>
                    </div>
                }


            </div>
        </MDBCol>
    )
}

export default DetailCart