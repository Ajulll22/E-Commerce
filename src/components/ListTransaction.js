import React, { useState } from 'react'
import { Card, Col, Image, Row } from 'react-bootstrap'
import { numberWithCommas } from '../utils/CostFormat';
import { showFormattedDate, dateToId } from '../utils/DateFormat';
import DetailTransaction from './DetailTransaction';

const ListTransaction = ({ transaction }) => {
    const [modal, setModal] = useState(false)
    const preview = transaction.trx_item[0];
    let status;
    if (transaction.status_trx === 1) {
        status = <p className='rounded bg-info align-items-center mx-3 px-1 fst-italic'>Diproses</p>
    } else if (transaction.status_trx === 2) {
        status = <p className='rounded bg-warning align-items-center mx-3 px-1 fst-italic'>Dikirim</p>
    } else {
        status = <p className='rounded bg-success text-white align-items-center mx-3 px-1 fst-italic'>Selesai</p>
    }

    return (
        <>
            <Card className='shadow-sm mb-2'>
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <p>{showFormattedDate(transaction.created_at)}</p>
                        {status}
                        <p>IVR/{dateToId(transaction.created_at)}/XXII/VII/{transaction.id_trx}</p>
                    </div>
                    <Row className='d-flex justify-content-between align-items-center'>
                        <hr className='hr-no-margin' />
                        <Col sm={12} md={12} lg={2}>
                            <Image fluid className="rounded-3" src={preview.product.url_product} />
                        </Col>
                        <Col sm={12} md={12} lg={10}>
                            <p className='fw-bold mb-1'>{preview.product.nama_product}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p className='text-muted mb-1'>{preview.product.category.nama_category}</p>
                                    <p className='mb-1'>{preview.jumlah_item} barang x {numberWithCommas(preview.product.harga_product)}</p>
                                    {
                                        transaction.trx_item.length > 1
                                        && <p className='mb-1'>+{transaction.trx_item.length - 1} Produk Lainnya</p>
                                    }

                                </div>
                                <div>Total Belanja : Rp. {numberWithCommas(transaction.total_trx)}</div>
                            </div>
                        </Col>
                        <hr className='hr-no-margin' />
                    </Row>
                    <div className='text-end mt-1'>
                        <strong onClick={() => setModal(true)} style={{ cursor: 'pointer' }} >Lihat Detail</strong>
                    </div>
                </Card.Body>
            </Card>
            <DetailTransaction preview={preview} status={status} modal={modal} setModal={setModal} transaction={transaction} />
        </>
    )
}

export default ListTransaction