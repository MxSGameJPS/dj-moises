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
`;