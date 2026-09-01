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
