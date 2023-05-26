import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

function ProductForm() {
    let { id } = useParams()

    let navigate = useNavigate()
    let [product, setProduct] = useState({})
    let [formValues, setFormValues] = useState({
        productName: "",
        price: "",
        quantity: "",
    })

    let valuesHandler = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    let handeleFormAction = (event) => {
        event.preventDefault()
        if (id == 0) {
            axios.post("http://localhost:3005/products/", formValues).then((response) => {
                navigate("/products/")
            })
        } else {
            axios.put(`http://localhost:3005/products/${id}`, formValues)
                .then((response) => {
                    navigate("/products/")
                })
        }

    }

    let getProduct = async () => {
        let response = await axios.get(`http://localhost:3005/products/${id}`);
        setProduct(response.data)
        setFormValues(response.data)
    }

    useEffect(() => {
        if (id != 0) {
            getProduct()
        }
    }, [id])

    return (
        <div className='container mt-5 bg-dark p-5 d-flex justify-content-center w-50'>
            <Form className='text-light' onSubmit={handeleFormAction}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onChange={valuesHandler} value={formValues.productName} name='productName' type="text" placeholder="Product Name" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={valuesHandler} value={formValues.price} name='price' type="text" placeholder="enter product Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={valuesHandler} value={formValues.quantity} name='quantity' type="numberHere's a continuation of the previous message with the corrected code:

or" placeholder="enter product Quantity" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {
                        id == 0 ? "Add Product" : "Edit Product"
                    }

                </Button>
            </Form>
        </div>
    )
}

export default ProductForm;