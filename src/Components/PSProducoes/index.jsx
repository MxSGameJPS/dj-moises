import styled from "styled-components";
import Titulo from "./titulo";
import Carousel from "./Carrossel";
import Botao from "../Botao";

export default function PsProducoes() {
  return (
    <ContainerProducoes>
      <Titulo />
      <Div>
        <ul>
          <li>Casamento</li>
          <li>Festa de 15 anos</li>
          <li>Formaturas</li>
          <li>Bodas</li>
          <li>Despedida de Solteiro</li>
        </ul>
      </Div>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <BotaoContainer>
        <Botao href={"https://wa.me/5551991454337"}> Saiba Mais </Botao>
      </BotaoContainer>
    </ContainerProducoes>
  );
}

const ContainerProducoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  /* Estiliza todas as dobras (filhos diretos) */
  > * {
    width: 100%;
    box-sizing: border-box;
    position: relative; /* Garante que elementos absolutos dentro das dobras fiquem contidos */
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  margin: 20px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 40px;
    gap: 20px;
    font-size: 25px;
    list-style-type: none;
  }

  li {
    background: linear-gradient(45deg, #000000, #520096);
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease, background 0.3s ease;

    &:hover {
      transform: scale(1.05);
      background: linear-gradient(45deg, #520096, #000000);
    }
  }

  @media (max-width: 768px) {
    ul {
      padding: 5px 10px;
      gap: 15px;
      font-size: 20px;
    }

    li {
      padding: 8px 15px;
      border-radius: 15px;
    }
  }

  @media (max-width: 480px) {
    ul {
      padding: 5px;
      gap: 10px;
      font-size: 16px;
    }

    li {
      padding: 7px 12px;
      border-radius: 12px;
    }
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BotaoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
