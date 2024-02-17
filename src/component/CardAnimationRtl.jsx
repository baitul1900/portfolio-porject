import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "../assets/images/image/slider-image-one.png";
import imageTwo from "../assets/images/image/slider-image-two.png";
import imageThree from "../assets/images/image/slider-image-three.png";
import imageFive from "../assets/images/image/slider-image-five.png";

const CardAnimationRtl = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    centerMode: true,
    rtl: true,
  };
  return (
    <div className="slider-container container-fluid p-0 mt-5">
      <Slider {...settings}>
        <div className="px-4">
          <img src={imageOne} className="img-fluid w-100" alt="" />
        </div>
        <div className="px-4">
          <img src={imageTwo} className="img-fluid w-100" alt="" />
        </div>
        <div className="px-4">
          <img src={imageThree} className="img-fluid w-100" alt="" />
        </div>
        <div className="px-4">
          <img src={imageFive} className="img-fluid w-100 " alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default CardAnimationRtl;
