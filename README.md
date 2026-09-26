# Landing page — Pedro H Rodrigues

Site estático (tráfego, IA e automação + portfólio de identidade visual e sites).
100% autossuficiente: fontes, libs e mídias vêm do próprio repositório.

## Rodar localmente
Precisa ser servido por **HTTP** (abrir via `file://` desliga as animações):

```bash
npx serve .
```

## Deploy (Vercel)
É um site **estático, sem build**:

- Framework Preset: **Other**
- Build Command: *(vazio)*
- Output Directory: **`.`** (raiz)

Publica igual em Netlify / Cloudflare Pages / GitHub Pages. Domínio próprio pelas configurações do host.

## Logos (faixa rolando no topo)
Hoje os nomes aparecem como texto. Para trocar por logo:
1. Coloque o arquivo em `assets/logos/` (SVG ou PNG/WebP transparente, ~2x a altura final de 32px).
2. No `index.html`, procure o nome (ex.: `Valora`) dentro de `pk-logos` e troque o
   `<span class="pk-logo-word">Valora</span>` por
   `<img src="assets/logos/valora.svg" alt="Valora" class="pk-logo-img" width="120" height="32">`
   — nos **dois** grupos (o segundo é a cópia que faz o loop infinito).

## Imagens
Use **WebP** no tamanho em que a imagem aparece (os personagens 3D estão em 512px, ~25KB cada).
PNG de 1024–1536px pesava ~1,4MB cada e deixava o site lento.
