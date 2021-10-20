import React from 'react';
import { useParams } from 'react-router';
import { useBasicData } from '../../hooks/useBasicData'
import { Col, Container, Row } from 'react-bootstrap';
import QuickAccess from '../QuickAcces/QuickAccess';


const SingleServices = (props) => {
    const { unid } = useParams();

    const [service] = useBasicData();


    const myData = service?.find(element => element.id == unid);

    return (
        <div>
            <Container fluid>
                <Row>
                    <br />




                    <Col md={6} lg={8} className="p-3" >

                        <div className="p-3 border m-3 border-secondary- border-3">
                            <h1 className="pb-3 border-bottom border-secondary- border-3 text-secondary"> {myData?.serviceName}</h1>
                            <img className="img-fluid w-100 py-2" src={myData?.img} alt="" />
                            <br />
                            <div className="mt-4">
                                <p className="mb-2">{myData?.dis1}</p>
                                <p className="mb-2">{myData?.dis2}</p>
                                <p className="mb-2">{myData?.dis3}</p>
                                <p className="mb-2">{myData?.dis4}</p>
                                <p className="mb-2">{myData?.dis5}</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4} className="p-3">
                        <div className="m-3 p-4 border border-3 border-gray rounded-3">
                            <h3 className="border-bottom border-3 border-gray text-muted pb-2">Quick Access</h3>
                            <QuickAccess></QuickAccess>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div >
    );
};

export default SingleServices;