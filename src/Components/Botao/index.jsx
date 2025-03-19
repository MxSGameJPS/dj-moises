import styled from 'styled-components';

export default function Botao({ children, href  }) {
    return (
        <BotaoStyles className="botao">
            <a target="_blank"
            rel="noopener noreferrer"
            href={href}>{children}</a> 
        </BotaoStyles>
    )
} 

const BotaoStyles = styled.button`
    font-size: 26px;
    width: 500px;
    background: linear-gradient(45deg, #7700ff, #000);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        color: #000;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 468px) {
        width: 100%;
        font-size: 20px;
    }
    @media (max-width: 375px) {
        width: 100%;
        font-size: 18px;
    }
    @media (max-width: 768px) {
        width: 100%;
    }

    

`