import React, { useState } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
// import './CustomSlider.css'; // Import the CSS file for styling

export const CustomSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setCurrentSlide(current),
    customPaging: (i) => (
      <div className={`indicator ${i === currentSlide ? "active" : ""}`} />
    ),
  };

  return (
    <section className="slider_section">
      <Container>
        <Row>
          <Col lg={{ span: 9, offset: 3 }}>
            <Slider className="main_slider" {...settings}>
              {slides.map((slide) => (
                <div key={slide.id} className={`slider_item ${slide.bgClass}`}>
                  <div className="slider_content">
                    <h3
                      className="small_title"
                      data-animation="fadeInUp2"
                      data-delay=".2s"
                    >
                      {slide.smallTitle}
                    </h3>
                    <h4
                      className="big_title"
                      data-animation="fadeInUp2"
                      data-delay=".4s"
                    >
                      {slide.bigTitle.split(" ").map((word, index) => (
                        <React.Fragment key={index}>
                          {word}
                          {index === 1 && <span> </span>}
                        </React.Fragment>
                      ))}
                    </h4>
                    <p data-animation="fadeInUp2" data-delay=".6s">
                      {slide.description}
                    </p>
                    <div
                      className="item_price"
                      data-animation="fadeInUp2"
                      data-delay=".6s"
                    >
                      <del>{slide.originalPrice}</del>
                      <span className="sale_price">{slide.salePrice}</span>
                    </div>
                    <Button
                      className="btn btn_primary"
                      href={slide.link}
                      data-animation="fadeInUp2"
                      data-delay=".8s"
                    >
                      Start Buying
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
