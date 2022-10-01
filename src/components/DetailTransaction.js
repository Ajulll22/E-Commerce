import React from 'react'
import { Container, Modal } from 'react-bootstrap'
import { numberWithCommas } from '../utils/CostFormat'
import { dateToId, showFormattedDate } from '../utils/DateFormat'
import ListTrxItem from './ListTrxItem'

const DetailTransaction = ({ preview, modal, setModal, transaction, status }) => {
    return (
        <Modal
            size="lg"
            show={modal}
            onHide={() => setModal(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header className='border-0 p-0 me-3 mt-3' closeButton>
            </Modal.Header>
            <div className='text-center'>
                <h4>Detail Pesanan</h4>
            </div>
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    {status}
                </div>

                <hr
                    className="mt-1 mb-2"
                    style={{
                        height: "0",
                        backgroundColor: "transparent",
                        opacity: ".75",
                        borderTop: "2px dashed #9e9e9e",
                    }}
                />
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className='mb-1'>No. Invoice</p>
                        <p className='mb-1'>Tanggal Pembelian</p>
                        <p className='mb-1'>Alamat</p>
                    </div>
                    <div className='text-end'>
                        <p className='mb-1 fw-bold'>IVR/{dateToId(transaction.created_at)}/XXII/VII/{transaction.id_trx}</p>
                        <p className='mb-1'>{showFormattedDate(transaction.created_at)}</p>
                        <p className='mb-1'>{transaction.alamat_trx}</p>
                    </div>
                </div>
                <hr className="mt-1 mb-2" />
                <h5>Detail Produk</h5>
                {
                    transaction.trx_item.map((item) => (
                        <ListTrxItem item={item} />
                    ))
                }
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <p className='fw-bold'>Total Belanja</p>
                    <p className='fw-bold'>Rp. {numberWithCommas(transaction.total_trx)}</p>
                </div>
            </Container>
        </Modal>
    )
}

export default DetailTransaction