import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import image1 from "../images/carousel-1.png";
import image2 from '../images/carousel-2.png'
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide" />
                <Carousel.Caption>


                    <h4 className="link-home .text-dark">
                        <Link
                            className="mt-4"
                            style={{ textDecoration: "none", color: "black" }}
                            to={"/shop"}
                        >
                            Belanja Sekarang <FiArrowUpRight className="rotate" />
                        </Link>
                    </h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image2} alt="First slide" />
                <Carousel.Caption>


                    <h4 className="link-home .text-dark">
                        <Link
                            className="mt-4"
                            style={{ textDecoration: "none", color: "black" }}
                            to={"/shop"}
                        >
                            Belanja Sekarang <FiArrowUpRight className="rotate" />
                        </Link>
                    </h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselHome