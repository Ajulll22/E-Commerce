import axios from 'axios'
import { MDBCardImage, MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi'
import { API_URL } from '../utils/Api'
import { numberWithCommas } from '../utils/CostFormat'
import swal from 'sweetalert'

const ListCart = ({ getTotalHarga, idCheck, setIdCheck, cart, getCart }) => {
    const [jumlah, setJumlah] = useState(cart.jumlah)
    const [totalHarga, setTotalHarga] = useState(cart.total_harga)

    const updateCart = async (id_cart, jumlah) => {
        const response = await axios.put(API_URL + "cart/" + id_cart, { jumlah }, {
            withCredentials: true
        })
        setTotalHarga(response.data.total_harga)
        await getCart()
        getTotalHarga()
    }

    const tambah = (id_cart) => {
        setJumlah(jumlah + 1)
        updateCart(id_cart, jumlah + 1)
    };


    const kurang = (id_cart) => {
        if (jumlah !== 1) {
            setJumlah(jumlah - 1)
            updateCart(id_cart, jumlah - 1)
        }
    };

    const deleteCart = (id_cart) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(API_URL + "cart/" + id_cart, {
                        withCredentials: true
                    }).then(() => {
                        getCart()
                        swal("Cart has been deleted!", {
                            icon: "success",
                        });
                    })
                }
            });

    }

    const checkBuy = (e) => {
        const { id, checked } = e.target;
        console.log(id);
        if (checked) {
            setIdCheck([...idCheck, parseInt(id)])
        } else {
            setIdCheck(idCheck.filter((e) => e !== parseInt(id)))
        }
        console.log(idCheck);
    }

    return (
        <>
            <MDBTypography tag="h6" className="text-black mb-2">
                {cart.product.nama_product}
            </MDBTypography>
            <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
                <MDBCol md="1" lg="1" xl="1">
                    <Form.Check
                        type="checkbox"
                        name="buy"
                        id={cart.id_cart}
                        onChange={(e) => checkBuy(e)}
                    />
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage
                        src={cart.product.url_product}
                        fluid className="rounded-3" alt="" />
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2">
                    <MDBTypography tag="h6" className="text-muted">
                        {cart.product.category.nama_category}
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">
                    <Button onClick={() => kurang(cart.id_cart)} variant="secondary" size="sm" className="me-2"><HiMinus /></Button>

                    <strong>{jumlah}</strong>

                    <Button onClick={() => tambah(cart.id_cart)} variant="secondary" size="sm" className="ms-2"><HiPlus /></Button>
                </MDBCol>
                <MDBCol md="3" lg="3" xl="3" className="text-end">
                    <MDBTypography tag="h6" className="mb-0">
                        Rp. {numberWithCommas(totalHarga)}
                    </MDBTypography>
                </MDBCol>
                <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <HiTrash onClick={() => deleteCart(cart.id_cart)} className='add-to-cart' size={35} />
                </MDBCol>
            </MDBRow>
            <hr className="my-4" /></>
    )
}

export default ListCart