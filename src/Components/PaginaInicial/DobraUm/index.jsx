import styled from "styled-components";
import Botao from "../../Botao";

export default function DobraUm() {
  return (
    <ContainerDobraUm>
      <h1 className="desktop-title">DJ Moises PS</h1>
      <Imagem src="/img/5.png" alt="DJ Moises" />
      <ContainerTexto>
        <p>
          Olá, meu nome é Moises Strottmann, mas sou conhecido como DJ Moises
          PS. Trabalho como DJ e comunicador há mais de 30 anos. Desde meus 15
          anos de idade, fui fascinado por música e, através de festas para a
          escola e para amigos, comecei a trilhar meu caminho no mundo dos DJs.
          Sou um profissional apaixonado pelo que faço e acredito que a música
          tem o poder de transformar momentos. Com um estilo musical Open
          Format, sempre busco a trilha sonora perfeita para garantir que a
          festa seja inesquecível, sempre conectando-me com o público e criando
          um ambiente de diversão e celebração.
        </p>
        <button>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5551991454337"
          >
            Saiba Mais
          </a>
        </button>
      </ContainerTexto>
      <div className="faixa"></div>
    </ContainerDobraUm>
  );
}

const ContainerDobraUm = styled.div`
  position: relative;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  overflow: hidden;

  .desktop-title {
    position: absolute;
    top: 0%;
    left: 54%;
    font-size: 50px;
    margin-bottom: 20px;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    z-index: 2;
  }

  .faixa {
    background-color: rgb(10, 25, 41);
    width: 100%;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    position: absolute;
    bottom: -50px;
    z-index: 1;

    /* Animação da faixa */
    animation: faixa 2s infinite linear;
    @keyframes faixa {
      0% {
        background: linear-gradient(45deg, #0a192965, #1a4d8c81);
      }
      50% {
        background: linear-gradient(90deg, #0f2c5076, #3a6fbf68);
      }
      100% {
        background: linear-gradient(55deg, #0a192994, #1a4d8c89);
      }
    }
  }

  @media (max-width: 768px) {
    .desktop-title {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 10px 10px 30px;

    .desktop-title {
      display: none;
    }

    .faixa {
      padding: 30px;
      bottom: -30px;
    }
  }
`;

const Imagem = styled.img`
  position: absolute;
  top: 0;
  left: 10%;
  width: 30%;
  object-fit: cover;
  z-index: 1;
  opacity: 0.8;

  /* Responsividade */

  @media (max-width: 1024px) {
    width: 50%;
    left: 0;
  }

  @media (max-width: 1200px) {
    width: 60%;
    left: 0%;
  }

  @media (max-width: 1400px) {
    width: 45%;
    left: 0;
  }

  @media (max-width: 900px) {
    width: 80%;
    left: -15%;
  }

  @media (max-width: 768px) {
    top: 0%;
    opacity: 0.6;
    width: 80%;
    left: -15%;
  }

  @media (max-width: 480px) {
    position: static;
    width: 60%;
    opacity: 0.9;
    margin: 20px auto 0;

    &::after {
      content: "DJ Moises PS";
      display: block;
      font-size: 24px;
      font-weight: bold;
      color: white;
      text-align: center;
      margin-top: -10px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }

  @media (max-width: 375px) {
    width: 70%;

    &::after {
      font-size: 22px;
      margin-top: -15px;
    }
  }
`;

const ContainerTexto = styled.div`
  position: absolute;
  top: 20%;
  left: 40%;
  font-size: 28px;
  width: 50%;
  padding: 20px;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
  margin: 0 auto;

  p {
    margin: 0;
    color: #333;
  }

  button {
    background: linear-gradient(45deg, #0a1929, #1a4d8c);
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 10px;

    &:hover {
      background: linear-gradient(45deg, #1a4d8c, #0a1929);
    }

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  /* Responsividade */

  @media (max-width: 1440px) {
    font-size: 26px;
    width: 60%;
    padding: 20px;
    left: 35%;
  }

  @media (max-width: 1200px) {
    font-size: 24px;
    width: 60%;
    padding: 20px;
    left: 35%;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
    width: 60%;
    padding: 20px;
    left: 35%;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    width: 55%;
    padding: 15px;
    left: 40%;
    top: 15%;
  }

  @media (max-width: 480px) {
    position: relative;
    font-size: 16px;
    width: 90%;
    padding: 15px;
    left: auto;
    top: auto;
    margin: 20px auto 0;
  }

  @media (max-width: 375px) {
    font-size: 14px;
    width: 92%;
    padding: 10px;
  }
`;
