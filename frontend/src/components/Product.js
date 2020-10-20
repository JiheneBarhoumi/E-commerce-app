import React from 'react'
import { Card ,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'


const Product = ({product}) => {
    return (
      
            <Card className='my-3 y-3 rounded'>
                 <Link to={`/product/${product._id}`}>
                  <Card.Img src={product.image} variant='top'/>
                 </Link>
           
            <Container>
            <Card.Body>
            <Link href={`/product/${product._id}`}>
                  <Card.Title as='div'>
                    <strong>{product.name}</strong>
                  </Card.Title>
            </Link>
            <Card.Text as='div'>
               <Rating value={product.rating} text={`${product.numReviews} from reviews`}/>
            </Card.Text>

            <Card.Text as='h3'>
               ${product.price}
            </Card.Text>

            </Card.Body>
            </Container>
            </Card>
        
    )
}

export default Product
