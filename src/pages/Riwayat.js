import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import Header from '../components/Header'
import ListTransaction from '../components/ListTransaction'
import { API_URL } from '../utils/Api'
import no_data from '../images/not-found.svg'

const Riwayat = () => {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        getTransactions()
    }, [])

    const getTransactions = async () => {
        const response = await axios.get(API_URL + "transaction", {
            withCredentials: true
        })
        setTransactions(response.data)
    }

    return (
        <>
            <Header />
            <hr />
            <Container className='mt-5'>
                <Row>
                    {
                        transactions.length
                            ? transactions.map((transaction) => (<ListTransaction key={transaction.id_trx} transaction={transaction} />))
                            : <div className='text-center mt-3'>
                                <Image width={'50%'} height={'50%'} src={no_data} />
                                <h2>Data Not Found</h2>
                            </div>
                    }
                </Row>
            </Container>
            <hr />
        </>
    )
}

export default Riwayat