import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useProducts from '../../hooks/useProducts';
import About from './About';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Newsletter from './Newsletter';
import Product from './Products/Product';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const [product, setProduct] = useProducts();
    return (
        <div>
            <Banner />
            <About />
            <Container className='my-5'>
                <h2 className='text-center text-danger fw-bolder my-4'>Car Parts</h2>
                <Row xs={1} md={3} className="g-4">
                    {
                        product.slice(0, 3).map(product => <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                    }
                </Row>
                <hr />
            </Container>
            <BusinessSummary />
            <Reviews />
            <Newsletter />
        </div>
    );
};

export default Home;