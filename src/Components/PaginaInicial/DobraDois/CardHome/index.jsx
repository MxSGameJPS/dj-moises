import { Link } from "react-router-dom";
import styled from "styled-components";

const CardHome = () => {
  const paginas = [
    {
      pagina: "Festas e eventos",
      descricao: "Fotos e vídeos",
      link: "/festas",
    },
    {
      pagina: "Ps Produções e Eventos",
      descricao: "Produção de eventos profissional",
      link: "/producoes",
    },
  ];

  return (
    <StyledWrapper>
      {paginas.map((pagina, index) => (
        <Link key={index} to={pagina.link}>
          <div className="card">
            <div className="txt">
              {pagina.pagina}
              <p>{pagina.descricao}</p>
            </div>
            <div className="shadow" />
          </div>
        </Link>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 90px;
  width: 100%;

  
  .card {
    position: relative;
    width: 190px;
    height: 254px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-radius: 0.8em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.5s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .card:hover {
    scale: 1.05;
    rotate: 3deg;
  }

  .card::after {
    content: "";
    width: 93%;
    height: 95%;
    position: absolute;
    border-radius: 0.7em;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }

  .shadow {
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg, #03a9f4, #ff0058);
    z-index: -1;
    filter: blur(25px);
  }

  .txt {
    position: absolute;
    font-weight: 800;
    font-size: 1.6em;
    color: #fff;
    text-align: center;
  }

  p {
    font-size: 15px;
    color: #020202;
  }

  .card:hover .shadow {
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    0% {
      rotate: 0deg;
      background: linear-gradient(315deg, #03a9f4, #ff0058);
    }

    50% {
      rotate: 180deg;
      background: linear-gradient(45deg, #ffbc00, #ff0058);
    }

    100% {
      rotate: 360deg;
      background: linear-gradient(315deg, #4dff03, #00d0ff);
    }
  }

  @media (max-width: 768px) {
        .card {
            top: 40%;
            width: 160px;
            height: 214px;
        }

        .txt {
            font-size: 1.4em;
        }
    }

    @media (max-width: 480px) {
        .card {
            top: 30%;
            width: 140px;
            height: 186px;
        }

        .txt {
            font-size: 1.2em;
        }
    }

    @media (max-width: 360px) {
        .card {
            top: 25%;
            width: 120px;
            height: 162px;
        }
        .txt {
            font-size: 1em;
        }
    }
`;

export default CardHome;
