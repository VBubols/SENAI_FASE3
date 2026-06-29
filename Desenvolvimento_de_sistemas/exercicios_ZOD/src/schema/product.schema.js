import {z} from 'zod';

export const product = z.object({
    nome: z.string().min(2),
    categoria: z.enum(['ferramentas', 'materiais', 'encanamento', 'tintas', 'eletronicos', 'EPIs']),
    estoque: z.number().int(),
    preco: z.number().positive()
});