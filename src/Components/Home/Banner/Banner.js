import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Banner.css";
import banner1 from "../../../Images/Banner/banner-01.jpg";
import banner2 from "../../../Images/Banner/banner-02.jpg";
import banner3 from "../../../Images/Banner/banner-03.jpg";

const Banner = () => {
  return (
    <div className="banner-slide">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 banner-slide"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption className="slide-item">
            <h1>Does Tea Count as Fluid?</h1>
            <p>
              This popular brew has many proven health benefits, but is meeting
              your hydration needs one of them? Read on to find out.
            </p>
            <Button variant="outline-light" className="bottom-margin">
              See More <i class="fas fa-angle-down"></i>
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 banner-slide"
            src={banner2}
            alt="Second slide"
          />
          <Carousel.Caption className="slide-item">
            <h1>
              Revenge Sleep Procrastination: Are You Doing It and How to Stop
            </h1>
            <p>
              If you’re sacrificing sleep for downtime, you might be getting
              yourself into this bad habit. Here’s why experts...
            </p>
            <Button variant="outline-light" className="bottom-margin">
              See More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-slide"
            src={banner3}
            alt="Third slide"
          />
          <Carousel.Caption className="slide-item">
            <h1>Does Yoga Count as Exercise?</h1>
            <p>
              Most of us know that yoga is a good way to reduce stress and
              stretch your muscles, but is it strenuous enough ...
            </p>
            <Button variant="outline-light" className="bottom-margin">
              See More
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
