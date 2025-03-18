import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

export default function Festas() {
    const [selectedMidia, setSelectedMidia] = useState(null);
    const [midias, setMidias] = useState([]);

    // Carrega o festas.json via fetch
    useEffect(() => {
        fetch("/festas.json")
            .then((response) => response.json())
            .then((data) => setMidias(data.festas))
            .catch((error) => console.error("Erro ao carregar festas.json:", error));
    }, []);

    const openModal = (midia) => {
        setSelectedMidia(midia);
    };

    const closeModal = () => {
        setSelectedMidia(null);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <Container>
            <Galeria>
                {midias.map((midia, index) => (
                    <Item key={index} onClick={() => openModal(midia)}>
                        {midia.tipo === "foto" ? (
                            <Imagem src={midia.caminho} alt={midia.alt} />
                        ) : (
                            <Video muted>
                                <source src={midia.caminho} type={midia.tipoArquivo} />
                                Seu navegador não suporta o elemento de vídeo.
                            </Video>
                        )}
                    </Item>
                ))}
            </Galeria>

            {selectedMidia && (
                <ModalOverlay onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        {selectedMidia.tipo === "foto" ? (
                            <ModalImagem src={selectedMidia.caminho} alt={selectedMidia.alt} />
                        ) : (
                            <ModalVideo controls autoPlay>
                                <source src={selectedMidia.caminho} type={selectedMidia.tipoArquivo} />
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

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #000000;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
    @media (max-width: 480px) {
        padding: 5px;
    }
`;

const Galeria = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1200px;
    width: 100%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        padding: 15px;
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 10px;
        border-radius: 10px;
        max-width: 100%;
        margin-top: 20px;
    }
`;

const Item = styled.div`
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s ease;
    cursor: pointer;
    height: 200px;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
        height: 150px;
    }
    @media (max-width: 480px) {
        height: 200px;
    }
`;

const Imagem = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    animation: ${fadeIn} 0.3s ease-in;
`;

const ModalContent = styled.div`
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 95%;
        padding: 15px;
    }
    @media (max-width: 480px) {
        max-width: 100%;
        padding: 10px;
        border-radius: 5px;
    }
`;

const ModalImagem = styled.img`
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;

    @media (max-width: 480px) {
        max-height: 80%;
    }
`;

const ModalVideo = styled.video`
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;

    @media (max-width: 480px) {
        max-height: 70vh;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    color: #333;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
        color: #ff0000;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        top: 5px;
        right: 5px;
    }
`;