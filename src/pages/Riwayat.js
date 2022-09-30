import React from 'react'
import { Badge, Card, Col, Container, Image, Row } from 'react-bootstrap'
import Header from '../components/Header'

const Riwayat = () => {
    return (
        <>
            <Header />
            <hr />
            <Container className='mt-5'>
                <Row>
                    <Card className='shadow-sm mb-2'>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>26 Jul 20022</p>
                                <p className='rounded bg-warning align-items-center mx-3 px-1 fst-italic'>Dikirim</p>
                                <p>IVR/20220726/XXII/VII/1272959144</p>
                            </div>
                            <Row className='d-flex justify-content-between align-items-center'>
                                <hr className='hr-no-margin' />
                                <Col sm={12} md={12} lg={2}>
                                    <Image fluid className="rounded-3" src='http://localhost:5000/images/product-20220923214403.webp' />
                                </Col>
                                <Col sm={12} md={12} lg={10}>
                                    <p className='fw-bold'>Alloy Origins Core Tenkeyless Mechanical Gaming Keyboard</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className='text-muted'>Keyboard</p>
                                            <p>1 barang x 150,000</p>
                                            <p>+1 Produk Lainnya</p>
                                        </div>
                                        <div>Total Harga : Rp. 150,000</div>
                                    </div>
                                </Col>
                                <hr className='hr-no-margin' />
                            </Row>
                            <div className='text-end mt-1'>
                                <strong>Lihat Detail</strong>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Riwayat