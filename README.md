# Stopa Design — Site

Site institucional OnePage da **Stopa Design** (marcenaria de alto padrão / móveis planejados sob medida).

## Stack
- **React 18** + **Vite**
- **React Router** (home + Política de Privacidade + Termos de Uso)
- CSS próprio · fontes Playfair Display + Inter
- Deploy: **Docker (nginx)** no EasyPanel

## Desenvolvimento
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

## Deploy (EasyPanel)
O `Dockerfile` faz build multi-stage (Node → nginx) e serve o `dist/` com fallback de SPA (`nginx.conf`).
Cada push na branch `main` redeploya automaticamente.

## A substituir antes de divulgar
- Número do WhatsApp `55XXXXXXXXXXX` (Home.jsx — 3 ocorrências)
- CNPJ `00.000.000/0001-00` (Home.jsx)
- E-mail de contato, se diferente de `contato@stopadesign.com.br`

---
Desenvolvido por OutBox Group.
