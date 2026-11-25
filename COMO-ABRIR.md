# Como abrir o site Órbita

## Importante

**Não abra o arquivo `index.html` direto no navegador** (duplo clique).
Esse projeto usa React + Vite e precisa de um servidor local.

---

## Opção 1 — Duplo clique (mais fácil no Mac)

1. Abra a pasta `orbita-site` no Finder
2. Dê **duplo clique** em **`abrir.command`**
3. Se o Mac pedir permissão: clique com botão direito → **Abrir**
4. O terminal abre e o navegador carrega **http://localhost:5173**

---

## Opção 2 — Terminal

```bash
cd ~/Documents/orbita-site
npm install    # só na primeira vez
npm run dev
```

O navegador abre sozinho. Se não abrir, acesse manualmente:

**http://localhost:5173**

---

## Opção 3 — Cursor / VS Code

1. **File → Open Folder** → selecione `orbita-site`
2. Abra o terminal: **Terminal → New Terminal**
3. Digite: `npm run dev`
4. Clique no link `http://localhost:5173` que aparece no terminal

Ou use **Run and Debug** (F5) com a configuração "Abrir site Órbita no navegador".

---

## Se não funcionar

| Problema | Solução |
|----------|---------|
| `command not found: npm` | Instale Node.js: https://nodejs.org |
| Porta em uso | Feche outros servidores ou use `npm run dev -- --port 3000` |
| Página em branco | Use `http://localhost:5173`, não `file://` |
| Erro ao instalar | Rode `cd ~/Documents/orbita-site && rm -rf node_modules && npm install` |

---

## Versão estática (sem servidor de desenvolvimento)

```bash
npm run build
npm run preview
```

Abre em **http://localhost:4173**
