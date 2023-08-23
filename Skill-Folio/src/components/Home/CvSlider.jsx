import Slider from "react-slick";
import { ListOfImages } from "../../Data/pics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function CvSlider() {
  const [ListOfResumes, setListOfResumes] = useState([]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false
  };

  useEffect(() => {
    setListOfResumes(ListOfImages());
  }, []);

  return (
    <div>
      <Slider {...settings} className="slider">
        {ListOfResumes.map((each, index) => (
          <div key={index} className="resume-container">
            <img src={each} className="resume-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
