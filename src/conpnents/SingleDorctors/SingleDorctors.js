
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useBasicData from '../../hooks/useBasicData';

const SingleDorctors = (props) => {
    const { name, shortDegree, treatField, experience, edu1, edu2, award1, award2, award3, award4, award5, img } = props.doctor;
    return (
        <div>
            <Container>
                <Row className="bg-light p-5 mb-4">
                    <Col sm={4}>
                        <div className="bg-white">
                            <img src={img} alt="ss" className="img-fluid" />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div>
                            <div className="d-flex align-items-center py-1">
                                <h2 className="text-success">{name} </h2>
                                <span className="text-muted mx-2">{shortDegree}</span>
                            </div>
                            <div>
                                <p className="fs-4">{treatField}</p>
                                <hr />
                            </div>
                            <div>
                                <span className="fs-2 text-success my-0 me-2"><i class="fab fa-facebook"></i></span>
                                <span className="fs-2 text-success my-0 mx-2"><i class="fab fa-twitter-square"></i></span>
                                <span className="fs-2 text-success my-0 mx-2"><i class="fab fa-linkedin"></i></span>
                                <span className="fs-2 text-success my-0 mx-2"><i class="fab fa-whatsapp"></i></span>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12 col-md-3 pt-2">
                                    <div className="btn btn-secondary w-100 ">QUALIFICATION</div>
                                </div>
                                <div className="col-sm-12 col-md-9">
                                    <p className="text-muted fs-5  m-0 p-0">{treatField}</p>
                                    <p className="text-muted fs-5 m-0 p-0">{experience} years experience</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12 col-md-3 pt-2">
                                    <div className="btn btn-secondary w-100 ">CERTIFICATION</div>
                                </div>
                                <div className="col-sm-12 col-md-9">
                                    <p className="text-muted fs-5  m-0 p-0">{edu1}</p>
                                    <p className="text-muted fs-5 m-0 p-0">{edu2} </p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-sm-12 col-md-3 pt-2">
                                    <div className="btn btn-secondary w-100 ">AWARDS</div>
                                </div>
                                <div className="col-sm-12 col-md-9">
                                    <p className="text-muted fs-5  m-0 p-0">{award1}</p>
                                    <p className="text-muted fs-5 m-0 p-0">{award2} </p>
                                    <p className="text-muted fs-5 m-0 p-0">{award3} </p>
                                    <p className="text-muted fs-5 m-0 p-0">{award4} </p>
                                    <p className="text-muted fs-5 m-0 p-0">{award5} </p>
                                </div>
                            </div>




                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default SingleDorctors;