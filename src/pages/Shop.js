import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import { useSearchParams } from 'react-router-dom'
import ListCategory from '../components/ListCategory'
import ListProduct from '../components/ListProduct'
import { API_URL } from '../utils/Api'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryQuery, setCategoryQuery] = useSearchParams();
    const [categorySelect, setCategorySelect] = useState(categoryQuery.get('id_category') || '')
    const [namaCategory, setNamaCategory] = useState('')

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
            <div className="px-4 pt-5 my-5 text-center border-top">
                <h5 className="title display-4 fw-bold">Gaming {namaCategory || 'Gear'}</h5>
            </div>
            <hr />
            <hr />
            <Container fluid>
                <Row>
                    <ListCategory categorySelect={categorySelect} onCategorySelect={onCategorySelect} categories={categories} />
                    <Col className='mx-2 my-auto'>
                        <Row className='overflow-auto'>
                            {products && products.map((product) => (
                                <ListProduct key={product.id_product} product={product} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Shop