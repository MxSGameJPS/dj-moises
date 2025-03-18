import styled from "styled-components";

export default function Home() {
    return (
        <ContainerHome>
            <h1>DJ Moises PS</h1>
            <ContainerTexto>
                <p>
                    Olá, meu nome é Moises Strottmann, mas sou conhecido como DJ Moises
                    PS. Tenho 46 anos e trabalho como DJ e comunicador há mais de 30 anos.
                    Desde meus 15 anos de idade, fui fascinado por música e, através de
                    festas para a escola e para amigos, comecei a trilhar meu caminho no
                    mundo dos DJs. Sou um profissional apaixonado pelo que faço e acredito
                    que a música tem o poder de transformar momentos. Com um estilo
                    musical Open Format, sempre busco a trilha sonora perfeita para
                    garantir que a festa seja inesquecível, sempre conectando-me com o
                    público e criando um ambiente de diversão e celebração.
                </p>
            </ContainerTexto>
            <Imagem src="/img/5.png" alt="DJ Moises" />
        </ContainerHome>
    );
}

const ContainerHome = styled.div`
    position: relative;
    min-height: 100vh; /* Garante que o container ocupe a tela inteira */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    overflow: hidden; /* Evita que a imagem vaze */

    h1 {
        position: absolute;
        top: 30%;
        left: 54%;
        font-size: 50px;
        margin-bottom: 20px;
        color: #fff; /* Branco para contraste com a imagem */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Sombra para legibilidade */
        z-index: 2; /* Garante que o título fique acima da imagem */
    }

    /* Responsividade para o h1 */
    @media (max-width: 768px) {
        h1 {
            font-size: 30px;
            margin-bottom: 15px;
        }
    }

    @media (max-width: 480px) {
        h1 {
            top: 25%;
            font-size: 24px;
            margin-bottom: 10px;
        }
    }

    @media (max-width: 375px) {
        h1 {
            top: 20%;
            left: 30%;
            font-size: 25px;
        }
    }
`;

const Imagem = styled.img`
    position: absolute;
    top: 0; /* Começa no topo em telas maiores para dar espaço ao texto */
    left: -10%;
    width: 70%;
    object-fit: cover; /* Cobre o container sem distorcer */
    z-index: 1; /* Fica atrás do texto */
    opacity: 0.8; /* Transparência leve em desktop */

    /* Responsividade */
    @media (max-width: 768px) {
        top: 5%; /* Ajuste leve em tablets para manter a imagem visível */
        opacity: 0.6; /* Mais transparente em tablets */
    }

    @media (max-width: 480px) {
        top: 10%; /* Posição original que você gostou em celulares */
        left: 0;
        opacity: 0.5; /* Ainda mais transparente em celulares */
        width: 100%; /* Ajusta a largura para celulares */
    }

    @media (max-width: 320px) {
        top: 10%; /* Mantém a posição em telas pequenas */
        opacity: 0.4; /* Máxima transparência em telas pequenas */
    }
`;

const ContainerTexto = styled.div`
    position: absolute; /* Remove absolute para fluir com o layout */
    top: 40%;
    left: 40%;
    font-size: 28px;
    width: 40%;
    padding: 20px;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.9); /* Fundo branco com transparência */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 2; /* Garante que o texto fique acima da imagem */
    margin: 0 auto; /* Centraliza horizontalmente */

    p {
        margin: 0; /* Remove margem padrão do parágrafo */
        color: #333; /* Cor escura para contraste */
    }

    /* Responsividade */
    @media (max-width: 768px) {
        font-size: 22px;
        width: 70%;
        padding: 15px;
    }

    @media (max-width: 480px) {
        top: 30%;
        left: 5%;
        font-size: 16px;
        width: 85%;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.95); /* Fundo mais opaco */
    }

    @media (max-width: 320px) {
        font-size: 14px;
        width: 90%;
        padding: 8px;
    }
`;