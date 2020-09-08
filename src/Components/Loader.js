import React from "react";
import styled, { keyframes } from "styled-components";

const Conatiner = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: center;
  color: white;
  position: relative;
`;

const roading = keyframes`
  0% {
    color: white;
  }
  50% {
    color: black;
  }
`;

const rotateLoading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loaderRotate = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  left: 50px;
  border: 1px solid transparent;
  border-color: transparent white transparent white;
  border-radius: 100%;
  animation: ${rotateLoading} 1.5s linear 0s infinite normal;
`;

const loaderText = styled.div`
  position: relative;
  text-align: center;
  left: -60px;
  width: 110px;
  color: black;
  animation-name: ${roading};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export default () => (
  <Conatiner>
    <span>Loading</span>
    <loaderRotate />
    <loaderText>Loading...</loaderText>
  </Conatiner>
);
