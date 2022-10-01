import React from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/CostFormat'

const ListTrxItem = ({ item }) => {
    return (
        <Card className='shadow-sm mb-2'>
            <Card.Body>
                <Row className='d-flex justify-content-between align-items-center'>
                    <Col sm={2} md={2} lg={2}>
                        <Image fluid className="rounded-3" src={item.product.url_product} />
                    </Col>
                    <Col sm={10} md={10} lg={10}>
                        <p className='fw-bold mb-1'>{item.product.nama_product}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <p className='text-muted mb-1'>{item.product.category.nama_category}</p>
                                <p className='mb-1'>{item.jumlah_item} barang x {numberWithCommas(item.product.harga_product)}</p>
                            </div>
                            <div>Total Harga : Rp. {numberWithCommas(item.harga_item)}</div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ListTrxItem