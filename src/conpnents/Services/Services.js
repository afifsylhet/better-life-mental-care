
import { useEffect, useState } from "react";

import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

export const Services = (props) => {
    const { serviceName, img, dis1, bullet1, bullet2, bullet3, bullet4, bullet5, id } = props.serivces;

    const [isDesktop, setDesktop] = useState(window.innerWidth > 992);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 992);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="mt-5">

            {!isDesktop && id % 2 === 0 ? (
                <Container fluid className="my-2">
                    <Row >
                        <Col md={6} className="d-flex align-items-center">
                            <div>
                                <h2 className="mt-3">{serviceName}</h2>
                                <p className="text-muted my-3">{dis1}</p>
                                <ul>
                                    <li className="my-1">{bullet1}</li>
                                    <li className="my-1">{bullet2}</li>
                                    <li className="my-1">{bullet3}</li>
                                    <li className="my-1">{bullet4}</li>
                                    <li className="my-1">{bullet5}</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <img className="img-fluid" src={img} alt="" />
                        </Col>
                    </Row>
                </Container>)
                :
                (<Container fluid className="my-2">
                    <Row >
                        <Col md={6} className="d-flex justify-content-center">
                            <img className="img-fluid" src={img} alt="" />
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <div>
                                <h2 className="mt-3">{serviceName}</h2>
                                <p className="text-muted my-3">{dis1}</p>
                                <ul>
                                    <li className="my-1">{bullet1}</li>
                                    <li className="my-1">{bullet2}</li>
                                    <li className="my-1">{bullet3}</li>
                                    <li className="my-1">{bullet4}</li>
                                    <li className="my-1">{bullet5}</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>)}










        </div >
    );
};

export default Services;