# Trabalho de Micro Container

Esse trabalho consiste de um simples projeto em node que faz um CRUD em um banco de dados Redis

O endpoint se encontra em /users

A imagem do projeto está no [docker hub](https://hub.docker.com/repository/docker/alexandressh/micro-node).

Para rodar o projeto é só subir o mesmo com o docker-compose

`docker-compose up`

Os endpoints podem ser acessados através do Postman

Os endpoints estão no `Microcontainer.postman_collection.json` e as variáveis de configuração de ambiente estão no `local.postman_environment.json`

***

## Instruções de uso do Postman

Verificar o que já tem no Redis:

GET /users

Resposta:
```json
[
    "Maria",
    "key"
]
```
***

Inserir um novo usuário

POST /users

Body:
```json
{
	"name": "Maria",
	"value": "Estudante da Fiap"
}
```

***
Alterar os valores do usuário

PUT /users/Maria

Body:
```json
{
	"value": "Estudando na 50ASO"
}
```
***
Removers um usuário

DELETE /users/Maria


