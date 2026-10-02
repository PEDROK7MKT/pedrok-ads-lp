# Landing page — Pedro R Gomes

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
Ficam em `assets/logos/` como WebP **azul-marinho (#0A0F2C), fundo transparente, 2x** — todos na
mesma cor para não brigar com o site. Marcas sem arquivo aparecem como texto (`pk-logo-word`).
Para adicionar/trocar: gere o arquivo nesse padrão e, no `index.html` (bloco `pk-logos`), use
`<li class="pk-logo"><img src="assets/logos/marca.webp" alt="Marca" width="L" height="A" class="pk-logo-img"></li>`
— nos **dois** grupos (o segundo é a cópia que faz o loop infinito; lá o `alt` fica vazio).

## Imagens
Use **WebP** no tamanho em que a imagem aparece (os personagens 3D estão em 512px, ~25KB cada).
PNG de 1024–1536px pesava ~1,4MB cada e deixava o site lento.
