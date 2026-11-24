
# 🔊 Conversor de Voz

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Web API](https://img.shields.io/badge/Web%20Speech%20API-Native-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)

**Uma aplicação de conversão de texto em fala utilizando tecnologias nativas do navegador.**

Transforme textos em áudio explorando os recursos de síntese de voz da Web Speech API, sem bibliotecas ou dependências externas.

</div>

---

## 📌 Sobre o projeto

<div align="justify">

O **Conversor de Voz** é uma aplicação desenvolvida para transformar textos digitados pelo usuário em fala, utilizando JavaScript puro (Vanilla JavaScript) e a Web Speech API.

A aplicação utiliza os recursos nativos de síntese de voz do navegador (*Text-to-Speech*), permitindo acessar e selecionar diferentes vozes disponibilizadas pelo ambiente de execução.

O projeto foi desenvolvido como exercício prático de programação, explorando conceitos de lógica de programação, manipulação do DOM, tratamento de eventos, interação com elementos HTML e integração com APIs nativas do navegador.

Uma das principais características da implementação é a ausência de dependências externas, demonstrando como recursos já disponíveis nos navegadores modernos podem ser utilizados para desenvolver aplicações interativas.

</div>

## 🎯 Objetivos

- Praticar lógica de programação utilizando JavaScript.
- Explorar a manipulação dinâmica do DOM.
- Compreender o funcionamento de eventos e interações do usuário.
- Implementar funcionalidades utilizando APIs nativas do navegador.
- Explorar os recursos de síntese de voz da Web Speech API.
- Trabalhar com dados dinâmicos e opções de seleção.
- Compreender a integração entre JavaScript e interfaces nativas da plataforma Web.

## ⚙️ Funcionalidades

- **Conversão de texto em fala:** transforma o conteúdo digitado pelo usuário em áudio.
- **Seleção de vozes:** permite utilizar as vozes disponibilizadas pelo navegador.
- **Carregamento dinâmico:** identifica as vozes disponíveis durante a execução.
- **Interação com o usuário:** captura e processa os dados informados na interface.
- **Manipulação dinâmica da interface:** atualização dos elementos HTML conforme as opções disponíveis.

## 🛠️ Tecnologias e recursos utilizados

<div align="justify">

Este projeto foi desenvolvido utilizando exclusivamente recursos nativos do navegador, sem dependências externas, bibliotecas ou frameworks. A implementação utiliza JavaScript puro (*Vanilla JavaScript*), explorando APIs nativas para manipulação da interface, interação com o usuário e síntese de voz.

</div>

### JavaScript (Vanilla)

- Implementação da lógica principal da aplicação.
- Manipulação de eventos utilizando `addEventListener`.
- Interação dinâmica com elementos da página.
- Processamento das informações fornecidas pelo usuário.

### DOM API (Document Object Model)

- Seleção e manipulação de elementos HTML por meio de `document.querySelector()` e `document.getElementById()`.
- Atualização dinâmica das opções de elementos `<select>`.
- Captura e processamento de entradas do usuário.
- Manipulação da estrutura e do conteúdo da página em tempo de execução.

### Web Speech API — SpeechSynthesis

<div align="justify">

Utilização da API nativa de síntese de voz do navegador para implementar funcionalidades de conversão de texto em fala (*Text-to-Speech*).

</div>

Principais recursos utilizados:

| Recurso | Finalidade |
|---|---|
| `SpeechSynthesisUtterance` | Criação e configuração das mensagens que serão convertidas em fala. |
| `speechSynthesis.getVoices()` | Obtenção das vozes disponíveis no navegador. |
| `onvoiceschanged` | Detecção do carregamento e da disponibilização das vozes. |
| `speechSynthesis.speak()` | Execução da síntese de voz. |

## 🧠 Conceitos de programação aplicados

<div align="justify">

O desenvolvimento da aplicação foi utilizado como exercício de aplicação prática de lógica de programação, transformando conceitos teóricos em funcionalidades interativas.

A implementação também permite compreender como o JavaScript pode interagir com interfaces nativas do navegador, processar informações fornecidas pelo usuário e controlar recursos de síntese de voz.

</div>

Entre os principais conceitos trabalhados:

- Variáveis e tipos de dados.
- Operadores e estruturas condicionais.
- Funções e organização de código.
- Manipulação do DOM.
- Seleção de elementos HTML.
- Manipulação de eventos.
- Programação orientada a eventos.
- Manipulação de dados e elementos dinâmicos.
- Integração com APIs nativas.
- Processamento assíncrono de recursos do navegador.

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/jilldias/conversor-de-voz.git
```

### 2. Acesse o diretório

```bash
cd conversor-de-voz
```

### 3. Execute a aplicação

Abra o arquivo `index.html` diretamente em um navegador compatível com a Web Speech API.

Não é necessário instalar dependências, configurar um servidor Back-End ou executar comandos de build.

Alternativamente, você pode utilizar a extensão **Live Server** no Visual Studio Code para executar o projeto em um servidor local.

**Observação:** a disponibilidade das vozes depende do navegador e do sistema operacional. Alguns navegadores carregam as vozes de forma assíncrona, sendo necessário aguardar o evento `onvoiceschanged`.

## 💡 Possibilidades de evolução

Algumas funcionalidades que podem ser exploradas em versões futuras:

- [ ] Controle de velocidade da fala (*rate*).
- [ ] Ajuste de tonalidade (*pitch*).
- [ ] Controle de volume.
- [ ] Botão para pausar e retomar a reprodução.
- [ ] Botão para interromper a síntese de voz.
- [ ] Filtros de idioma e seleção de vozes.
- [ ] Interface responsiva para dispositivos móveis.
- [ ] Histórico de textos utilizados.
- [ ] Melhorias de acessibilidade.

## 🤝 Como contribuir

<div align="justify">

Contribuições são bem-vindas! O projeto está aberto a melhorias, correções, otimizações e novas funcionalidades.

Para contribuir, utilize o fluxo de trabalho baseado em Fork e Pull Request, permitindo que as alterações sejam analisadas antes de serem incorporadas ao repositório original.

</div>

### 1. Faça um Fork

Acesse o repositório original no GitHub e clique em **Fork** para criar uma cópia em sua conta.

### 2. Clone seu Fork

```bash
git clone https://github.com/SEU-USUARIO/conversor-de-voz.git
```

Acesse o diretório:

```bash
cd conversor-de-voz
```

### 3. Configure o repositório original

Adicione o repositório original como remoto `upstream`:

```bash
git remote add upstream https://github.com/jilldias/conversor-de-voz.git
```

Verifique os repositórios remotos:

```bash
git remote -v
```

### 4. Crie uma Branch

Crie uma branch específica para sua contribuição:

```bash
git checkout -b feature/nova-funcionalidade
```

Sugestões de nomenclatura:

| Prefixo | Finalidade |
|---|---|
| `feature/` | Novas funcionalidades |
| `fix/` | Correções de erros |
| `style/` | Melhorias visuais |
| `refactor/` | Refatoração do código |
| `docs/` | Documentação |

### 5. Realize suas alterações

Implemente as modificações desejadas, mantendo a organização do código e a compatibilidade com os navegadores modernos.

### 6. Registre suas alterações

Adicione os arquivos modificados:

```bash
git add .
```

Registre suas alterações:

```bash
git commit -m "feat: improve speech synthesis"
```

### 7. Envie sua Branch

```bash
git push origin feature/nova-funcionalidade
```

### 8. Abra um Pull Request

Acesse seu Fork no GitHub e selecione **Compare & pull request**.

Configure o Pull Request da seguinte maneira:

- **Base repository:** `jilldias/conversor-de-voz`
- **Base branch:** `main`
- **Head repository:** seu Fork
- **Compare branch:** sua branch de contribuição.

Descreva as alterações realizadas, explique sua finalidade e, quando possível, inclua capturas de tela das melhorias visuais.

Clique em **Create pull request** para enviar sua contribuição.

### 🔄 Mantendo seu Fork atualizado

Antes de iniciar novas contribuições, sincronize seu Fork com o repositório original:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

Esse procedimento atualiza sua branch local com as alterações mais recentes do projeto original e sincroniza seu Fork no GitHub.

## 📄 Licença

Consulte o repositório para verificar os termos de utilização e distribuição do projeto. Caso deseje permitir a reutilização e modificação do código, considere adicionar uma licença de código aberto, como a MIT License.

---

<div align="center">

**Explorando as possibilidades do JavaScript e das APIs nativas do navegador.**

</div>
