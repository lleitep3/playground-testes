Um pouco sobre testes
===

## Objetivo
Ao final dessa aula você terá uma noção inicial sobre testes automatizados e sua importancia, também saberá como configurar um ambiente de testes e iniciar testes em uma aplicação typescript com express.

## Agenda
 - [Testes: para que, por que e como?.](#testes-para-que-por-que-e-como)
 - [Tipos de testes.](#tipos-de-testes)
 - [Você faz/utiliza TDD?](#você-fazutiliza-tdd)
 - [Bibliotecas de teste `Jest` e `supertest`.](#bibliotecas-de-teste-jest-e-supertest)
 - [Métricas de teste](#metricas-de-cobertura-de-codigo)

-------------------------------------------------------
### Testes: para que, por que e como?
  - Aplicação legada?
  - Testes automatizados ajudam a garantir a consistência das entregas.
  - Trás segurança para o dia-dia dos desenvolvedores.
  - Ajuda a entender o software.
  - Melhora a qualidade da codificação.

#### Referências
  - [Como seguir a pirâmide de testes](https://dev.to/gpiress/como-seguir-a-piramide-de-testes-a94)

-------------------------------------------------------
### Tipos de testes

  - **End-to-End (Testes de ponta-a-ponta):** *Muitas vezes chamado de `BDD`, os testes `E2E` tem como finalidade reproduzir comportamentos da aplicação.*

  - **Integration (Testes de integração):** *Tem como finalidade validar se seus componentes estão funcionando corretamente quando combinados.*

  - **Unity teste (Testes de unidade):** *Também chamados de `testes unitários`, eles tem como foco garantir que suas funções estão funcionando como o esperado.*

-------------------------------------------------------
### Você faz/utiliza TDD?

**TDD NÃO é um framework**, é uma estratégia de codificação. Como o próprio nome já diz (Test Driven Development) é desenvolvimento orientado por testes.

  - Entenda qual e a tarefa que você precisa fazer;
  - Entenda o fluxo que deve acontecer quando você terminar seu código;
  - Faça o teste que garanta que seu código faz o que se propõem;
  - Depois começe a codigicar sua feature;
  - caso sinta a necessidade de um novo componente, uma nova função;
    - Faça um teste para validar a função que você visualiza;
    - Depois codifique a função;

#### Referências:
- [Quando usar TDD](https://dev.to/gpiress/quando-usar-tdd-1c18)

-------------------------------------------------------
### Bibliotecas de teste `Jest` e `supertest`.

##### Instalando libs necessárias para o desenvolvimento:

Instalando o `jest`:
```shell
$ npm install --save-dev jest ts-jest @types/jest
```

Instalando o `supertest`:
```shell
$ npm i --save-dev supertest @types/supertest
```

##### Configurando seu ambiente de desenvolvimento:

inicialicando o jest:
```shell
$ npx jest --init
```
Abra o arquivo `jest.config` que foi criado.

Encontre a propriedade `preset` configure ela como: `preset: 'ts-jest'` (para que a lib `ts-jest` transpile o typescript quando rodar os testes).

Crie a pasta de testes:
```shell
$ mkdir test
```

Adicione o script que rodará nossos testes no `package.json`.
```json
  ...
  "scripts": {
    "test": "jest"
  }
  ...
```

#### Referências:
  - [Jest](https://github.com/facebook/jest#table-of-contents)
  - [Documentação Jest](https://jestjs.io/docs/pt-BR/getting-started)
  - [Supertest](https://github.com/visionmedia/supertest)

-------------------------------------------------------
### Métricas de cobertura de código

Medem por onde seus testes passaram em seu código.

  - **Lines** - *Percentual de linhas cobertas*
  - **Functions** - *Percentual de funções cobertas*
  - **Branches** - *Percentual de condições que foram cobertas nos seus testes*
  - **Statements** - *Percentual de senários cobertos*

#### Referências:
  - [Jest configurando coveragethreshold](https://jestjs.io/docs/en/configuration#coveragethreshold-object)
  - [Code Coverage](https://www.guru99.com/code-coverage.html)

-------------------------------------------------------
### Vamos Falar sobre extremismo

  - Código legado
  - Relevancia questionável do coverage
  - Quando usar TDD
  - Cultura de testes

-------------------------------------------------------
### Tips to Deep

 - [TestPyramid](https://martinfowler.com/bliki/TestPyramid.html)
 - [Como saber o que testar](https://segredo.dev/como-saber-o-que-testar/)
 - [Guia rápido de testes no front-end](https://dev.to/thayseonofrio/guia-rapido-de-testes-no-front-end-2lpc)
 - [Code Coverage e a ilusão de qualidade](https://robsoncastilho.com.br/2020/07/14/code-coverage-e-a-ilusao-de-qualidade/)
 - [6 características fundamentais de um teste bem escrito](https://robsoncastilho.com.br/2019/04/20/6-caracteristicas-fundamentais-de-um-teste-bem-escrito/)

#### Livros
 - [XUnit Test Patterns: Refactoring Test Code](https://www.google.com/search?q=xUnit+Test+Patterns%3A+Refactoring+Test+Code)
 - [Test-Driven Development](https://www.casadocodigo.com.br/products/livro-tdd)

