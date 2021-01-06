import React from 'react'
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Rating from './Rating'

export default function Product(props) {
    const { product } = props
    return (
        <div key={product._id} className="card">
            {/* use LINK tag instaead of ANCHOR tag bc by using Anchor tags,
             when u click on a product it just refreshes ur page which we 
             dont want. LINK comes from react-router-dom */}
              
            <Link to={`/product/${product._id}`}>
                {/* <!-- image size should be: 680px by 830px --> */}
                <img 
                    className="medium" 
                    src={product.image}
                    alt={product.name}
                />
            </Link>
            {/* <!-- card body --> */}
            <div className="card-body">
                <Link to={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <div className="price">${product.price}</div>
            </div>
        </div>
    )
}
