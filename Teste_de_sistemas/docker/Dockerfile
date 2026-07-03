#define a imagem base
FROM node:22-alpine

#define a pasta de trabalho no container
WORKDIR /app

#copia os arquivos de dependência primeiro
COPY package.json package-lock.json /

#instala as dependências
RUN npm i 

#copia resto do código
COPY . .

#Comando padrão para start 
CMD ["npm", "run", "test"]