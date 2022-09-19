import React, { useContext } from 'react'
import AuthContext from '../components/AuthContext';
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

const Cart = () => {
    const { user, auth } = useContext(AuthContext)
    console.log(auth);

    return (
        <>
            <Header />
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol size="12">
                            <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                                <MDBCardBody className="p-0">
                                    <MDBRow className="g-0">
                                        <DetailCart />

                                        <TransactionCart />
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