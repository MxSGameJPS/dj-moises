import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

// Componente HotelImage com prop para ajuste de object-position
const HotelImage = ({ src, alt, onClick, adjustPosition }) => (
  <ImageCardStyled onClick={onClick} adjustPosition={adjustPosition}>
    <img src={src} alt={alt} className="hotel-image" />
  </ImageCardStyled>
);

export default function Carousel() {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para popup
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth / 2); // Divide por 2 porque duplicamos as imagens
    }

    // Adiciona listener para detectar mudanças de tamanho da tela
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (contentRef.current) {
        setContentWidth(contentRef.current.scrollWidth / 2);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hotelImages = [
    {
      id: 1,
      src: "/img_producoes/1.jpeg",
      alt: "Hotel Image 1",
      adjustPosition: false, // Não precisa de ajuste
    },
    {
      id: 2,
      src: "/img_producoes/2.jpeg",
      alt: "Hotel Image 2",
      adjustPosition: true, // Precisa de ajuste
    },
    {
      id: 3,
      src: "/img_producoes/3.jpeg",
      alt: "Hotel Image 3",
      adjustPosition: true, // Precisa de ajuste
    },
    {
      id: 4,
      src: "/img_producoes/4.jpeg",
      alt: "Hotel Image 4",
      adjustPosition: false, // Não precisa de ajuste
    },
    {
      id: 5,
      src: "/img_producoes/5.jpeg",
      alt: "Hotel Image 5",
      adjustPosition: true, // Precisa de ajuste
    },
  ];

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <CarouselContainer>
      <h2 className="title">Ps Produções</h2>
      <CarouselWrapper
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <CarouselInner
          style={{
            animationDuration: `${
              isMobile ? contentWidth / 50 : contentWidth / 90
            }s`, // Velocidade diferente para mobile
            animationPlayState: isPaused ? "paused" : "running",
          }}
          ref={contentRef}
        >
          {hotelImages.map((image) => (
            <HotelImage
              key={`first-${image.id}`}
              src={image.src}
              alt={image.alt}
              onClick={() => openPopup(image)}
              adjustPosition={image.adjustPosition} // Passa a prop
            />
          ))}
          {hotelImages.map((image) => (
            <HotelImage
              key={`second-${image.id}`}
              src={image.src}
              alt={image.alt}
              onClick={() => openPopup(image)}
              adjustPosition={image.adjustPosition} // Passa a prop
            />
          ))}
        </CarouselInner>
      </CarouselWrapper>
      {selectedImage && (
        <PopupOverlay onClick={closePopup}>
          <PopupContent onClick={(e) => e.stopPropagation()}>
            <PopupImage src={selectedImage.src} alt={selectedImage.alt} />
            <CloseButton onClick={closePopup}>×</CloseButton>
          </PopupContent>
        </PopupOverlay>
      )}
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #ffffff;
  position: relative;
  width: 100%;
  margin: 0 auto;

  .title {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow: hidden; /* Esconde o overflow pra animação fluida */
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const CarouselInner = styled.div`
  display: flex;
  gap: 1rem;
  animation: scroll-left linear infinite;

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(
        -50%
      ); /* Simplificando a animação para melhor desempenho */
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const ImageCardStyled = styled.div`
  min-width: 500px; /* Largura fixa pra cada imagem */
  max-width: 500px;
  height: 400px;
  border-radius: 12px;
  overflow: hidden; /* Garante que a imagem não vaze */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0; /* Impede que os cards encolham */
  cursor: pointer; /* Indica que é clicável */
  transition: transform 0.2s ease; /* Efeito ao passar o mouse */

  &:hover {
    transform: scale(1.02); /* Pequeno zoom ao passar o mouse */
  }

  .hotel-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta a imagem pra preencher o espaço */
    object-position: ${(props) =>
      props.adjustPosition
        ? "center 20%"
        : "center center"}; /* Ajusta o foco para imagens específicas */
  }

  @media (max-width: 1024px) {
    min-width: 400px;
    max-width: 400px;
    height: 320px;
  }

  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 280px;
    height: 220px;

    .hotel-image {
      object-position: ${(props) =>
        props.adjustPosition
          ? "center 30%"
          : "center center"}; /* Mantém o ajuste em telas menores */
    }
  }

  @media (max-width: 480px) {
    min-width: 260px;
    max-width: 260px;
    height: 200px;

    .hotel-image {
      object-position: ${(props) =>
        props.adjustPosition
          ? "center 15%"
          : "center center"}; /* Mantém o ajuste em telas menores */
    }
  }

  @media (max-width: 375px) {
    min-width: 220px;
    max-width: 220px;
    height: 180px;
  }

  @media (max-width: 320px) {
    min-width: 200px;
    max-width: 200px;
    height: 160px;

    .hotel-image {
      object-position: ${(props) =>
        props.adjustPosition
          ? "center 10%"
          : "center center"}; /* Mantém o ajuste em telas menores */
    }
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const PopupContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  overflow: hidden;

  @media (max-width: 480px) {
    max-width: 95%;
    max-height: 80vh;
  }
`;

const PopupImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 12px;

  @media (max-width: 480px) {
    max-height: 70vh;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: #ff4444;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ff6666;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 20px;
    top: 5px;
    right: 5px;
  }
`;
