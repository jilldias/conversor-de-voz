# 🔊 Conversor de Voz

<p align="center">
  Aplicação web para conversão de texto em fala (<i>Text-to-Speech</i>), desenvolvida com HTML5, CSS3 e JavaScript. Utiliza a plataforma Puter para integração com o serviço AWS Polly, permitindo gerar e reproduzir áudio a partir de textos fornecidos pelo usuário.
</p>

<p align="center">
  <a href="https://conversor-de-voz.vercel.app/">
    <img src="https://img.shields.io/badge/Acessar%20Aplicação-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Acessar aplicação">
  </a>
  <a href="https://github.com/jilldias/conversor-de-voz">
    <img src="https://img.shields.io/badge/Ver%20Repositório-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Repositório GitHub">
  </a>
</p>

---

## 📌 1. Apresentação

O **Conversor de Voz** é um projeto educacional desenvolvido com o objetivo de explorar os fundamentos da construção de aplicações web e a integração com serviços externos por meio de APIs.

A aplicação permite inserir um texto, selecionar uma voz em português brasileiro e gerar sua representação em áudio. Para isso, utiliza a plataforma Puter como camada de integração com serviços externos, acessando o mecanismo de síntese de voz AWS Polly.

O desenvolvimento também proporcionou a aplicação prática de conceitos relacionados à manipulação do DOM, programação assíncrona, tratamento de exceções, validação de entradas e publicação de aplicações web.

## 🎯 2. Objetivos educacionais

O projeto foi desenvolvido com os seguintes objetivos:

- **Integração com serviços externos:** compreender o processo de comunicação entre uma aplicação web e serviços disponibilizados por plataformas externas.
- **Fundamentos do desenvolvimento web:** aplicar HTML5, CSS3 e JavaScript na construção de uma aplicação funcional.
- **Programação assíncrona:** utilizar `async/await` para lidar com operações que dependem de respostas externas.
- **Manipulação do DOM:** trabalhar com elementos HTML, eventos e atualização dinâmica de conteúdo.
- **Consumo de APIs:** compreender o fluxo de solicitação, processamento e recebimento de dados de um serviço externo.
- **Publicação de aplicações:** praticar o processo de implantação de uma aplicação web utilizando a plataforma Vercel.

## ⚙️ 3. Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 📝 Entrada de texto | Permite inserir o conteúdo que será convertido em fala. |
| 🔢 Contagem de caracteres | Atualiza dinamicamente a quantidade de caracteres digitados. |
| 📏 Validação | Limita a entrada a 3.000 caracteres. |
| 🗣️ Seleção de voz | Consulta e disponibiliza vozes compatíveis com português brasileiro. |
| 🧠 Síntese neural | Seleciona o mecanismo Neural quando suportado, com alternativa ao Standard. |
| 🔊 Reprodução de áudio | Reproduz o áudio gerado pelo serviço de síntese. |
| ⚠️ Tratamento de erros | Apresenta mensagens de status durante as operações e em situações de falha. |

## 🛠️ 4. Tecnologias e recursos utilizados

### Linguagens e estrutura

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

### Integração e infraestrutura

<p>
  <img src="https://img.shields.io/badge/Puter.js-6C47FF?style=for-the-badge" alt="Puter.js">
  <img src="https://img.shields.io/badge/AWS%20Polly-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS Polly">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>

### 4.1 HTML5

Utilizado para estruturar os elementos da interface, incluindo os campos de entrada de texto, seleção de voz, botões e áreas destinadas à apresentação de informações ao usuário.

### 4.2 CSS3

Responsável pela apresentação visual da aplicação, organização dos componentes e definição dos estilos da interface.

### 4.3 JavaScript

Utilizado para implementar a lógica da aplicação, realizar a manipulação do DOM, controlar eventos, validar entradas e gerenciar operações assíncronas.

Entre os recursos aplicados, destacam-se:

- `addEventListener()`: registro e tratamento de eventos.
- `async/await`: gerenciamento de operações assíncronas.
- `try/catch/finally`: tratamento de exceções e execução de procedimentos de finalização.
- `Array.filter()` e `Array.find()`: filtragem e localização de vozes.
- `replaceChildren()`: atualização dinâmica dos elementos da interface.

### 4.4 Puter Platform e Puter.js

A aplicação utiliza a plataforma Puter como camada de integração com serviços externos. A comunicação é realizada por meio da interface JavaScript disponibilizada pela plataforma, conhecida como Puter.js.

Nesse projeto, a integração permite consultar as vozes disponíveis e solicitar a conversão de texto em fala utilizando o provedor AWS Polly.

| Método | Responsabilidade |
|---|---|
| `puter.ai.txt2speech.listVoices()` | Consulta as vozes disponíveis para o provedor selecionado. |
| `puter.ai.txt2speech()` | Solicita a síntese de voz a partir do texto informado. |

A integração também contempla a autenticação necessária para utilização da plataforma.

### 4.5 AWS Polly

O **Amazon Polly** é o serviço de síntese de fala utilizado pela aplicação. Ele converte o conteúdo textual em áudio por meio de tecnologias de processamento de linguagem e geração de voz.

A aplicação utiliza vozes compatíveis com o idioma português brasileiro (`pt-BR`) e seleciona o mecanismo de síntese neural quando suportado pela voz escolhida.

📚 **Documentação oficial:** https://docs.aws.amazon.com/polly/

### 4.6 Vercel

A Vercel é utilizada para a publicação e hospedagem da aplicação web, permitindo seu acesso por meio de uma URL pública.

🌐 **Aplicação publicada:** https://conversor-de-voz.vercel.app/

## 🔄 5. Fluxo de funcionamento

O funcionamento da aplicação pode ser compreendido a partir das seguintes etapas:

```text
          ┌──────────────────────┐
          │ Inicialização da Web │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │ Integração com Puter │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │ Consulta de vozes    │
          │ disponíveis no Polly│
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │ Entrada e validação  │
          │ do texto pelo usuário│
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │ Seleção da voz e do  │
          │ mecanismo de síntese │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │ Solicitação de       │
          │ síntese ao AWS Polly │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │ Reprodução do áudio  │
          └──────────────────────┘
```

## 🧩 6. Conceitos de programação aplicados

O desenvolvimento permitiu trabalhar conceitos fundamentais da programação e do desenvolvimento de aplicações web.

- **Manipulação do DOM:** acesso e modificação de elementos HTML por meio de JavaScript, possibilitando a atualização dinâmica da interface.
- **Programação orientada a eventos:** utilização de eventos como `input` e `click` para responder às interações do usuário.
- **Programação assíncrona:** utilização de funções assíncronas para aguardar operações externas sem interromper o fluxo principal da aplicação.
- **Validação de dados:** verificação das informações fornecidas pelo usuário antes da execução das operações.
- **Tratamento de exceções:** utilização de estruturas de controle para identificar e tratar falhas durante a comunicação com os serviços externos.
- **Integração de serviços:** utilização de uma plataforma intermediária para acessar um serviço externo de síntese de voz.

## 🚀 7. Acesso e utilização

A aplicação está publicada e pode ser acessada diretamente pelo navegador.

<p align="center">
  <a href="https://conversor-de-voz.vercel.app/">
    <img src="https://img.shields.io/badge/ABRIR%20APLICAÇÃO-2563EB?style=for-the-badge&logo=vercel&logoColor=white" alt="Abrir aplicação">
  </a>
</p>

Para utilizar:

1. Acesse a aplicação.
2. Realize a autenticação solicitada pela plataforma Puter.
3. Insira o texto que deseja converter.
4. Selecione uma das vozes disponíveis em português brasileiro.
5. Acione o botão de conversão.
6. Aguarde a geração e a reprodução do áudio.

Não é necessário instalar dependências ou configurar um ambiente de desenvolvimento para utilizar a versão publicada.

## 🤝 8. Projeto educacional e Open Source

Este repositório possui finalidade educacional e está aberto à colaboração da comunidade.

O código-fonte está disponível publicamente no GitHub, permitindo que estudantes e desenvolvedores analisem sua implementação, estudem os conceitos utilizados e proponham melhorias.

Contribuições são bem-vindas, especialmente aquelas relacionadas à organização do código, acessibilidade, usabilidade, tratamento de erros e aprimoramento das funcionalidades.

### 8.1 Como contribuir

Para contribuir com o projeto:

1. Acesse o repositório no GitHub.
2. Realize um **Fork** do projeto.
3. Clone o repositório para seu ambiente local.
4. Crie uma branch para suas alterações.
5. Implemente as modificações desejadas.
6. Envie suas alterações para o seu Fork.
7. Abra um **Pull Request** para apresentar sua contribuição.

**Clonagem do repositório:**

```bash
git clone https://github.com/SEU-USUARIO/conversor-de-voz.git
```

**Criação de uma branch:**

```bash
git checkout -b minha-contribuicao
```

Após implementar e testar as alterações, envie-as ao seu repositório e abra um Pull Request.

## 📚 9. Referências e documentação

- [Puter — Documentação oficial](https://docs.puter.com/)
- [Puter — Text-to-Speech](https://docs.puter.com/AI/ai-voice/)
- [Amazon Polly — Documentação oficial](https://docs.aws.amazon.com/polly/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [MDN Web Docs — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Vercel — Documentação oficial](https://vercel.com/docs)

## 📄 10. Considerações finais

O Conversor de Voz foi desenvolvido como exercício prático de integração entre tecnologias de desenvolvimento web e serviços externos.

Além de consolidar conhecimentos de HTML5, CSS3 e JavaScript, o projeto possibilitou explorar a utilização de plataformas de integração, serviços de inteligência artificial aplicados à síntese de voz e processos de publicação de aplicações web.

---

<p align="center">
  Desenvolvido por <a href="https://github.com/jilldias"><strong>Jill Dias</strong></a>
  <br>
