import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Abertura() {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  // Após 5 segundos, inicia o fade out da abertura
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // 5 segundos, ajuste conforme necessário

    const redirectTimer = setTimeout(() => {
      navigate("/home"); // Redireciona para /home após o fade out
  }, 6000); // 6 segundos (5s + 1s da animação)

    return () => {
      clearTimeout(timer);
      clearTimeout(redirectTimer);
    }; 
  }, [ navigate ]);

  return (
    <Inicio className={isVisible ? "visible" : "hidden"}>
      <Video autoPlay muted loop playsInline>
        <source src="/videos/abertura.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </Video>
      <Imagem
        src="/img/Moises com fone.png"
        alt="Moises com fone"
        className={isVisible ? "enter" : "exit"}
      />
    </Inicio>
  );
}

// Animação de entrada da imagem
const crescerGirar = keyframes`
    0% {
        transform: scale(0) rotate(0deg);
        opacity: 0;
    }
    100% {
        transform: scale(1) rotate(360deg);
        opacity: 1;
    }
`;

// Animação de saída da imagem
const encolherGirar = keyframes`
    0% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
    100% {
        transform: scale(0) rotate(360deg);
        opacity: 0;
    }
`;

// Fade out da abertura inteira
const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Inicio = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  &.visible {
    opacity: 1;
  }
  &.hidden {
    animation: ${fadeOut} 1s ease-in forwards; /* Fade out de 1 segundo */
  }
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    object-fit: cover;
  }
  @media (max-width: 480px) {
    object-fit: cover;
  }
`;

const Imagem = styled.img`
  position: absolute;
  top: 40%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: auto;

  &.enter {
    animation: ${crescerGirar} 2s ease-out forwards; /* Entrada */
  }
  &.exit {
    animation: ${encolherGirar} 1s ease-in forwards; /* Saída */
  }

  @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 350px;
    left: 10%;
  }
`;
