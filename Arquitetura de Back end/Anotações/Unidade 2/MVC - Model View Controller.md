A ideia principal é separar as camadas de visão do usuário, modelo e controlador. 

MVC -> Model View Controller

## Controller

A camada de controller é a camada responsável pelos endpoints, essa é a camada será acessada e deverá retornar os dados. 

Essa camada não deve conter nenhuma regra de negócio.

## Model

Camada que deve conter as regras de negócio e prover as respostas para o controlador

## Visão

Camada responsável por receber os dados e transmitir ao usuário através de uma interface visual