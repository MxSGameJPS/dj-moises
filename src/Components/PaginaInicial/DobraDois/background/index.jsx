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
`;

export default Loader;
