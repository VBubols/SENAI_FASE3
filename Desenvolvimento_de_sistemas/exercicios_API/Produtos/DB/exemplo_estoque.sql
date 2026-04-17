-- Active: 1776450244534@@127.0.0.1@5432@estoque
-- 1. Crie o banco
CREATE DATABASE estoque;

-- 2. Conecte ao banco e execute o restante

CREATE TABLE produtos (
id SERIAL PRIMARY KEY,
nome TEXT NOT NULL,
categoria TEXT NOT NULL,
preco NUMERIC(10, 2) NOT NULL,
quantidade INTEGER NOT NULL DEFAULT 0
);

INSERT INTO produtos (nome, categoria, preco, quantidade) VALUES
('Teclado Mecânico', 'Periférico', 350.00, 15),
('Mouse Gamer', 'Periférico', 180.00, 22),
('Monitor 24"', 'Monitor', 1200.00, 8),
('SSD 480GB', 'Armazenamento', 280.00, 30),
('Headset USB', 'Periférico', 220.00, 12),
('Placa de Vídeo RTX 3060', 'Hardware', 2800.00, 4);