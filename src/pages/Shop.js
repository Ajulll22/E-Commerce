import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import { FiArrowUpRight, FiPlusCircle } from 'react-icons/fi'
import Card from 'react-bootstrap/Card';
import test from '../images/test.png'

const Shop = () => {
    return (
        <body>
            <div class="px-4 pt-5 my-5 text-center border-top">
                <h5 class="title display-4 fw-bold">Gaming Gear</h5>
            </div>
            <hr />
            <hr />
            <Container fluid>
                <Row>
                    <Col className='bg-light mx-2' md={3}>
                        <h4 className='mt-3'><strong>Daftar Kategori</strong></h4>
                        <hr />
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                <h4>A list item</h4>
                                <FiArrowUpRight size={35} />
                            </li>
                        </ul>
                    </Col>
                    <Col className='mx-2 my-auto'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={test} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <div class="d-flex justify-content-between align-items-center">
                                    <FiPlusCircle size={40} />

                                    <h5 style={{ color: "#53ADD1" }} >Rp. 130.000,00</h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </body>
    )
}

export default Shop