import { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CV1 from '../../assets/CV1.png'


export default class CvSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={CV1} />
          </div>
          <div>
            <img src={CV1} />
          </div>
          <div>
            <img src={CV1} />
          </div>
          <div>
            <img src={CV1} />
          </div>
          
        </Slider>
      </div>
    );
  }
}
