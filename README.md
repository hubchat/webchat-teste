# HUBHCAT  

O projeto precisa ser desenvolvido em angular. A ideia do teste é ser criado o front-end de um chat online, onde o usuário possa se cadastrar, conectar, criar salas e utilizar essas salas para conversar recebendo as mensagens em real time através de um websocket. As funções esperadas do sistema são:

- Devera ser possível criar um usuário.
- Devera ser possível fazer um login com usuário criado.
- Devera ser possível criar uma sala de conversa.
- Com a sala de conversa criada deve ser possível entrar na sala e enviar/receber mensagens.

## Tecnologias  

- Node Js  
- Express  
- Socket IO  
- Openapi 3 || Swagger  
- Angular  
- MongoDB

## Execução do servidor (nécessario ter o NodeJs@16.10.0 instalado ou Docker)  

Para executar o projeto caso tenha o docker e o docker compose instalados:  
- Baixe o repositório  
- Acesse a pasta server-chat e execute o comando `docker compose up || docker-compose up -d`  
- URL api `http://localhost:3333`  

Para executar o projeto caso não tenha docker:
- Baixe o repositório  
- Acesse a pasta server-chat e execute o comando `npm install`  
- Na raiz do projeto crie um arquivo .env conforme o arquivo .env.example  
- Preencha a uri da sua base mongoDB na variável MONGO_URL  
- Preencha um password quolquer na variável TOKEN
- execute o comando `npm run dev`  
- URL api `http://localhost:3333`  

## Documentação  

Api server-chat foi documentada utilizando o swagger. Após executar o server-chat a mesma pode ser acessada através do link `http://localhost:3333/api-docs/` 

## Layout

- ![Home](https://github.com/hubchat/webchat-teste/blob/master/layout/Home.png)  

- ![Session](https://github.com/hubchat/webchat-teste/blob/master/layout/Session.png)  

- ![Login](https://github.com/hubchat/webchat-teste/blob/master/layout/Login.png)  

- ![Fluxo](https://github.com/hubchat/webchat-teste/blob/master/layout/Fluxo.gif)  

- Não será feito uma análise píxel a píxel do layout, as imagens são para se basear e não uma regra

## Duvidas ou Sugestões  

- Para entrega criar um repositório e colocar a execução do projeto no readme

[Email](mailto:gustavo.lima@hublab.com.br)  
