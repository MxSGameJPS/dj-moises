import styled from "styled-components";
import Nav from "./Nav";

export default function Header() {
  return (
    <ContainerHeader>
      <div className="container__img">
        <img src="/img/Moises com fone.png" alt="Logo Dj Moises" />
      </div>
      <Nav />
    </ContainerHeader>
  );
}

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, #000000, #520096);

  .container__img {
    width: 100px;
    height: auto;
    margin: 10px 60px;
    padding: 10px;
    align-self: flex-start;

    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    /* Tablets */
    flex-direction: row; /* Mantém horizontal, mas ajusta espaçamentos */
    padding: 0 10px;

    .container__img {
      width: 80px; /* Imagem menor */
      margin: 5px 20px; /* Menos margem lateral */
      padding: 5px;
    }
  }

  @media (max-width: 480px) {
    /* Celulares */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;

    .container__img {
      width: 100px; /* Tamanho mais adequado */
      margin: 5px auto; /* Centraliza a imagem */
      padding: 5px;
      align-self: center; /* Centraliza a imagem */
    }
  }
`;
