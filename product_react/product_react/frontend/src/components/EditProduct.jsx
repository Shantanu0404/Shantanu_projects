import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:2000/product/fetchone/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching product data. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  const updateProduct = () => {
    if (!product.name || !product.price) {
      setError('Please fill in both fields');
      return;
    }

    axios
      .put('http://localhost:2000/product/update', {
        id: id,
        name: product.name,
        price: product.price,
      })
      .then((res) => {
        navigate('/admin/products');
      })
      .catch((err) => {
        setError('Something went wrong. Please try again later.');
      });
  };

  const isFormValid = product.name && product.price;

  return (
    <div className="container">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row justify-content-center align-items-center g-2">
          <div className="col">
            <div className="card my-5">
              <div className="card-body">
                {error && <div className="alert alert-danger">{error}</div>}

                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={(e) =>
                      setProduct({ ...product, name: e.target.value })
                    }
                  />
                  <label>Product Name</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price"
                    value={product.price}
                    onChange={(e) =>
                      setProduct({ ...product, price: e.target.value })
                    }
                  />
                  <label>Price</label>
                </div>

                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={updateProduct}
                  disabled={!isFormValid}
                >
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
