
import React, { useDebugValue } from 'react';
import { Container, Row } from 'react-bootstrap';
import useBasicData from '../../hooks/useBasicData';
import useReviews from '../../hooks/useReview';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const Testimonials = () => {
    const [reviews] = useReviews();
    return (
        <div id="testimonals">
            <h1 className="my-5 p-3 text-secondary text-center"> Our clients are our motivation.... </h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4 ">
                    {reviews.map(review => <SingleTestimonial key={review.id} review={review} className="d-flex align-items-stretch">
                    </SingleTestimonial>)}
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;