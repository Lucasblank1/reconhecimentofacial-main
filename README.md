# Reconhecimento facial

Aplicação web para consulta e cadastro rápido com **reconhecimento facial** no navegador, usando modelos locais/CDN do **face-api.js**.

---

## Documentação

**SISTEMA DE RECONHECIMENTO FACIAL**

| | |
| --- | --- |
| **Projeto** | Reconhecimento facial |
| **Base técnica** | React + Vite + face-api.js |
| **Data de elaboração** | Abril de 2026 |

**Alunos**

- Letícia Tambani  
- Marcelo Marques de Souza  
- Rithiély Schmitt  

---

## Funcionalidades (resumo)

- Captura pela **câmera** (frontal / traseira quando disponível) e **envio de imagem** (JPG, PNG, WEBP).
- Detecção de múltiplos rostos, correspondência com base em memória e **cadastro rápido** de pessoa desconhecida.
- Painel de estatísticas da sessão com contadores separados para **rostos detectados**, **pessoas reconhecidas** e **pessoas desconhecidas**, atualizado em tempo real e mantido apenas durante a sessão.
- Otimização da detecção facial para processar uma análise por vez e evitar chamadas simultâneas ao modelo.
- Interface responsiva adaptada ao uso institucional (PMSC — contexto do cabeçalho da aplicação).
- Melhorias de acessibilidade com navegação por teclado, foco visível, mensagens para leitores de tela e suporte a movimento reduzido.

## Requisitos

- Node.js 18+ (recomendado)
- Navegador com suporte a **WebRTC** (`getUserMedia`) para a câmera

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço indicado no terminal (por padrão **http://localhost:8080**).

Outros scripts:

| Comando | Descrição |
| --- | --- |
| `npm run build` | Gera a versão de produção na pasta `dist` e os arquivos necessários para o GitHub Pages |
| `npm run preview` | Servir a pasta `dist` após a build |
| `npm run lint` | ESLint global do projeto |
| `npm test` | Testes com Vitest |

## Validação da interface e do reconhecimento

A aplicação inclui testes automatizados para as estatísticas da sessão e validações de integração básica. Antes de publicar uma alteração, utilize:

```bash
npm test
npm run lint
npm run build
```

O lint global pode apontar problemas existentes em componentes gerados pela interface; os arquivos principais da funcionalidade podem ser validados separadamente com:

```bash
npx eslint src/hooks/useFaceRecognition.ts src/components/CameraCapture.tsx src/pages/Index.tsx
```

## Publicação no GitHub Pages

A aplicação pode ser publicada diretamente no GitHub Pages usando a pasta `docs/`:

1. Em **Settings > Pages**, selecione **Deploy from a branch**.
2. Escolha a branch `main` e a pasta `/docs`.
3. Execute `npm run build` e envie as alterações da pasta `docs/` para o GitHub.

A publicação utiliza a URL:

```text
https://lucasblank1.github.io/reconhecimentofacial-main/
```

O projeto cria o arquivo `404.html` para manter o roteamento compatível com o Pages e `.nojekyll` para desativar o processamento Jekyll.

## Estrutura principal

- `src/pages/Index.tsx` — fluxo da tela principal  
- `src/components/CameraCapture.tsx` — câmera, upload e pré-visualização  
- `src/components/StatisticsPanel.tsx` — painel responsivo de estatísticas da sessão, com contadores de rostos detectados, pessoas reconhecidas e pessoas desconhecidas
- `src/hooks/useFaceRecognition.ts` — carregamento dos modelos e matching  
- `public/models` — pesos do face-api.js (com fallback para CDN oficial)

## Licença / uso

Projeto acadêmico. Uso restrito conforme contexto institucional definido na aplicação.
