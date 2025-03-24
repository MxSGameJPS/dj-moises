import React from "react";
import styled from "styled-components";

const Titulo = () => {
  return (
    <StyledWrapper>
      <div className="shine">Ps Producoes e Eventos</div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 0;

  .shine {
    text-align: center;
    font-size: 4em;
    font-weight: 900;
    color: rgba(194, 0, 253, 0.8);
    text-shadow:  0 0 1px rgba(255, 255, 255, 0.5);
    background: #222 -webkit-gradient(
        linear,
        left top,
        right top,
        from(#222),
        to(#222),
        color-stop(0.5, #fff)
      ) 0 0 no-repeat;
    background-image: -webkit-linear-gradient(
      -40deg,
      transparent 0%,
      transparent 40%,
      #fff 50%,
      transparent 60%,
      transparent 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200px;
    animation: shine 10s infinite linear;
    position: relative;

    &::before {
      content: "Ps Producoes e Eventos";
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      text-shadow: 0 0 8px rgba(255, 255, 255, 0.3),
        0 0 15px rgba(194, 0, 253, 0.5);
      -webkit-text-fill-color: transparent;
    }
  }

  @keyframes shine {
    0% {
      background-position: -200px;
    }
    20% {
      background-position: top left;
    }
    100% {
      background-position: 600px;
    }
  }

  @media (max-width: 1024px) {
    .shine {
      font-size: 3.5em;
    }
  }

  @media (max-width: 768px) {
    padding: 15px 0;

    .shine {
      font-size: 2.8em;
    }
  }

  @media (max-width: 480px) {
    padding: 10px 0;

    .shine {
      font-size: 2em;
    }
  }

  @media (max-width: 375px) {
    .shine {
      font-size: 1.7em;
    }
  }

  @media (max-width: 320px) {
    .shine {
      font-size: 1.5em;
    }
  }
`;

export default Titulo;
