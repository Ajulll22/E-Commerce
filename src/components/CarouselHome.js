import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import image from "../images/bg.jpg";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const CarouselHome = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={image} alt="First slide" />
                <Carousel.Caption>
                    <h3 className="text-dark">
                        Belanja Alat Gaming dan <br /> Kebutuhan Komputer Lainnya
                    </h3>
                    <br />

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