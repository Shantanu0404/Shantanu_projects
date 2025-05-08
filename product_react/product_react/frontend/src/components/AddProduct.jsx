import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', price: '' });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const addProduct = () => {
        if (!product.name || !product.price) {
            setError('Please fill in both fields');
            return;
        }
        
        axios.post('http://localhost:2000/product/add', product)
            .then((res) => {
                navigate('/admin/products');
            })
            .catch((err) => {
                setError('Something went wrong. Please try again later.');
                console.log(err);
            });
    };

    const isFormValid = product.name && product.price;

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center g-2">
                <div className="col">
                    <div className="card my-5">
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Product Name"
                                    value={product.name}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="name">Product Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    id="price"
                                    placeholder="Product Price"
                                    value={product.price}
                                    onChange={handleInputChange}
                                />
                                <label htmlFor="price">Price</label>
                            </div>

                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={addProduct}
                                disabled={!isFormValid}
                            >
                                Add Product
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
