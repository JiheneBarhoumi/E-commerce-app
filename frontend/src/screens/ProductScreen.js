import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button,Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios';

const ProductScreen = ({match}) => {
    const [product,setProduct]=useState({})
    //o get the data from backend and display it in frontend
    useEffect(() => {
        const fetchProduct=async()=>{
            const {data}=await axios.get(`/api/products/${match.params.id}`) // we should set the proxy so the request goes to the backend not frontend 
            setProduct(data)
        }
        fetchProduct();
    },[]);
    return (
        <>
           <Link className='btn btn-light my-3' to='/'>
               Go Back
           </Link>
           <Row>
               <Col md={6}>
                   <Image src={product.image} alt={product.name} fluid/>
               </Col>
               <Col md={3}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                          <h3>{product.name}</h3> 
                       </ListGroup.Item>
                       <ListGroup.Item>
                          <Rating value={product.rating} text={`${product.numReviews} Reviews`}/>
                       </ListGroup.Item>
                       <ListGroup.Item>
                          Price : ${product.price}
                       </ListGroup.Item>
                       <ListGroup.Item>
                          Description : {product.description}
                       </ListGroup.Item>
                   </ListGroup>
               </Col>

               <Col md={3}>
                   <Card>
                       <ListGroup varaiant='flush'>
                           <ListGroup.Item>
                               <Row>
                                     <Col>Price:</Col>
                                     <Col>${product.price}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Row>
                                  <Col>status:</Col>
                                  <Col>{(product.countInStock > 0) ?'in stock' : 'out of stock'}</Col>
                               </Row>
                           </ListGroup.Item>
                           <ListGroup.Item>
                               <Button className='btn-block' type='button' disabled={product.countInStock===0}>Add to Cart</Button>
                           </ListGroup.Item>

                       </ListGroup>
                   </Card>
               </Col>

           </Row>
        </>
    )
}

export default ProductScreen
