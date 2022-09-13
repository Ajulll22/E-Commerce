import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col'
import { FiPlusCircle } from 'react-icons/fi'
import { numberWithCommas } from '../utils/CostFormat';


const ListProduct = ({ product }) => {

    return (
        <Col md={4} xs={6} className="mb-3">
            <Card className='card-product'>
                <Card.Img variant="top" src={product.url_product} />
                <Card.Body>
                    <Card.Title>{product.nama_product}</Card.Title>

                    <div className="d-flex justify-content-between align-items-center">
                        <FiPlusCircle size={40} />

                        <h5 style={{ color: "#53ADD1" }} >Rp. {numberWithCommas(product.harga_product)}</h5>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ListProduct