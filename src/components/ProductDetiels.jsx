import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

function ProductDetiels() {
    let { id } = useParams()
    let [product, setProduct] = useState({})
    let getProductData = async () => {
        let response = await axios.get(`http://localhost:3005/products/${id}`);
        setProduct(response.data)
    }
    useEffect(() => {
        getProductData();

    })
    return (
        <div className="prod bg-dark text-light m-5 p-5 h-100 w-50 text-center d-flex justify-content-center">
            <div className="d-flex align-items-center">
                <div className='details m-5 fw-bold fs-5 text-center text-light'>
                    <h1>Product Id : {id}</h1>
                    <p>productName : {product.productName}</p>
                    <p>price : {product.price}</p>
                    <p>quantity : {product.quantity}</p>
                    <NavLink to={"/products/"} className='btn btn-outline-primary ' >Back</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProductDetiels