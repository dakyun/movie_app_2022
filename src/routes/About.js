import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <h2>환영합니다! <br /> DK's 리액트 무비 앱입니다.</h2>
      <p>react를 사용하여 처음으로 제작한 웹사이트입니다. 기존 html,css,스크립트 순으로 작업하던 방식과는 달리 생소한 언어이다보니 처음에는 굉장히 어렵게 느껴졌습니다. 하나 잘못하면 바로 오류창이 뜨곤 해서 당황했던 기억이 있습니다. 낯선 것들을 하나씩 차근차근 배우면서 다양한 개념들을 알 수 있었고 무엇보다 API를 활용하여 다른 곳의 데이터를 내 사이트에 가져와 적용시킬 수 있다는 것이 흥미로웠던 작업입니다. </p>
    </div>
  );
}

export default About;
