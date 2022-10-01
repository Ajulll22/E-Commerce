import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import { Link, useSearchParams } from 'react-router-dom'
import Header from '../components/Header'
import ListCategory from '../components/ListCategory'
import ListProduct from '../components/ListProduct'
import { API_URL } from '../utils/Api'
import Image from 'react-bootstrap/Image'
import no_data from '../images/not-found.svg'
import { Button } from 'react-bootstrap'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import AuthContext from '../components/AuthContext'
import Paginate from '../components/Paginate'


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryQuery, setCategoryQuery] = useSearchParams();
    const [categorySelect, setCategorySelect] = useState(categoryQuery.get('id_category') || '')
    const [namaCategory, setNamaCategory] = useState('')
    const [page, setPage] = useState(categoryQuery.get('page') || 0);
    const [pages, setPages] = useState(0);

    const { user } = useContext(AuthContext)

    const changePage = ({ selected }) => {
        setPage(selected)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        categoryQuery.set("page", selected)
        setCategoryQuery(categoryQuery)
    }

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [categorySelect, page])


    const onCategorySelect = (id_category, nama_category) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (id_category === categorySelect) {
            setCategorySelect('')
            setNamaCategory('')
            categoryQuery.delete("id_category")
            setCategoryQuery(categoryQuery)
        } else {
            setCategorySelect(id_category)
            setNamaCategory(nama_category)
            categoryQuery.delete("page")
            categoryQuery.set("id_category", id_category)
            setCategoryQuery(categoryQuery)
        }
        setPage(0)
    }

    const getProducts = async () => {
        const response = await axios.get(API_URL + "products?id_category=" + categorySelect + "&page=" + page)
        setProducts(response.data.result)
        setPage(response.data.page);
        setPages(response.data.totalPage);
    }

    const getCategories = async () => {
        const response = await axios.get(API_URL + "categories")
        setCategories(response.data)
    }


    return (
        <div>
            <Header />
            <hr />
            <div className="px-4 pt-5 my-5 text-center">
                <h5 className="title display-4 fw-bold">Gaming {namaCategory || 'Gear'}</h5>
            </div>

            <Container fluid>
                <hr />
                <div className='text-end'>
                    {user.level_user === 2 && <Link to={"/shop/add"}><Button variant='secondary'><AiOutlinePlusSquare style={{ verticalAlign: "bottom" }} size={30} /> Add Product</Button></Link>}

                </div>
                <hr />
                <Row>
                    <ListCategory categorySelect={categorySelect} onCategorySelect={onCategorySelect} categories={categories} />
                    <Col className='mx-2 my-auto'>

                        <Row>
                            {products.length ?
                                <>
                                    <Paginate pages={pages} changePage={changePage} />
                                    {products.map((product) => (
                                        <ListProduct key={product.id_product} product={product} />
                                    ))}
                                </>
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