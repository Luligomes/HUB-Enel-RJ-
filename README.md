# Hub de Indicadores - Enel RJ

Este projeto é um portal unificado e hub central de indicadores para a Enel RJ, consolidando todos os dashboards do Power BI em um único local. A interface foi projetada seguindo fielmente a identidade visual do modelo de referência, utilizando as cores corporativas (Azul Escuro e Verde Enel) com uma experiência premium e moderna.

## 🚀 Funcionalidades

1. **Navegação Dinâmica (SPA)**: Menu lateral fixo que permite filtrar os painéis por categorias de forma instantânea, sem recarregar a página.
2. **Visualizador Premium Embutido (Iframe)**: Carregamento do relatório do Power BI diretamente na tela do portal, com indicador visual de progresso e opção de voltar com apenas um clique.
3. **Opção de Abertura Flexível**: Facilidade para configurar se os relatórios devem abrir internamente ou em novas abas do navegador.
4. **Responsividade Desktop**: Layout otimizado para diferentes resoluções de telas de computadores (1024px até 1920px) e adaptável para tablets/mobile.
5. **Modais Auxiliares**: Inclui um Manual do Usuário explicativo embutido.

---

## 📁 Estrutura de Arquivos

```text
enel-indicadores-hub/
│
├── index.html     # Estrutura semântica e esqueleto HTML do portal
├── styles.css     # Design System, variáveis CSS, estilos e animações
├── app.js         # Dados dos relatórios e lógica de controle dinâmico
├── mro_logo.png   # Logotipo oficial da MRO para a sidebar
├── vercel.json    # Configurações de caching e URLs limpas para deploy Vercel
└── README.md      # Instruções de configuração e uso (este arquivo)
```

---

## ⚙️ Como Configurar

### 1. Alterar Modo de Abertura (Iframe vs Nova Aba)
No topo do arquivo [app.js](file:///C:/Users/luiza.gomes/.gemini/antigravity/scratch/enel-indicadores-hub/app.js), você encontrará a variável de configuração:

```javascript
const CONFIG = {
    OPEN_IN_IFRAME: true // Mude para false para abrir os relatórios em nova aba
};
```
- **`true` (Recomendado/Premium)**: Ao clicar no card, abre o visualizador de relatórios dentro do próprio hub.
- **`false`**: Ao clicar no card, redireciona o usuário para o Power BI abrindo uma nova aba no navegador.

### 2. Adicionar ou Alterar Links de Indicadores
Para editar, remover ou adicionar novos relatórios, basta alterar a lista `indicatorsData` no arquivo [app.js](file:///C:/Users/luiza.gomes/.gemini/antigravity/scratch/enel-indicadores-hub/app.js). Cada indicador tem o seguinte formato:

```javascript
{
    id: "identificador-unico",
    title: "Nome do Painel",
    description: "Breve descrição do indicador.",
    category: "kpis-operacionais", // Categorias válidas: 'kpis-operacionais', 'gestao-pessoas' ou 'gestao-operacional'
    categoryLabel: "KPIs Operacionais",
    link: "URL_DO_RELATORIO_POWER_BI",
    icon: `<svg class="card-icon" ...> ... </svg>` // Ícone em formato SVG
}
```

---

## 🛠️ Como Executar Localmente

Como a aplicação é construída com HTML, CSS e JavaScript puro (Vanilla), você não precisa instalar nenhuma dependência ou banco de dados.

### Opção 1: Abertura Direta
Basta dar um duplo clique no arquivo `index.html` do seu computador para abrir diretamente no navegador padrão.

### Opção 2: Servidor Local (Recomendado para simular iframe)
Caso utilize o Visual Studio Code, você pode usar a extensão **Live Server** ou rodar pelo terminal usando o Node.js:
1. Instale o pacote `http-server` globalmente (caso tenha o Node.js):
   ```bash
   npm install -g http-server
   ```
2. Inicie o servidor dentro da pasta do projeto:
   ```bash
   http-server .
   ```
3. Acesse o endereço indicado no terminal (ex: `http://localhost:8080`).

---

## 🌐 Publicar na Vercel

O projeto foi preparado para ser publicado na Vercel com URLs limpas e otimização de cache. Existem duas formas simples de publicar:

### Opção 1: Drag & Drop (Sem código)
1. Acesse o dashboard da Vercel: [vercel.com/dashboard](https://vercel.com/dashboard)
2. Arraste e solte a pasta inteira `enel-indicadores-hub` na área de importação.
3. A Vercel detectará automaticamente que é um site estático e fará o deploy em poucos segundos.

### Opção 2: Pelo Git (GitHub, GitLab ou Bitbucket)
1. Crie um repositório no seu Git e envie os arquivos do projeto para lá.
2. Acesse a Vercel e clique em **"Add New"** > **"Project"**.
3. Importe o seu repositório Git.
4. Clique em **"Deploy"**. Qualquer alteração que você enviar para o Git no futuro será atualizada automaticamente na Vercel.
