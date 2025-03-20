import styled from "styled-components";
import { FaYoutube , FaWhatsapp , FaInstagram } from "react-icons/fa"; // Ícones do react-icons
import { Link } from "react-router-dom"; // Para links, se necessário

const Footer = () => {
  
  return (
    <StyledFooter>
      <StyledInner>
        <img src="/img/Moises com fone.png" alt="" />

        <StyledLinks>
          Desenvolvido por Saulo Pavanello
          <p>(51) 99339-2983</p>
        </StyledLinks>

        <StyledSocialIcons>
          <StyledIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube  size={18} />
          </StyledIcon>
          <StyledIcon
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp  size={28} />
          </StyledIcon>
          <StyledIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={18} />
          </StyledIcon>
        </StyledSocialIcons>
      </StyledInner>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: linear-gradient(45deg, #000000, #520096);
  padding: 20px 0;
  text-align: center;
  width: 100%;

  
  @media (max-width: 768px) { /* Tablets */
    flex-direction: row; /* Mantém horizontal, mas ajusta espaçamentos */
    padding: 0 10px;
  }

  @media (max-width: 480px) { /* Celulares */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }
  

`;

const StyledInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;

  
  img {
    width: 128px;  
  }
  
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #fff;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    padding: 20px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 100%;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  flex-direction: column; 
`;

const StyledSocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  flex-wrap: nowrap;

  
`;

const StyledIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  color: #495057;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #b822e6;
    color: #fff;
    transform: scale(1.1);
  }

  svg {
    width: 18px;
    height: 18px;
  }

`;

export default Footer;