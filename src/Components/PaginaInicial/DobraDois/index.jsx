import styled from "styled-components";
import CardHome from "./CardHome";

export default function DobraDois() {
    return (
        <ContainerDobraDois>
            <CardHome />
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
    overflow-y: auto; /* Permite rolagem vertical se os cards excederem a altura */
    background: linear-gradient(45deg, #000000, #520096);
`;