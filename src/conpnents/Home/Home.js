
import "./Home.css"
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from "../Services/Services";
import useBasicData from "../../hooks/useBasicData";

const Home = () => {
    const [service] = useBasicData()

    return (
        <div>
            < Carousel >
                <Carousel.Item>
                    <div className="position-relative-own">
                        <div>
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/c2YK2ps/carosol1.jpg"
                                alt="First slide"
                            />
                        </div>
                        <div className="position-absolute-own text-white p-5">
                            <h2> “You don’t have to control your thoughts. You just have to stop letting them control you.” </h2>
                            <h6> — Dan Millmant</h6>
                        </div>
                    </div>

                </Carousel.Item>

                <Carousel.Item>
                    <div className="position-relative-own">
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/YQrB0Wt/carosol2.jpg"
                            alt="Second slide"
                        />

                        <div className="position-absolute-own text-white p-5">
                            <h2> “Take your time healing, as long as you want. Nobody else knows what you’ve been through. How could they know how long it will take to heal you?” </h2>
                            <h6>  — Abertoli</h6>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="position-relative-own">
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/FHDyZxy/carosol3.jpg"
                            alt="Third slide"
                        />

                        <div className="position-absolute-own text-white p-5">
                            <h2> “Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.”</h2>
                            <h6>   — Kahlil Gibran</h6>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel >

            <div>
                {
                    service.map(serivces => <Services key={serivces.id} serivces={serivces}>
                    </Services>)
                }

            </div>

        </div >
    );
};

export default Home;