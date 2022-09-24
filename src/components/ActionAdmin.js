import axios from 'axios'
import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { API_URL } from '../utils/Api'
import AuthContext from './AuthContext'

const ActionAdmin = ({ id_product }) => {
    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    const deleteProduct = (id_product) => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.delete(API_URL + "products/" + id_product, {
                        withCredentials: true
                    }).then(() => {
                        swal("Cart has been deleted!", {
                            icon: "success",
                        }).then(() => {
                            navigate(-1)
                        })
                    })
                }
            });

    }

    return (
        <>
            {user.level_user === 2 &&
                <div style={{ position: "fixed", bottom: "10px", right: "20px" }}>
                    <Link to={"/shop/edit/" + id_product}>
                        <Button variant='outline-info' className='btn-circle btn-sm me-2' >
                            <FiEdit2 size={15} />
                        </Button>
                    </Link>
                    <Button onClick={() => deleteProduct(id_product)} variant="outline-danger" className='btn-circle btn-sm' >
                        <FiTrash size={15} />
                    </Button>
                </div>}
        </>

    )
}

export default ActionAdmin