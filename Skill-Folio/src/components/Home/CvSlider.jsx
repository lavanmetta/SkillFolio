import Slider from "react-slick";
import { ListOfImages } from "../../Data/pics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Image, Shimmer } from "react-shimmer";
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
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
  };

  useEffect(() => {
    setListOfResumes(ListOfImages());
  }, []);

  return (
    <div>
      <Slider {...settings} className="slider">
        {ListOfResumes.map((each, index) => (
          <div key={index} className="resume-container">
            <Image
              src={each}
              className="resume-img"
              fallback={<Shimmer width={250} height={350} />}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
