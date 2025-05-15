import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

height:100vh;
display:flex;
justify-content:center;
align-items:center;

  .loader {
    width: 0;
    height: 4.8px;
    display: inline-block;
    position: relative;
    background: var(--main-color);
    box-shadow: 0 0 10px var(--main-color);
    box-sizing: border-box;
    animation: animFw 8s linear infinite;
  }

  .loader::after,
    .loader::before {
    content: '';
    width: 10px;
    height: 1px;
    background: #FFF;
    position: absolute;
    top: 9px;
    right: -2px;
    opacity: 0;
    transform: rotate(-45deg) translateX(0px);
    box-sizing: border-box;
    animation: coli1 0.3s linear infinite;
  }

  .loader::before {
    top: -4px;
    transform: rotate(45deg);
    animation: coli2 0.3s linear infinite;
  }

  @keyframes animFw {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }

  @keyframes coli1 {
    0% {
      transform: rotate(-45deg) translateX(0px);
      opacity: 0.7;
    }

    100% {
      transform: rotate(-45deg) translateX(-45px);
      opacity: 0;
    }
  }

  @keyframes coli2 {
    0% {
      transform: rotate(45deg) translateX(0px);
      opacity: 1;
    }

    100% {
      transform: rotate(45deg) translateX(-45px);
      opacity: 0.7;
    }
  }`;

export default Loader;
