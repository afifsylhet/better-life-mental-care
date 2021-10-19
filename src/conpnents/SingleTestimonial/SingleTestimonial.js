
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';

const SingleTestimonial = (props) => {
    const { name, dis, rating, img, role } = props.review;
    return (
        <div>

            <Col>
                <Card className="shadow-lg ">
                    <div className="d-flex justfy-content-around">
                        <img src={img} alt="sdf" className="rounded-circle w-50 img-fluid mx-auto p-2 border border-info m-2" />
                    </div>
                    <Rating className="fs-1 text-center bg-light p-2 my-3"
                        initialRating={rating}
                        readonly
                    />
                    <Card.Body>
                        <h2>{name}</h2>
                        <h4 className="text-muted">{role}</h4>
                        <p className="py-3">{dis}</p>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default SingleTestimonial;