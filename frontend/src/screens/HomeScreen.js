import React, { useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
const HomeScreen = () => {

    const [products,setProducts]=useState([])
    //o get the data from backend and display it in frontend
    useEffect(() => {
        const fetchProducts=async()=>{
            const {data}=await axios.get('/api/products') // we should set the proxy so the request goes to the backend not frontend 
            setProducts(data)
        }
        fetchProducts();
    },[]);

    return ( <>
            <h1>Latest products</h1>
            <Row>
                {products.map(product=>(
                <Col sm={12} md={6} lg={4}>
                  <Product product={product}/>
                     </Col>
                ))}
            </Row>
            </>
        
    )
}

export default HomeScreen
