import styled from "styled-components";
import Titulo from "./titulo";
import Carousel from "./Carrossel";

export default function PsProducoes() {
  return (
    <ContainerProducoes>
      <Titulo />
      <Div>
        <TextoDescritivo>
          Acabou sua preocupação procura DJ, Som, Iluminação, Imagem,
          Fotografia, Filmagem, Cerimonial, Decoração ou até o Gerenciamento de
          todo evento, vamos deixar tudo certo para você ter toda tranquilidade
          e aproveitar sua festa, como um convidado, na maior diversão.
        </TextoDescritivo>
        <ContatoLink
          href="https://wa.me/5551991454337"
          target="_blank"
          rel="noopener noreferrer"
        >
          Entre em contato
        </ContatoLink>
      </Div>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
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
  max-width: 800px;
  margin: 20px auto;
  padding: 0 20px;
`;

const TextoDescritivo = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  background: linear-gradient(
    45deg,
    rgba(10, 25, 41, 0.7),
    rgba(26, 77, 140, 0.7)
  );
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 12px;
  }
`;

const ContatoLink = styled.a`
  display: inline-block;
  background: linear-gradient(45deg, #0a1929, #1a4d8c);
  color: #fff;
  padding: 10px 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    transform: scale(1.05);
    background: linear-gradient(45deg, #1a4d8c, #0a1929);
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
