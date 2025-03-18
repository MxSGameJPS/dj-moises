import styled from "styled-components";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"; // Ícones do react-icons
import { Link } from "react-router-dom"; // Para links, se necessário

const Footer = () => {
  const links = [
    { link: "#", label: "Contact" },
    { link: "#", label: "Privacy" },
    { link: "#", label: "Blog" },
    { link: "#", label: "Store" },
    { link: "#", label: "Careers" },
  ];

  const items = links.map((link) => (
    <StyledLink
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </StyledLink>
  ));

  return (
    <StyledFooter>
      <StyledInner>
        <img src="/img/Moises com fone.png" alt="" />

        <StyledLinks>{items}</StyledLinks>

        <StyledSocialIcons>
          <StyledIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={18} />
          </StyledIcon>
          <StyledIcon
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={18} />
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
    width: 128px;  }
`;

const StyledLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;

  
`;

const StyledLink = styled.a`
  color: #868e96;
  text-decoration: none;
  font-size: 14px;
  padding: 5px 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #228be6;
  }

  
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
    background-color: #228be6;
    color: #fff;
    transform: scale(1.1);
  }

  svg {
    width: 18px;
    height: 18px;
  }

`;

export default Footer;