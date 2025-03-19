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
      <Carousel />
      <Botao href={"https://wa.me/5551991454337"}> Saiba Mais </Botao>
    </ContainerProducoes>
  );
}

const ContainerProducoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
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

  ul {
    padding: 10px 90px;
    margin: 10px;
    border-radius: 40px;
    gap: 10px;
    font-size: 25px;
  }
`;
