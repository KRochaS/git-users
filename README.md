<p align="center">
  <img src="https://github.com/KRochaS/git-users/blob/master/.github/teste-tecnico-logo.svg" width="290" >
  <br/>
  <br/>
  <img src="https://github.com/KRochaS/git-users/blob/master/.github/logo.svg" width="150" >
  <br/>
  <br/>  
</p>

<p align="center">	
   <img src="https://img.shields.io/badge/-Angular 17-A5A5B0?style=flat&logoColor=white" />

  <img src="https://img.shields.io/badge/-NX-A5A5B0?style=flat&logoColor=white" />

  <img src="https://img.shields.io/badge/-RxJs-A5A5B0?style=flat&logoColor=white" />
   
  <img src="https://img.shields.io/badge/-TailwindCSS-A5A5B0?style=flat&logoColor=white" />
  
</p>


## :bar_chart: Projeto
Desenvolvido para um teste técnico, aplicação utilizando a API do GitHub onde é possível buscar por
usuários da plataforma, exibindo a lista com resultado paginado por meio de scroll infinito e
possibilidade de buscar um usuário específico.

## :books: Tecnologias e libs utilizadas  

- [Angular 17](https://blog.angular.io/introducing-angular-v17-4d7033312e4b)
- [NX](https://nx.dev/getting-started/tutorials/angular-standalone-tutorial)
- [RxJS](https://rxjs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Cypress](https://www.cypress.io/)

## :woman_technologist: API GitHub
https://docs.github.com/pt/rest/search#search-users

##  Implementações
  
  - [x] Lista dos usuários na tela inicial 
    - [x] Consumo da API do GitHub para obter os usuários
    - [x] Paginação utilizando infinite scroll
    - [x] Exibição das informação obtidas por meio da lista de usuários
         - [x] Imagem de avatar
         - [x] Nome de usuário
         - [x] Link de acesso rápido ao perfil 
  - [x] Busca de usuário
      - [x] Consumo da API do GitHub para obter um usuário específico
      - [x] Exibição das informação obtidas por meio da busca por um usuário
         - [x] Imagem de avatar
         - [x] Nome de usuário
         - [ ] Nome real do usuário
         - [x] Link de acesso rápido ao perfil
         - [x] Tratamento de exibição quando nenhum usuário é encontrado
  - [x] Tratamento de loading e errors  
 -  [x] Barra de busca, permitindo buscar pelo nome de usuário

## :computer: WEB
<h1>
    <img src="https://github.com/KRochaS/git-users/blob/master/.github/screenshot-01.png" height="400"/>
    <img src="https://github.com/KRochaS/git-users/blob/master/.github/screenshot-02.png" height="400"/>
    <img src="https://github.com/KRochaS/git-users/blob/master/.github/web.gif" height="400"/>
</h1>

## :iphone: Mobile
Desenvolvido utilizando TailwindCSS aplicando o conceito de Mobile First
<br />
 <img src="https://github.com/KRochaS/git-users/blob/master/.github/screenshot-03.png" width="290" >
  <img src="https://github.com/KRochaS/git-users/blob/master/.github/screenshot-04.png" width="350" >


## :test_tube: Testes Unitários e Testes E2E com Cypress
 <img src="https://github.com/KRochaS/git-users/blob/master/.github/cypress-01.PNG" height="400" >
 <img src="https://github.com/KRochaS/git-users/blob/master/.github/cypress-02.PNG" height="400" >
 <img src="https://github.com/KRochaS/git-users/blob/master/.github/cypress-03.PNG" height="400" >
 <img src="https://github.com/KRochaS/git-users/blob/master/.github/cypress.gif" height="400"/>

## :gear: Arquitetura com NX
Ferramenta que facilita o desenvolvimento de aplicações em monorepo, fornecendo funcionalidades adicionais e otimizações para o desenvolvimento em larga escala.
No contexto do projeto, uma biblioteca (lib) foi criada, chamada "shared-ui", que centraliza e disponibiliza todos os componentes compartilhados da aplicação.

###### Estrutura: 
 <img src="https://github.com/KRochaS/git-users/blob/master/.github/nx.png" height="400" >

###### Affected: Exibindo apenas o que houve modificação no build da aplicação
  <img src="https://github.com/KRochaS/git-users/blob/master/.github/nx-affected.png" height="400" >


## Como rodar o projeto
```bash
#  Clone o repositório.
$ git clone https://github.com/KRochaS/git-users.git

# Navigue até a pasta do projeto no termical/cmd.
$ cdgit-users/

# Instale as dependências.
$ npm i ou yarn install

# rode o projeto
$ npm run start

# http://localhost:4200

# Para rodar os testes 
$ npm test

# Para rodar os testes da lib
$ npm test shared-ui

# Para ver a cobertura de testes
$ npx nx test --code-coverage=true --skip-nx-cache

# Acessar na pasta
$ coverage/git-users/index.html
$ coverage/modules/shared/ui/index.html

# Para ver a estrutura do projeto no NX
$ npx nx graph

# Para ver a estrutura do projeto com informação do que foi afetado
$ npx nx graph:affected

# Rodar os testes no Cypress
$ npx cypress open
```
