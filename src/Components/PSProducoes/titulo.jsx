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
  .shine {
    text-align: center;
    font-size: 4em;
    font-weight: 900;
    color: rgba(194, 0, 253, 0.3);
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
    background-clip: text;
    background-size: 50px;
    animation: zezzz;
    animation-duration: 10s;
    animation-iteration-count: infinite;
  }
  
  @keyframes zezzz {
    0%,
    10% {
      background-position: -200px;
    }
    20% {
      background-position: top left;
    }
    100% {
      background-position: 600px;
    }
  }

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 15px;
    text-align: center;  
  }

  @media (max-width: 320px) {
    font-size: 10px;
    text-align: center;   
  }  
`;

export default Titulo;
