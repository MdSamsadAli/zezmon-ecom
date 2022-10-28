import { useState } from "react";
import "./client.css";
import clientList from "./Client.jsx"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Client = () => {
    const [client] = useState(clientList);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <>
            <section class="client_section layout_padding">
                <div class="container">
                    <h2 className="heading_content text-center">
                        What our Customer says
                    </h2>
                    <Slider {...settings}>
                    <div class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row layout_padding2">
                                    {client.map((curElem) => {
                                        return (
                                            <div class="col-md-6">
                                                <div class="client_box">
                                                <div class="client_id-box d-flex align-center">
                                                    <div class="client_img-box d-flex justify-content-center">
                                                    <img src={curElem.logo} alt="" />
                                                    </div>
                                                    <h4>{curElem.name}</h4>
                                                </div>
                                                <div class="client_detail">
                                                    <p>
                                                    {curElem.description}
                                                    </p>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel slide">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row layout_padding2">
                                    {client.map((curElem) => {
                                        return (
                                            <div class="col-md-6">
                                                <div class="client_box">
                                                <div class="client_id-box d-flex align-center">
                                                    <div class="client_img-box d-flex justify-content-center">
                                                    <img src={curElem.logo} alt="" />
                                                    </div>
                                                    <h4>{curElem.name}</h4>
                                                </div>
                                                <div class="client_detail">
                                                    <p>
                                                    {curElem.description}
                                                    </p>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
                <div class="container">
                    <div class="item_container">
                        <div class="row">
                            <div class="col-sm-7">
                                <h3>
                                Best offers on any makeup items
                                </h3>
                                <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random
                                text. It has roots in a piece of classical
                                </p>
                                <div>
                                <a href="">
                                    Shop Now
                                </a>
                                </div>
                            </div>
                            <div class="col-sm-5">
                                <div class="item_img-box">
                                <img src="images/items.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}