import styled from "styled-components";
import DobraUm from "../PaginaInicial/DobraUm";
import DobraDois from "../PaginaInicial/DobraDois";

export default function Home() {
  return (
    <ContainerHome>
      <DobraUm />
      <DobraDois />
    </ContainerHome>
  );
}

const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #000000; /* Fundo preto para toda a aplicação */
  overflow-x: hidden;

  /* Estiliza todas as dobras (filhos diretos) */
  > * {
    min-height: 500px; /* Garante que cada dobra ocupe o espaço no fluxo */
    max-height: 500px; /* Altura máxima de 500px */
    width: 100%;
    box-sizing: border-box;
    position: relative; /* Garante que elementos absolutos dentro das dobras fiquem contidos */
  }

  @media (max-width: 768px) {
    > * {
      min-height: 450px;
      max-height: 450px;
    }
  }

  @media (max-width: 480px) {
    > * {
      min-height: auto; /* Permite que a altura se adapte ao conteúdo */
      max-height: none; /* Remove a restrição de altura máxima */
      padding: 0;
    }

    > *:first-child {
      padding-bottom: 30px;
    }

    > *:last-child {
      padding-top: 20px;
      padding-bottom: 70px; /* Espaço para o wave animation */
    }
  }

  @media (max-width: 375px) {
    > *:first-child {
      padding-bottom: 20px;
    }

    > *:last-child {
      padding-bottom: 60px;
    }
  }
`;
