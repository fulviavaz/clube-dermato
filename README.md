# Club Dermato Care — Landing (Next.js + Tailwind)

## Como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode em desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra http://localhost:3000

## Cores
- Roxo escuro: `#620b68`
- Lilás: `#f0d9f5`

## Logo
O arquivo do logo está em `public/logo-club-dermato-care.png` e é utilizado na Home (`app/page.tsx`).

## Estrutura
- `app/layout.tsx` — layout base e `<body>`
- `app/page.tsx` — página única com logo centralizado e rodapé com as informações fornecidas
- `styles/globals.css` — Tailwind + estilos globais
- `tailwind.config.js` — define as cores `primary` e `lilac`


## Paleta padrão
- #620b68
- #c891d1
- #f5eff5

## Fonte
- Roboto (via next/font)
