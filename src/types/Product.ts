export interface Product {
    id?: number | string;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
    marca?: string;
    modelo?: string;    
    garantia_meses?: number;
}

//DTO -> Data trasfer Object ou Objeto de tranferencia de Dados
//Definindo quais os dados nos vamos enviar em uma operação específica
export interface CreateProductDTO {
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
};

export interface UpdateProductDTO {
    id?: number | string;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    quantidade_estoque?: number;
    quantidade?: number;
    categoria_id?: number;
    status?: number;
    destaque?: boolean;
}