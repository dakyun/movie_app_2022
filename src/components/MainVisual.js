import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainVisual.css";

export default function mainVisual() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div class="mv_wrap">
      <Slider {...settings}>
        <div className="mainvisual mv__1">
          <div className="mv__container">
            <div class="mv__slogan">
              <p className="mv__subtitle">Update per a week</p>
              <h3 className="mv__txt">
                <span className="bold">매주 업데이트되는</span> <br />
                시대,장르는 물론 <br />
                <span className="bold">국경까지 초월한 영화 정보!</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="mainvisual mv__2">
          <div className="mv__container">
            <div class="mv__slogan">
              <p className="mv__subtitle">Launching event</p>
              <h3 className="mv__txt">
                <span className="bold">DK's 리액트 무비앱</span> <br /> 론칭
                기념 이벤트
              </h3>
              <a href="#" className="mv__btn">
                자세히보기
              </a>
            </div>
          </div>
        </div>
        <div className="mainvisual mv__3">
          <div className="mv__container">
            <div class="mv__slogan">
              <p className="mv__subtitle">spring event</p>
              <h3 className="mv__txt">
                <span className="bold">봄맞이 영화추천 이벤트</span> <br />{" "}
                당신의 봄영화를 보내주세요!
              </h3>
              <a href="#" className="mv__btn">
                자세히보기
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
