# Gabriel Oliveira Portfolio

Portfolio estático para Gabriel Oliveira, Backend Developer Java, com posicionamento para vagas Backend Java Pleno em empresas de ERP, fiscal/contábil, fintechs e sistemas distribuídos.

O conteúdo destaca experiência com Java, Spring Boot, APIs REST, SQL, JPA/Hibernate, mensageria, integrações fiscais, regras financeiras, Docker, GCP e observabilidade.

## Stack usada

- React
- TypeScript
- Vite
- CSS puro
- Sem backend
- Sem dependências visuais pesadas

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá a URL local no terminal. Normalmente:

```bash
http://localhost:5173
```

## Como gerar build

```bash
npm run build
```

O build final será gerado em `dist/`.

## Como gerar o PDF profissional

O projeto inclui uma versão PDF em HTML/CSS de impressão:

- Fonte: `pdf/gabriel-oliveira-backend-java.html`
- Script de exportação: `scripts/export-pdf.ps1`
- Saída padrão: `output/Gabriel-Oliveira-Backend-Java-Portfolio.pdf`

No PowerShell, rode:

```powershell
.\scripts\export-pdf.ps1
```

O script usa Chrome ou Edge em modo headless e imprime com background, layout A4 e três páginas.

## Deploy na Vercel

1. Publique este projeto em um repositório GitHub.
2. Importe o repositório na Vercel.
3. Use as configurações padrão de um projeto Vite:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Faça o deploy.

## Deploy no GitHub Pages

O `vite.config.ts` já está configurado com:

```ts
base: '/portfolio/'
```

Isso prepara o build para o repositório `Dolanss/portfolio`, publicado em:

```text
https://dolanss.github.io/portfolio/
```

Para publicar manualmente:

```bash
npm install
npm run build
```

Depois publique o conteúdo de `dist/` no GitHub Pages, usando GitHub Actions, branch `gh-pages` ou a opção de Pages configurada no repositório.

## Estrutura de pastas

```text
src/
  assets/
    backend-systems-hero.png
  components/
    About.tsx
    ArchitectureDiagram.tsx
    ArchitectureSnapshots.tsx
    BackendTeams.tsx
    Contact.tsx
    EngineeringMindset.tsx
    EngineeringFocus.tsx
    ExperienceHighlights.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    OpenSource.tsx
    OperationalSignals.tsx
    ProductionConcerns.tsx
    ProjectCard.tsx
    Projects.tsx
    TechStack.tsx
  data/
    projects.ts
  App.tsx
  main.tsx
  styles.css
pdf/
  gabriel-oliveira-backend-java.html
scripts/
  export-pdf.ps1
```

## Onde editar conteúdo

- Projetos, links, stack, foco de engenharia e bullets principais: `src/data/projects.ts`
- Layout das seções: `src/components/`
- Estilos globais e responsividade: `src/styles.css`

## Posicionamento

Foco principal:

- Backend Developer | Java | Spring Boot | Distributed Systems
- ERP, fiscal/contábil e sistemas financeiros
- APIs REST, mensageria, SQL, cloud e observabilidade
