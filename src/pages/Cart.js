import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow,
} from "mdb-react-ui-kit";
import DetailCart from '../components/DetailCart';
import TransactionCart from '../components/TransactionCart';
import axios from 'axios';
import { API_URL } from '../utils/Api';

const Cart = () => {
    const [carts, setCarts] = useState([])

    useEffect(() => {
        getCart()
    }, [])

    const getCart = async () => {
        const response = await axios.get(API_URL + "cart", {
            withCredentials: true
        })
        setCarts(response.data)
    }

    return (
        <>
            <Header />
            <hr />
            <section className="h-100 h-custom">
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol size="12">
                            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <MDBCardBody className="p-0">
                                    <MDBRow className="g-0">
                                        <DetailCart getCart={getCart} carts={carts} />

                                        <TransactionCart carts={carts} />
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </>
    );
}

export default Cart