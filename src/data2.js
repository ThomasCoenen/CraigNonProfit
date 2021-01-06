// import bcrypt from 'bcryptjs';
// import productimg1 from './images/productimg1.jpg';
import productimg2 from './images/productimg2.jpg';

//load data from a JS object instead of hard coding it
//product data

const data = {
    //add sample user to data.js
    products: [
        {
            _id: '1',
            name: 'BRONZE LEVEL PARTNER FRAMED PRINT',
            category: 'Shirts',
            image: productimg2,
            price: 750,
            description: 'high quality product'
        },
        {
            _id: '2',
            name: 'GOLD LEVEL PARTNER FRAMED PRINT',
            category: 'Shirts',
            image: productimg2,
            price: 1000,
            description: 'high quality product'
        },
        {
            _id: '3',
            name: 'SILVER LEVEL PARTNER FRAMED PRINT',
            category: 'Shirts',
            image: productimg2,
            price: 800,
            description: 'high quality product'
        },
        {
            _id: '4',
            name: 'PLATINUM LEVEL PARTNER FRAMED PRINT',
            category: 'Shirts',
            image: productimg2,
            price: 500,
            description: 'high quality product'
        },
    ]
}

export default data;