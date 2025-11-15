# Bootcamp II - Entrega Final (PWA + API + Containers + CI/CD)

Este projeto é a entrega final do Bootcamp, que consiste em uma aplicação PWA (Progressive Web App) completa, conectada a um backend (API), totalmente containerizada com Docker e com um pipeline de Integração Contínua (CI/CD) no GitHub Actions.

**Link do PWA (GitHub Pages):** `Link: https://eduardoferreira7351.github.io/Bootcamp-Entrega-Final/`
**Link do Vídeo/GIF (3 min):** `[URL-DO-VIDEO-OU-GIF-AQUI]`

---

## 🚀 Tecnologias Utilizadas

* **Frontend (PWA):** Vite (ou React/Vue/Svelte), PWA (Manifest + Service Worker)
* **Backend (API):** Node.js, Express
* **Testes:** Vitest (Unitários), Playwright (E2E)
* **Infraestrutura:** Docker, Docker Compose
* **CI/CD:** GitHub Actions

---

## 🏗️ Organização das Pastas (Monorepo)

O projeto está organizado em um formato monorepo, com duas aplicações principais dentro da pasta `apps`:

* `apps/web`: Contém todo o código do frontend PWA.
* `apps/api`: Contém todo o código do backend (API).

Arquivos de configuração global (como `.github/workflows`, `docker-compose.yml`) ficam na raiz.

---

## 🏃 Como Rodar o Projeto Localmente

Para executar o projeto completo (PWA e API) localmente, você precisa ter o **Docker** e o **Docker Compose** instalados.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/](https://github.com/)[SEU-USUARIO]/[NOME-DO-REPOSITORIO].git
    cd [NOME-DO-REPOSITORIO]
    ```

2.  Suba os containers:
    ```bash
    docker compose up --build
    ```

3.  Acesse as aplicações:
    * **Frontend (PWA):** [http://localhost](http://localhost) (ou a porta que você definiu no `docker-compose.yml`, ex: 80)
    * **Backend (API):** [http://localhost:3000](http://localhost:3000) (ou a porta definida, ex: 3000)

---

## 🛠️ Diretrizes do Projeto

### Convenções de Commit

Este projeto utiliza **Conventional Commits** para manter o histórico do Git limpo e organizado. Exemplos:

* `feat:` (nova funcionalidade)
* `fix:` (correção de bug)
* `docs:` (mudanças na documentação)
* `style:` (formatação de código)
* `refactor:` (refatoração sem mudança de funcionalidade)
* `test:` (adição ou correção de testes)
* `chore:` (tarefas de build, scripts, etc.)

### Acessibilidade (A11y)

O PWA foi desenvolvido seguindo práticas básicas de acessibilidade:
* Uso de HTML semântico (tags `<nav>`, `<main>`, `<button>`).
* Atributos `alt` em todas as imagens.
* Contraste de cores adequado (verificado via Lighthouse).
