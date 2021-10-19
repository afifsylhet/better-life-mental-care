
import { useEffect } from "react";

import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
import { Link } from "react-router-dom";

export const Services = (props) => {
    const { serviceName, img, dis1, bullet1, bullet2, bullet3, bullet4, bullet5, id } = props.serivces;

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 992;



    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);


        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div className="mt-5">

            {width > breakPoint && id % 2 !== 0 ? (
                <Container fluid className="my-2 border border-primary px-0">
                    <Row className="p-0 m-0">
                        <Col md={6} className="d-flex justify-content-center p-0 m-0">
                            <img className="img-fluid w-100" src={img} alt="" />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <div>
                                <h2 className="mt-3">{serviceName}</h2>
                                <p className="text-secondary my-3">{dis1}</p>
                                <ul className="fw-bold">
                                    <li className="my-1">{bullet1}</li>
                                    <li className="my-1">{bullet2}</li>
                                    <li className="my-1">{bullet3}</li>
                                    <li className="my-1">{bullet4}</li>
                                    <li className="my-1">{bullet5}</li>
                                </ul>
                                <Link to={`/service/${id}`}>
                                    <Button variant="secondary" className="w-100 py-3 mb-3">Click For More Details</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>)
                :
                (<Container fluid className="my-2 border border-primary px-0">
                    <Row className="p-0 m-0" >
                        <Col md={6} className="d-flex align-items-center">
                            <div>
                                <h2 className="mt-3">{serviceName}</h2>
                                <p className="text-Secondary my-3">{dis1}</p>
                                <ul className="fw-bold">
                                    <li className="my-1">{bullet1}</li>
                                    <li className="my-1">{bullet2}</li>
                                    <li className="my-1">{bullet3}</li>
                                    <li className="my-1">{bullet4}</li>
                                    <li className="my-1">{bullet5}</li>
                                </ul>
                                <Link to={`/service/${id}`}>
                                    <Button variant="secondary" className="w-100 py-3 mb-3">Click For More Details</Button>
                                </Link>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center p-0">
                            <img className="img-fluid w-100" src={img} alt="" />
                        </Col>
                    </Row>
                </Container>)}
        </div >
    );
};

export default Services;