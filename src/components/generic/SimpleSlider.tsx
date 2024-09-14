import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import { feedback } from "../../assets/constants";
import FeedbackCard from "../testimonials/FeedbackCard";

export default function SimpleSlider() {
  let settings = {
	dots: true,
	infinite: false,
	speed: 500,
	slidesToShow: 3,
    draggable: true,
    easing: "linear",
	slidesToScroll: 6,
  };
  return (
	<div style={{ maxWidth: "100%", padding: "20px", height: "100%", color: "white" }}>
	<Slider {...settings}>
		{feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
	</Slider>
	</div>
  );
}
