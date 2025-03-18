export interface Midia {
    tipo: "foto" | "video";
    nome: string;
    caminho: string;
    alt?: string;
    tipoArquivo?: string;
}

export interface FestasData {
    midias: Midia[];
}

declare module "../mocks/festas.json" {
    const value: FestasData;
    export default value;
}