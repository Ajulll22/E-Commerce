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
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [carts, setCarts] = useState([])
    const [cartCheck, setCartCheck] = useState([])
    const [idCheck, setIdCheck] = useState([])
    const [show, setShow] = useState(false)
    const [error, setError] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        getCart()
    }, [])

    useEffect(() => {
        getTotalHarga()
    }, [idCheck])

    const getCart = async () => {
        const response = await axios.get(API_URL + "cart", {
            withCredentials: true
        })
        setCarts(response.data)
    }

    const getTotalHarga = async () => {
        const response = await axios.post(API_URL + "cart/checked", { id_check: idCheck },
            {
                withCredentials: true
            })
        console.log(response.data);
        setCartCheck(response.data)
    }

    const onCheckout = async () => {
        try {
            const response = await axios.post(API_URL + "transaction", { id_cart: idCheck },
                {
                    withCredentials: true
                })
            navigate("/success")
        } catch (error) {
            const message = error.response.data.message
            if (typeof message === "object") {
                setError(error.response.data.message)
            } else {
                setError([error.response.data.message])
            }
            setShow(true)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
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
                                        <DetailCart
                                            getTotalHarga={getTotalHarga}
                                            idCheck={idCheck}
                                            setIdCheck={setIdCheck}
                                            getCart={getCart}
                                            carts={carts} />

                                        <TransactionCart
                                            onCheckout={onCheckout}
                                            error={error}
                                            show={show}
                                            setShow={setShow}
                                            carts={cartCheck} />
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