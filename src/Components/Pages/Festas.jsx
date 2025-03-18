import festasData from "../mocks/festas.json";


export default function Festas() {
    return (
        <div>
            {festasData.festas.map((festa, index) => (
                <div key={index}>
                    <h2>{festa.titulo}</h2>
                </div>
            ))}
            
        </div>
    );
}