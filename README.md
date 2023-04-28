# Cartão de crédito

Projeto criado na bootcamp Laboratoria Sap010, onde é possivel usar o algoritmo de Luhn para validação de cartão de crédito

## Sobre o projeto

O objetivo desse projeto foi criar um interface onde o usuário pode colocar seu numero de cartão de crédito e vê se ele é válido ou não e dessa forma conseguir desconto na loja online sem complicações.

## Experiência do usuário

Ao acessar a plataforma da loja plantas carnivoras (index.html) o usuário vai ver um campo para preencher seus dados do cartão e um botão de verificação. Após clicar no botão aparece um alert no topo da tela do usuário dizendo se o seu cartão é válido ou não.

![preview](./src/images/Index.html)

## Lógica

A lógica utilizada para validar o cartão foi do algoritmo de Luhn, onde o número é colocado da direita para a esquerda e dobra-se a cada segundo digito. Se o número resultante tiver dois digitos eles são somados para se obter um único digiyo. Logo após é somado todos os digitos incluido os que não foram dobrados e se o resultado final for múltiplo de 10 o número é valido.Caso contrário, o número é inválido.
