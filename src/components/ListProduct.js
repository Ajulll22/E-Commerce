import axios from 'axios';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col'
import { FiPlusCircle } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { API_URL } from '../utils/Api';
import { numberWithCommas } from '../utils/CostFormat';


const ListProduct = ({ product }) => {
    const navigate = useNavigate();

    const addCart = async (id_product) => {
        try {
            await axios.post(API_URL + "cart", { id_product }, {
                withCredentials: true
            })
            swal({
                title: "Success",
                text: "Berhasil Masuk Keranjang ",
                icon: "success",
                button: false,
                timer: 1500,
            });
        } catch (error) {
            navigate("/login")
        }

    }

    return (
        <Col sm={6} md={6} lg={4} className="mb-3 product-col">
            <Card className='card-product'>
                <Card.Img variant="top" src={product.url_product} />
                <Card.Body>
                    <Card.Title><Link className='link-nav add-to-cart' to={'/shop/' + product.id_product}>{product.nama_product}</Link></Card.Title>

                    <div className="d-flex justify-content-between align-items-center">
                        <FiPlusCircle onClick={() => addCart(product.id_product)} className='add-to-cart' size={40} />

                        <h5 style={{ color: "#53ADD1" }} >Rp. {numberWithCommas(product.harga_product)}</h5>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListProduct