#!/bin/bash
cd "$(dirname "$0")"
echo "=========================================="
echo "  Órbita — iniciando servidor local"
echo "=========================================="
if ! command -v node &>/dev/null; then
  echo "ERRO: Node.js não está instalado."
  echo "Instale em: https://nodejs.org"
  read -p "Pressione Enter para fechar..."
  exit 1
fi
if [ ! -d "node_modules" ]; then
  echo "Instalando dependências (primeira vez)..."
  npm install
fi
echo ""
echo "O navegador vai abrir em http://localhost:5173"
echo "Para parar o servidor: feche esta janela ou Ctrl+C"
echo ""
npm run dev
read -p "Pressione Enter para fechar..."
