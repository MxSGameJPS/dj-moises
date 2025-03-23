import styled from "styled-components";
import CardHome from "./CardHome";
import Loader from "./background";

export default function DobraDois() {
  return (
    <ContainerDobraDois>
      <CardHome />
      <Loader />
    </ContainerDobraDois>
  );
}

const ContainerDobraDois = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: transparent; /* Mantém o fundo preto da aplicação */
  max-height: 500px; /* Altura máxima */
  min-height: 500px; /* Garante que a dobra tenha altura suficiente */
  box-sizing: border-box;
  overflow-y: hidden; /* Removendo a rolagem vertical */
  background: linear-gradient(45deg, #000000, #520096);
  position: relative;

  /* Animação da faixa */
  animation: faixa 3s infinite linear;
  @keyframes faixa {
    0% {
      background: linear-gradient(45deg, #00000065, #52009681);
    }
    50% {
      background: linear-gradient(90deg, #c60acc76, #05050556, #d621d675);
    }
    100% {
      background: linear-gradient(55deg, #00000094, #52009689);
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    gap: 0;
    max-height: none; /* Remove a altura máxima em dispositivos móveis */
    min-height: 400px; /* Reduz a altura mínima */
    flex-direction: column;
    position: relative;
  }
`;
