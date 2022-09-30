import React, { useEffect, useState } from 'react'
import { Button, Container, Figure, Form } from 'react-bootstrap'
import Header from '../components/Header'
import 'react-quill/dist/quill.snow.css'
import Editor from '../components/Editor'
import axios from 'axios'
import { API_URL } from '../utils/Api'
import ErrorMessage from '../components/ErrorMessage'
import swal from 'sweetalert'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
    const { id } = useParams()
    const [deskripsi, setDeskripsi] = useState(null);
    const [file, setFile] = useState(null);
    const [nama, setNama] = useState(null);
    const [kategori, setKategori] = useState(null)
    const [harga, setHarga] = useState(null)
    const [error, setError] = useState([]);
    const [show, setShow] = useState(true);


    const [preview, setPreview] = useState(null);
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        getCategories()
        getProduct()
    }, [])

    const getCategories = async () => {
        const response = await axios.get(API_URL + "categories")
        setCategories(response.data)
    }

    const getProduct = async () => {
        try {
            console.log(1);
            const response = await axios.get(API_URL + "products/" + id)
            setNama(response.data.nama_product)
            setKategori(response.data.id_category)
            setHarga(response.data.harga_product)
            setPreview(response.data.url_product)
            setDeskripsi(response.data.deskripsi_product)
        } catch (error) {
            navigate(-1)
        }
    }

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }

    const onEditProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_product", nama)
        formData.append("deskripsi_product", deskripsi)
        formData.append("harga_product", harga)
        formData.append("id_category", kategori)
        formData.append("file", file)
        try {
            await axios.put(API_URL + "products/" + id, formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                },
                withCredentials: true
            })
            await swal({
                title: "Success",
                text: "Berhasil Update Produk",
                icon: "success",
                button: false,
                timer: 1500,
            });
            navigate(-1)
        } catch (error) {
            const message = error.response.data.message
            if (typeof message === "object") {
                setError(error.response.data.message)
            } else {
                setError([error.response.data.message])
            }
            setShow(true)
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

    }

    return (
        <>
            <Header />
            <hr />
            <Container>
                <div className='py-5'>
                    {
                        error.length ?
                            <ErrorMessage error={error} show={show} setShow={setShow} />
                            : null
                    }
                    <Form onSubmit={onEditProduct}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nama Produk</Form.Label>
                            <Form.Control value={nama} onChange={(e) => setNama(e.target.value)} type="text" placeholder="Nama Produk" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Kategori Produk</Form.Label>
                            <Form.Select value={kategori} onChange={(e) => setKategori(e.target.value)} aria-label="Default select example">
                                <option>Pilih Kategori</option>
                                {categories && categories.map((category) => (
                                    <option key={category.id_category} value={category.id_category}>{category.nama_category}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Harga Produk</Form.Label>
                            <Form.Control value={harga} onChange={(e) => setHarga(e.target.value)} type="number" placeholder="Harga Product" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gambar Produk</Form.Label>
                            <Form.Control type="file" onChange={loadImage} accept=".png, .jpeg, .jpg, .webp" placeholder="name@example.com" />
                        </Form.Group>
                        {preview ? (
                            <Figure>
                                <Figure.Image
                                    width={200}
                                    height={200}
                                    src={preview}
                                />
                            </Figure>
                        ) : ("")}
                        <Form.Group className="mb-3">
                            <Form.Label>Deskripsi Produk</Form.Label>
                            <Editor deskripsi={deskripsi} setDeskripsi={setDeskripsi} />
                        </Form.Group>
                        <div className='mt-5 text-end'>
                            <Button type='submit' variant='secondary'>Update</Button>
                        </div>

                    </Form>
                </div>
            </Container>
        </>
    )
}

export default EditProduct