import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import { useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import ListCategory from '../components/ListCategory'
import ListProduct from '../components/ListProduct'
import { API_URL } from '../utils/Api'
import Image from 'react-bootstrap/Image'
import no_data from '../images/not-found.svg'
import { Button } from 'react-bootstrap'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import AuthContext from '../components/AuthContext'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryQuery, setCategoryQuery] = useSearchParams();
    const [categorySelect, setCategorySelect] = useState(categoryQuery.get('id_category') || '')
    const [namaCategory, setNamaCategory] = useState('')
    const { user } = useContext(AuthContext)

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [categorySelect])


    const onCategorySelect = (id_category, nama_category) => {
        setCategorySelect(id_category)
        setNamaCategory(nama_category)
        setCategoryQuery({ id_category })
    }

    const getProducts = async () => {
        const response = await axios.get(API_URL + "products?id_category=" + categorySelect)
        setProducts(response.data.result)
    }

    const getCategories = async () => {
        const response = await axios.get(API_URL + "categories")
        setCategories(response.data)
    }


    return (
        <div>
            <Header />
            <div className="px-4 pt-5 my-5 text-center border-top">
                <h5 className="title display-4 fw-bold">Gaming {namaCategory || 'Gear'}</h5>
            </div>

            <Container fluid>
                <hr />
                <div className='text-end'>
                    {user.level_user === 2 && <Button variant='secondary'><AiOutlinePlusSquare style={{ "vertical-align": "bottom" }} size={30} /> Add Product</Button>}

                </div>
                <hr />
                <Row>
                    <ListCategory categorySelect={categorySelect} onCategorySelect={onCategorySelect} categories={categories} />
                    <Col className='mx-2 my-auto'>
                        <Row>
                            {products.length ?
                                products.map((product) => (
                                    <ListProduct key={product.id_product} product={product} />
                                ))
                                : <div className='text-center mt-3'>
                                    <Image width={'50%'} height={'50%'} src={no_data} />
                                    <h2>Data Not Found</h2>
                                </div>
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Shop