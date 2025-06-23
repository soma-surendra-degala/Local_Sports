import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Slider/slider.css"
import matchesData from "C:/Users/surid/Desktop/Local Sports/frontend/src/data/sliderData.json"


function SwipeToSlide() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="container">
        <h1 className="mt-2">TNPL 2025 Match Schedule</h1>  
        <div className="slider-container item">
        <Slider {...settings}>
                   
             {matchesData.map((match, index) => (
              <div className="card card-background rounded p-3 m-3">
              <div className="d-flex align-items-center m-1">
              <div>{match.date}</div>
              <div className="right-br"></div>
              <div >{match.tournament}</div>
              </div>
              <div className="text-center font-weight-normal m-2 location">{match.location}</div>
              
              <div className="d-flex justify-content-center align-items-center m-2">
                <div>
                  <div className="fs-3 fw-bold"> {match.team1}</div>
                  <div className="fs-3 fw-bold">  {match.team2}</div>
                </div>
                <div className="right-br1"></div>
                <div>
                  <div className="fs-6 text-center">Time (IST):{match.time_ist}</div>
                </div>
              </div>
            </div>
        ))}
             
        </Slider>
        </div>
    </div>
  );
}
export default SwipeToSlide;
