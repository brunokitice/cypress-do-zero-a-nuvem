# 🌲 Cypress – Do Zero à Nuvem ☁️

## 👋 Olá!

- Este repositório é resultado do curso **Cypress, do Zero à Nuvem**, oferecido pela **Escola Talking About Testing**. Durante esse percurso, tive a oportunidade de explorar a fundo o Cypress, uma das ferramentas mais populares para automação de testes end-to-end em aplicações web.

## O que eu aprendi?

✅ Como configurar um projeto Cypress do zero, incluindo a estrutura ideal de pastas e arquivos.  
✅ Como visitar páginas locais e remotas, entendendo os comandos fundamentais para navegação e validação.  
✅ Como interagir com os elementos mais comuns de uma aplicação, como inputs, botões, selects, checkboxes, etc.  
✅ Como realizar upload de arquivos nos testes automatizados.  
✅ Como verificar resultados esperados, tanto na interface quanto em requisições e respostas de APIs.  
✅ Como criar comandos customizados para tornar os testes mais limpos, reutilizáveis e organizados.  
✅ Como lidar com links que abrem em novas abas, evitando que isso quebre o fluxo dos testes.   
✅ Como simular diferentes tamanhos de tela, testando o comportamento responsivo da aplicação.  
✅ Como resolver problemas de diferentes formas, explorando os recursos e possibilidades da [API do Cypress](https://docs.cypress.io/api/table-of-contents).  
✅ Como documentar minimamente um projeto de testes para facilitar a colaboração.  
✅ Como executar os testes em um workflow de integração contínua, garantindo que tudo seja validado a cada nova mudança.  
✅ Como integrar esse workflow com o **Cypress Cloud**, aproveitando recursos avançados como histórico de execuções, vídeos e relatórios na nuvem.

---

## 🛠️ Pré-requisitos

Para clonar e executar este projeto, é necessário ter as seguintes ferramentas instaladas em sua máquina:

- **Git** – Versão utilizada: `2.47.0.windows.2`  
- **Node.js** – Versão utilizada: `22.11.0`  
- **npm** – Versão utilizada: `10.9.0`  

> Recomenda-se utilizar as mesmas versões ou, preferencialmente, versões LTS mais recentes.


## ⚙️ Instalação

Instale as dependências do projeto:
```bash
npm install
```
> Você também pode usar `npm i` como forma abreviada.

## 🧪 Testes

Neste projeto, você pode rodar os testes simulando uma viewport de **desktop** ou de **dispositivo móvel**.

### 💻 Desktop

Rode o comando abaixo para executar os testes em **modo headless** (sem interface gráfica):

```bash
npm test
```
ou
```bash
npm t
```

Se quiser abrir o app do Cypress com interface visual, use:

```bash
npm run cy:open
```

### 📱 Mobile

Para rodar os testes em **modo headless**, simulando um dispositivo móvel:

```bash
npm run cy:headless:mobile
```

Se quiser ver os testes rolando com interface:

```bash
npm run cy:open:mobile
```

---

## 🌟 Apoie este projeto

Se curtiu o projeto, deixa uma ⭐ aqui no repositório. Ajuda demais!
___

📚 Curso: Cypress – Do Zero à Nuvem    
