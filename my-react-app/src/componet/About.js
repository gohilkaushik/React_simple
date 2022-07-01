import React from "react";
import Card from "../comman/Card";
import web from "../images/ser-1.jpg";
import app from "../images/ser-2.jpg";
import android from "../images/ser-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const CardData = [
    {
      imgsrc: web,
      title: "Web Development",
    },
    {
      imgsrc: app,
      title: "app Development",
    },
    {
      imgsrc: android,
      title: "android Development",
    },
    {
      imgsrc: web,
      title: "Web Development",
    },
    {
      imgsrc: app,
      title: "app Development",
    },
    {
      imgsrc: android,
      title: "android Development",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container-fluid">
        <h3 className="text-center mb-4 ">service</h3>
        <div className=" col-9 mx-auto about-slider">
          <Slider {...settings}>
            {CardData.map((val, ind) => {
              return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
export default About;
