import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import { API_URL } from '../utils/Api'
import { numberWithCommas } from '../utils/CostFormat'
import { BsCartPlus } from 'react-icons/bs'
import ActionAdmin from '../components/ActionAdmin'
import swal from 'sweetalert'

const Detail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        getProduct()
    }, [])

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
            console.log(error);
        }

    }

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
                <h3 className="fw-bold lh-1 mb-3">{product.nama_product}</h3>
                <hr />
                <h5 style={{ color: "#53ADD1" }} >Rp. {product.harga_product && numberWithCommas(product.harga_product)}</h5>
                <hr />
                <div className="row flex-lg-row-reverse g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={product.url_product} className="d-block mx-lg-auto img-fluid img-thumbnail" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <div className='deskripsi' dangerouslySetInnerHTML={{ __html: product.deskripsi_product }}></div>
                        <hr />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Button onClick={() => addCart(id)} size='small' variant='secondary'><BsCartPlus style={{ verticalAlign: "bottom" }} size={30} /> Add To Cart</Button>
                        </div>
                    </div>
                </div>

            </Container>
            <ActionAdmin id_product={id} />

        </>
    )
}

export default Detail