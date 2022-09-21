import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { API_URL } from '../utils/Api'

const Detail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        getProduct()
    })

    const getProduct = async () => {
        try {
            const response = await axios.get(API_URL + "products/" + id)
            setProduct(response.data)
        } catch (error) {
            navigate("/shop")
        }
    }

    return (
        <>
            <Header />
            <hr />
            <Container>
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={product.url_product} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-6 fw-bold lh-1 mb-3">{product.nama_product}</h1>
                        <hr />
                        <p>{product.deskripsi_product}</p>
                        <hr />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Button size='small' variant='secondary'>Add To Cart</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Detail