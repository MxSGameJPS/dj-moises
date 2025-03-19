import styled from "styled-components";
import Titulo from "./titulo";
import Carousel from "./Carrossel";
import Botao from "../Botao";

export default function PsProducoes() {
  return (
    <ContainerProducoes>
      <Titulo />
      <ul>
        <li>Casamento</li>
        <li>Festa de 15 anos</li>
        <li>Formaturas</li>
        <li>Bodas</li>
        <li>Despedida de Solteiro</li>
      </ul>
      <Carousel />
      <Botao href= {"https://wa.me/5551991454337"}> Saiba Mais </Botao>
    </ContainerProducoes>
  );
}

const ContainerProducoes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  ul {
    /* background-color: rgba(255, 255, 255,1); */
    padding: 10px 90px;
    margin: 10px;
    border-radius: 40px;
    gap: 10px;
    font-size: 25px;
    /* color: #000;   */
  }
`;
