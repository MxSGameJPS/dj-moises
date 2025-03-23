import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="center">
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
        <div className="wave" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;

  .center {
    height: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wave {
    width: 6px;
    height: 50px;
    background: linear-gradient(45deg, #8c00ff, #fff);
    margin: 10px;
    animation: wave 1s linear infinite;
    border-radius: 20px;
  }

  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }

  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }

  .wave:nth-child(4) {
    animation-delay: 0.3s;
  }

  .wave:nth-child(5) {
    animation-delay: 0.4s;
  }

  .wave:nth-child(6) {
    animation-delay: 0.5s;
  }

  .wave:nth-child(7) {
    animation-delay: 0.6s;
  }

  .wave:nth-child(8) {
    animation-delay: 0.7s;
  }

  .wave:nth-child(9) {
    animation-delay: 0.8s;
  }

  .wave:nth-child(10) {
    animation-delay: 0.9s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1);
    }

    100% {
      transform: scale(0);
    }
  }

  @media (max-width: 768px) {
    bottom: 15px;

    .wave {
      width: 5px;
      height: 40px;
      margin: 8px;
    }
  }

  @media (max-width: 480px) {
    bottom: 10px;

    .wave {
      width: 4px;
      height: 30px;
      margin: 5px;
    }
  }

  @media (max-width: 360px) {
    .wave {
      width: 3px;
      height: 25px;
      margin: 4px;
    }
  }
`;

export default Loader;
