# Órbita — Site

Site institucional da Órbita (Operational Intelligence Platform).  
React + Vite + Tailwind CSS + Three.js.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em **http://localhost:5173**

Guia detalhado: [COMO-ABRIR.md](./COMO-ABRIR.md)

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build para Vercel/Netlify (`base: /`) |
| `npm run build:pages` | Build para GitHub Pages (`base: /orbita-site/`) |
| `npm run preview` | Preview do build local |

## Publicar no GitHub

### 1. Criar repositório

1. Crie um repo em [github.com/new](https://github.com/new) chamado **`orbita-site`** (ou outro nome)
2. **Não** marque “Add a README” (já existe aqui)

Se usar **outro nome** de repositório, edite em `vite.config.js`:

```js
const githubPagesBase = process.env.GITHUB_PAGES_BASE || '/SEU-REPO/';
```

### 2. Enviar o código

```bash
cd ~/Documents/orbita-site
git init
git add .
git commit -m "Site Órbita — deploy GitHub Pages"
git remote add origin https://github.com/SEU_USUARIO/orbita-site.git
git branch -M main
git push -u origin main
```

### 3. Ativar GitHub Pages

1. No GitHub: **Settings → Pages**
2. **Build and deployment → Source:** **GitHub Actions**
3. Após o workflow rodar, o site fica em:

   **https://SEU_USUARIO.github.io/orbita-site/**

O deploy roda automaticamente a cada push na branch `main`.

## Deploy alternativo (Vercel / Netlify)

Conecte o repositório e use:

- **Build command:** `npm run build`
- **Output directory:** `dist`

Não precisa de `base` customizado — o `npm run build` usa `base: /`.

## Estrutura

```
src/
├── components/orbita/   # Seções e layout
├── pages/               # Home, Product, About, Demo, Contact
├── App.jsx
├── main.jsx
└── index.css
```

## Rotas

| Rota | Página |
|------|--------|
| `/` | Home |
| `/product` | WorkforceOS |
| `/about` | Sobre |
| `/demo` | Request Demo |
| `/contact` | Contato |
