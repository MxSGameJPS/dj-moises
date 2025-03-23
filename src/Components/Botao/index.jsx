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
    font-size: 20px;
    width: 250px;
    background: linear-gradient(45deg, #7700ff, #000);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin: 20px 0;

    &:hover {
        color: #fff;
        transform: scale(1.05);
        background: linear-gradient(45deg, #000, #7700ff);
    }

    a {
        color: #fff;
        text-decoration: none;
        display: block;
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 230px;
        font-size: 18px;
    }
    
    @media (max-width: 480px) {
        width: 200px;
        font-size: 16px;
    }
    
    @media (max-width: 375px) {
        width: 180px;
        font-size: 16px;
    }
`