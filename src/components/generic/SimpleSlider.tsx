"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick"
import { feedback } from "../../assets/constants";
import FeedbackCard from "../testimonials/FeedbackCard";

export default function SimpleSlider() {
  let settings = {
	speed: 500,
    draggable: true,
    easing: "linear",
    slidesToShow: 3,
    slidesToScroll: 6,
    dots: true,
    infinite: false,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
	<div className="max-w-full px-6 h-full text-white">
	<Slider {...settings}>
		{feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
	</Slider>
	</div>
  );
}
