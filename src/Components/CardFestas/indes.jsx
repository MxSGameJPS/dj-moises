import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

export default function Eventos() {
  const [selectedMidia, setSelectedMidia] = useState(null);
  const [midias, setMidias] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [loading, setLoading] = useState(true);

  // Carrega o festas.json via fetch
  useEffect(() => {
    setLoading(true);
    fetch("/festas.json")
      .then((response) => response.json())
      .then((data) => {
        setMidias(data.festas);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar festas.json:", error);
        setLoading(false);
      });
  }, []);

  const openModal = (midia) => {
    setSelectedMidia(midia);
    document.body.style.overflow = "hidden"; // Impede rolagem quando modal está aberto
  };

  const closeModal = () => {
    setSelectedMidia(null);
    document.body.style.overflow = "auto"; // Restaura rolagem quando modal é fechado
  };

  // Fecha modal com tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Filtra midias por tipo
  const midiasFiltradas =
    filtro === "todos"
      ? midias
      : midias.filter((midia) => midia.tipo === filtro);

  return (
    <Container>
      <Header>
        <Titulo>Galeria de Festas</Titulo>
        <Subtitulo>
          Confira os momentos incríveis das festas com DJ Moises PS
        </Subtitulo>

        <Filtros>
          <FiltroButton
            active={filtro === "todos"}
            onClick={() => setFiltro("todos")}
          >
            Todos
          </FiltroButton>
          <FiltroButton
            active={filtro === "foto"}
            onClick={() => setFiltro("foto")}
          >
            Fotos
          </FiltroButton>
          <FiltroButton
            active={filtro === "video"}
            onClick={() => setFiltro("video")}
          >
            Vídeos
          </FiltroButton>
        </Filtros>
      </Header>

      {loading ? (
        <LoadingContainer>
          <LoadingSpinner />
          <LoadingText>Carregando...</LoadingText>
        </LoadingContainer>
      ) : (
        <Galeria>
          {midiasFiltradas.length === 0 ? (
            <MensagemVazia>
              Nenhum item encontrado para este filtro.
            </MensagemVazia>
          ) : (
            midiasFiltradas.map((midia, index) => (
              <Item key={index} onClick={() => openModal(midia)}>
                {midia.tipo === "foto" ? (
                  <>
                    <Imagem src={midia.caminho} alt={midia.alt} />
                    <ItemOverlay>
                      <ItemIcon>🖼️</ItemIcon>
                    </ItemOverlay>
                  </>
                ) : (
                  <>
                    <Video muted>
                      <source src={midia.caminho} type={midia.tipoArquivo} />
                      Seu navegador não suporta o elemento de vídeo.
                    </Video>
                    <ItemOverlay>
                      <ItemIcon>▶️</ItemIcon>
                    </ItemOverlay>
                  </>
                )}
              </Item>
            ))
          )}
        </Galeria>
      )}

      {selectedMidia && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {selectedMidia.tipo === "foto" ? (
              <ModalImagem
                src={selectedMidia.caminho}
                alt={selectedMidia.alt}
              />
            ) : (
              <ModalVideo controls autoPlay>
                <source
                  src={selectedMidia.caminho}
                  type={selectedMidia.tipoArquivo}
                />
                Seu navegador não suporta o elemento de vídeo.
              </ModalVideo>
            )}
            <CloseButton onClick={closeModal}>✖</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const pulse = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a1929, #1a4d8c);
  padding: 40px 20px;
  animation: ${fadeIn} 0.5s ease-in;
  align-items: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
  max-width: 800px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Titulo = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitulo = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const Filtros = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;
    max-width: 300px;
    margin: 15px auto;
  }
`;

const FiltroButton = styled.button`
  padding: 10px 20px;
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.3)"};
  color: ${(props) => (props.active ? "#520096" : "#ffffff")};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "600" : "400")};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    color: #520096;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`;

const Galeria = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`;

const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  color: #ffffff;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const MensagemVazia = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Item = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    > div {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    width: 45%;
    max-width: 180px;
  }

  @media (max-width: 375px) {
    width: 90%;
    max-width: 280px;
  }
`;

const ItemOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(82, 0, 150, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const ItemIcon = styled.span`
  font-size: 2rem;
  color: white;
  animation: ${pulse} 2s infinite ease-in-out;
`;

const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${Item}:hover & {
    transform: scale(1.1);
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;

  ${Item}:hover & {
    transform: scale(1.1);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 41, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 95%;
  }

  @media (max-width: 480px) {
    max-width: 98%;
    max-height: 85vh;
    border-radius: 5px;
  }
`;

const ModalImagem = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 5px;

  @media (max-width: 480px) {
    max-height: 70vh;
    object-fit: contain;
    width: auto;
    height: auto;
  }
`;

const ModalVideo = styled.video`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 5px;

  @media (max-width: 480px) {
    max-height: 70vh;
    width: auto;
    height: auto;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: -40px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: -35px;
    right: 0;
  }

  @media (max-width: 480px) {
    top: -35px;
    right: 0;
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
`;
