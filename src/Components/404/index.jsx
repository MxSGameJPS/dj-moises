import {
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NotFoundImage() {
  return (
    <StyledContainer>
      <StyledSimpleGrid
        spacing={{ base: 40, sm: 80 }}
        cols={{ base: 1, sm: 2 }}
      >
        <StyledMobileImage src="/img/Moises com fone.png" />
        <div>
          <StyledTitle>Tu digitou alguma coisa errada</StyledTitle>
          <StyledText c="dimmed" size="lg">
            Da uma olhadinha direitinho no link
          </StyledText>
          <StyledButton
            component={Link}
            to="/home"
            variant="outline"
            size="md"
            mt="xl"
          >
            Voltar a Home
          </StyledButton>
        </div>
        <StyledMobileImage src="/img/Moises com fone.png" />
      </StyledSimpleGrid>
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)`
  padding: 40px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000; /* Adiciona fundo preto para combinar com o tema do site */
`;

const StyledSimpleGrid = styled(SimpleGrid)`
  /* Estilização adicional para o SimpleGrid, se necessário */
`;

const StyledMobileImage = styled(Image)`
  display: block;

  @media (min-width: 640px) {
    display: none;
  }
`;

const StyledDesktopImage = styled(Image)`
  display: none;

  @media (min-width: 640px) {
    display: block;
  }
`;

const StyledTitle = styled(Title)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #ffffff; /* Texto branco para contraste com o fundo preto */
`;

const StyledText = styled(Text)`
  color: #cccccc; /* Texto cinza claro para contraste */
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
`;
