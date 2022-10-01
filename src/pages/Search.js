import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
import Paginate from '../components/Paginate'


const Search = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState('')
    const [pages, setPages] = useState('')
    const [rows, setRows] = useState('')

    const [categories, setCategories] = useState([]);
    const [categoryQuery, setCategoryQuery] = useSearchParams();
    const [categorySelect, setCategorySelect] = useState(categoryQuery.get('id_category') || '')

    const [query] = useSearchParams();
    const [keyword, setKeyword] = useState(query.get('keyword') || '')

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    useEffect(() => {
        getProducts()
    }, [categorySelect, keyword, page])

    const changePage = ({ selected }) => {
        setPage(selected)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        categoryQuery.set("page", selected)
        setCategoryQuery(categoryQuery)
    }

    const onCategorySelect = (id_category) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (id_category === categorySelect) {
            setCategorySelect('')
            categoryQuery.delete("id_category")
            setCategoryQuery(categoryQuery)
        } else {
            setCategorySelect(id_category)
            categoryQuery.delete("page")
            categoryQuery.set("id_category", id_category)
            setCategoryQuery(categoryQuery)
        }
        setPage(0)
    }

    const getProducts = async () => {
        const response = await axios.get(API_URL + "products?id_category=" + categorySelect + "&search=" + keyword + "&page=" + page)
        setProducts(response.data.result)
        setPage(response.data.page);
        setPages(response.data.totalPage);
        setRows(response.data.totalRows);
    }

    const getCategories = async () => {
        const response = await axios.get(API_URL + "categories")
        setCategories(response.data)
    }


    return (
        <div>
            <Header setKeyword={setKeyword} />
            <div className="px-4 pt-5 my-5 text-center border-top">
                <h5 className="title"> Showing {rows} Result for '{keyword}'</h5>
            </div>
            <hr />
            <hr />
            <Container fluid>
                <Row>
                    <ListCategory categorySelect={categorySelect} onCategorySelect={onCategorySelect} categories={categories} />
                    <Col className='mx-2 my-auto'>
                        <Row className='overflow-auto'>
                            {products.length ?
                                <>
                                    <Paginate pages={pages} changePage={changePage} />
                                    {products && products.map((product) => (
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

export default Search