# Subir esta pasta no GitHub (upload)

Esta pasta está **pronta para upload** — sem `node_modules`, sem `dist` (~228 KB).

## Passo a passo

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: **`orbita-site`** (recomendado)
3. Deixe **Public** ou **Private**, como preferir
4. **Não** marque "Add a README"
5. Clique em **Create repository**
6. Na página do repo vazio, clique em **"uploading an existing file"** (ou **Add file → Upload files**)
7. **Arraste toda a pasta** `orbita-site-upload` ou selecione **todos os arquivos e pastas** dentro dela:
   - `.github/`
   - `public/`
   - `src/`
   - `index.html`, `package.json`, etc.
8. Commit: mensagem `Site Órbita` → **Commit changes**

## Ativar o site online

1. **Settings → Pages**
2. **Source:** **GitHub Actions**
3. Aba **Actions** → aguarde o workflow "Deploy to GitHub Pages" terminar (verde)
4. Site em: **https://SEU_USUARIO.github.io/orbita-site/**

## Se o repositório tiver outro nome

Edite `vite.config.js`, linha do `githubPagesBase`:

```js
const githubPagesBase = process.env.GITHUB_PAGES_BASE || '/SEU-REPO/';
```

## O que NÃO enviar

| Pasta/arquivo | Motivo |
|---------------|--------|
| `node_modules/` | Muito pesado; o GitHub instala no deploy |
| `dist/` | Gerado automaticamente no deploy |

## Depois do upload

O GitHub Actions roda `npm install` e `npm run build:pages` sozinho. Você não precisa subir build pronto.
