import { IoHome } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Adicionado para navegação interna

const Nav = () => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <Link to="/home" data-social="spotify" aria-label="home">
            <div className="filled" />
            <IoHome size={24} /> {/* Aumentei o tamanho para melhor visibilidade */}
          </Link>
          <div className="tooltip">Home</div>
        </li>
        <li className="icon-content">
          <Link to="/festas" data-social="pinterest" aria-label="festas">
            <div className="filled" />
            <GiPartyPopper size={24} /> {/* Aumentei o tamanho */}
          </Link>
          <div className="tooltip">Festas</div> {/* Corrigi de "estas" para "Festas" */}
        </li>
        <li className="icon-content">
          <a
            data-social="dribbble"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/djmoises.ps"
          >
            <div className="filled" />
            <AiFillInstagram size={24} /> {/* Aumentei o tamanho */}
          </a>
          <div className="tooltip">Instagram</div>
        </li>
        <li className="icon-content">
          <a
            data-social="telegram"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/5551991454337"
          >
            <div className="filled" />
            <IoLogoWhatsapp size={24} /> {/* Aumentei o tamanho */}
          </a>
          <div className="tooltip">WhatsApp</div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end; /* Mantive alinhamento à direita */
  padding: 0 70px;
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }

  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: 50px;
  }

  .example-2 .icon-content a,
  .example-2 .icon-content Link { /* Adicionado para suportar Link */
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    text-decoration: none; /* Remove sublinhado padrão de links */
  }

  .example-2 .icon-content a:hover,
  .example-2 .icon-content Link:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
    color: white;
  }

  .example-2 .icon-content a svg,
  .example-2 .icon-content Link svg {
    position: relative;
    z-index: 1;
    width: 20px;
    height: 20px;
  }

  .example-2 .icon-content a .filled,
  .example-2 .icon-content Link .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }

  .example-2 .icon-content a:hover .filled,
  .example-2 .icon-content Link:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="spotify"] .filled,
  .example-2 .icon-content a[data-social="spotify"] ~ .tooltip,
  .example-2 .icon-content Link[to="/home"] .filled,
  .example-2 .icon-content Link[to="/home"] ~ .tooltip {
    background-color: #1d41b9;
  }
  .example-2 .icon-content a[data-social="pinterest"] .filled,
  .example-2 .icon-content a[data-social="pinterest"] ~ .tooltip,
  .example-2 .icon-content Link[to="/festas"] .filled,
  .example-2 .icon-content Link[to="/festas"] ~ .tooltip {
    background-color: #99048d;
  }
  .example-2 .icon-content a[data-social="dribbble"] .filled,
  .example-2 .icon-content a[data-social="dribbble"] ~ .tooltip {
    background-color: #ac0808;
  }
  .example-2 .icon-content a[data-social="telegram"] .filled,
  .example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
    background-color: #07cc00;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
    .example-2 {
      gap: 8px;
    }
    .example-2 .icon-content {
      margin: 0 5px;
    }
    .example-2 .icon-content a,
    .example-2 .icon-content Link {
      width: 25px;
      height: 25px;
    }
    .example-2 .icon-content a svg,
    .example-2 .icon-content Link svg {
      width: 15px;
      height: 15px;
    }
    .example-2 .icon-content .tooltip {
      font-size: 12px;
      padding: 4px 8px;
    }
    .example-2 .icon-content:hover .tooltip {
      top: 45px;
    }
  }

  @media (max-width: 480px) {
    padding: 0;
    width: 100%;
    .example-2 {
      gap: 15px;
      width: 100%;
      padding: 0;
    }
    .example-2 .icon-content {
      margin: 0;
    }
    .example-2 .icon-content a,
    .example-2 .icon-content Link {
      width: 30px;
      height: 30px;
    }
    .example-2 .icon-content a svg,
    .example-2 .icon-content Link svg {
      width: 20px;
      height: 20px;
    }
    .example-2 .icon-content .tooltip {
      top: -25px;
      font-size: 10px;
      padding: 3px 6px;
    }
    .example-2 .icon-content:hover .tooltip {
      top: -40px;
    }
  }
`;

export default Nav;