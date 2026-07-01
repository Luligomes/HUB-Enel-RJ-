/**
 * ==========================================================================
 * Hub de Indicadores Enel RJ - Lógica de Controle (JavaScript)
 * ==========================================================================
 */

// CONFIGURAÇÃO PREMIUM:
// Se true, abre os relatórios do Power BI em um visualizador (iframe) embutido no próprio site.
// Se false, abre os relatórios diretamente em uma nova aba do navegador.
const CONFIG = {
    OPEN_IN_IFRAME: true
};

// Dados dos Indicadores / Relatórios
const indicatorsData = [
    // KPIs Operacionais
    {
        id: "indicadores-operacionais-clc",
        title: "Indicadores Operacionais CLC",
        description: "Acompanhe as principais métricas de desempenho e performance da operação CLC.",
        category: "kpis-operacionais",
        categoryLabel: "KPIs Operacionais",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZDBmOTIyZjItODg1MC00YTViLTlmNTMtODE0ZGVhNjI0ZDg3IiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line><polyline points="22 4 12 14 6 8 2 12"></polyline></svg>`
    },
    {
        id: "indicadores-operacionais-insourcing",
        title: "Indicadores Operacionais Insourcing",
        description: "Acompanhe as principais métricas de desempenho e performance da operação Insourcing.",
        category: "kpis-operacionais",
        categoryLabel: "KPIs Operacionais",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZDBmOTIyZjItODg1MC00YTViLTlmNTMtODE0ZGVhNjI0ZDg3IiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 11 13 15 9"></polyline></svg>`
    },
    
    // Gestão de Pessoas
    {
        id: "painel-ocorrencias-qsms",
        title: "Painel de Ocorrências - QSMS",
        description: "Registro, monitoramento e indicadores de ocorrências operacionais.",
        category: "gestao-pessoas",
        categoryLabel: "Gestão de Pessoas",
        link: "https://app.powerbi.com/view?r=eyJrIjoiYWJmNjY1NWUtMjhiYS00YzQ4LWFkY2QtNWM4ZGJlNDkxMTUzIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><line x1="12" y1="11" x2="12" y2="15"></line><line x1="12" y1="19" x2="12.01" y2="19"></line></svg>`
    },
    {
        id: "programa-padrinho",
        title: "Programa Padrinho",
        description: "Monitoramento da integração, avaliações e feedbacks dos colaboradores.",
        category: "gestao-pessoas",
        categoryLabel: "Gestão de Pessoas",
        link: "https://app.powerbi.com/groups/c25acb9e-f1d4-4bc4-8eea-bfcba1741b64/reports/7d3863a0-1835-42d0-b9b1-77f17c65b690/ReportSectionfa286aa75fe2e492b89b?ctid=7bcb64a0-43ef-425e-9bb7-681da3910693&experience=power-bi",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
    },
    {
        id: "programa-dbo",
        title: "Programa DBO",
        description: "Controle das avaliações DBO realizadas pelos líderes.",
        category: "gestao-pessoas",
        categoryLabel: "Gestão de Pessoas",
        link: "https://app.powerbi.com/view?r=eyJrIjoiYTI1NTBlZjItMWM2My00ZDQ3LTk4MzktYWMxYmFhMmM2OTk4IiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line></svg>`
    },
    
    // Gestão Operacional
    {
        id: "diario-de-bordo",
        title: "Diário de Bordo",
        description: "Consolidado dos indicadores para acompanhamento das metas e desempenho global do contrato.",
        category: "gestao-operacional",
        categoryLabel: "Gestão Operacional",
        link: "https://app.powerbi.com/view?r=eyJrIjoiYzc2NTEzYTAtMjk1NC00M2Q0LTlmYTktNmEwZTIxODFkNThiIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`
    },
    {
        id: "gestao-operacional-clc",
        title: "Gestão Operacional CLC",
        description: "Painel de monitoramento operacional com acompanhamento dos processos e desempenho da operação CLC.",
        category: "gestao-operacional",
        categoryLabel: "Gestão Operacional",
        link: "https://app.powerbi.com/view?r=eyJrIjoiZDE3ODhiNWQtMDc1OC00MzBkLThiZDgtMTlmOTU1MmNmZWUwIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`
    },
    {
        id: "gestao-operacional-insourcing",
        title: "Gestão Operacional Insourcing",
        description: "Painel de monitoramento operacional com acompanhamento dos processos e desempenho da operação Insourcing.",
        category: "gestao-operacional",
        categoryLabel: "Gestão Operacional",
        link: "https://app.powerbi.com/view?r=eyJrIjoiNTUxOGRkODUtZWMxYi00YjMwLTkzZTEtMjdlZjMwMzQyMmRjIiwidCI6IjdiY2I2NGEwLTQzZWYtNDI1ZS05YmI3LTY4MWRhMzkxMDY5MyJ9",
        icon: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
    }
];

// Mapeamento de Títulos e Descrições por Categoria (para cabeçalho do painel)
const categoryMetaData = {
    all: {
        title: "Bem-vindo ao Hub de Indicadores",
        subtitle: "HUB DE INDICADORES",
        description: "Acesse os principais painéis e acompanhe os indicadores estratégicos da Enel RJ."
    },
    "kpis-operacionais": {
        title: "KPIs Operacionais",
        subtitle: "CENTRO DE CONTROLE",
        description: "Acompanhe e analise em tempo real os principais indicadores de produtividade, metas e performance das operações."
    },
    "gestao-pessoas": {
        title: "Gestão de Pessoas",
        subtitle: "PESSOAS E QSMS",
        description: "Visualize dados sobre o time: controle de ocorrências QSMS, avaliações do Programa DBO e entrosamento do Programa Padrinho."
    },
    "gestao-operacional": {
        title: "Gestão Operacional",
        subtitle: "OPERAÇÃO DIÁRIA",
        description: "Consulte o Diário de Bordo das equipes e gerencie as escalas e relatórios de atividades operacionais do CLC e equipes de Insourcing."
    }
};

// Elementos do DOM
const sidebarButtons = document.querySelectorAll(".nav-button");
const indicatorsGrid = document.getElementById("indicators-grid");
const dashboardViewport = document.getElementById("dashboard-viewport");
const iframeViewport = document.getElementById("iframe-viewport");
const reportIframe = document.getElementById("report-iframe");
const iframeLoader = document.getElementById("iframe-loader");
const btnVoltarDashboard = document.getElementById("btn-voltar-dashboard");

const viewSubtitle = document.getElementById("view-subtitle");
const viewTitle = document.getElementById("view-title");
const viewDescription = document.getElementById("view-description");

const iframeCategoryText = document.getElementById("iframe-category-text");
const iframeTitleText = document.getElementById("iframe-title-text");
const iframeExternalLink = document.getElementById("iframe-external-link");



// Menu Responsivo
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");
const logoHome = document.getElementById("logo-home");
const btnVisaoGeral = document.getElementById("btn-visao-geral");

/**
 * Renderiza os cards de indicadores filtrados por categoria
 * @param {string} category 
 */
function renderIndicators(category) {
    indicatorsGrid.innerHTML = "";
    
    const filteredData = category === "all" 
        ? indicatorsData 
        : indicatorsData.filter(ind => ind.category === category);
        
    filteredData.forEach(ind => {
        const card = document.createElement("a");
        card.href = CONFIG.OPEN_IN_IFRAME ? "#" : ind.link;
        if (!CONFIG.OPEN_IN_IFRAME) {
            card.target = "_blank";
        }
        card.className = "indicator-card";
        card.setAttribute("data-id", ind.id);
        
        card.innerHTML = `
            <span class="card-category-tag ${ind.category}">${ind.categoryLabel}</span>
            <div class="card-icon-wrapper">
                ${ind.icon}
            </div>
            <h3 class="card-title">${ind.title}</h3>
            <p class="card-description">${ind.description}</p>
            <div class="card-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
        
        // Se a visualização premium via iframe estiver ativa
        if (CONFIG.OPEN_IN_IFRAME) {
            card.addEventListener("click", (e) => {
                e.preventDefault();
                abrirRelatorio(ind);
            });
        }
        
        indicatorsGrid.appendChild(card);
    });
}

/**
 * Atualiza os textos do cabeçalho com base na categoria
 * @param {string} category 
 */
function updateHeader(category) {
    const meta = categoryMetaData[category] || categoryMetaData.all;
    viewSubtitle.textContent = meta.subtitle;
    viewTitle.textContent = meta.title;
    viewDescription.textContent = meta.description;
}

/**
 * Carrega e exibe um relatório do Power BI dentro do iframe embutido
 * @param {Object} indicator 
 */
function abrirRelatorio(indicator) {
    // Rola para o topo do site
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Atualiza metadados do cabeçalho do iframe
    iframeCategoryText.textContent = indicator.categoryLabel;
    iframeTitleText.textContent = indicator.title;
    iframeExternalLink.href = indicator.link;
    
    // Exibe o loader e limpa o src antigo para evitar relatórios fantasmas
    iframeLoader.style.opacity = "1";
    iframeLoader.style.display = "flex";
    reportIframe.src = "";
    
    // Oculta dashboard e exibe iframe viewport
    dashboardViewport.style.display = "none";
    iframeViewport.style.display = "flex";
    
    // Carrega o link no iframe
    reportIframe.src = indicator.link;
    
    // Trata o carregamento do iframe
    reportIframe.onload = () => {
        // Suave transição de saída do loader
        setTimeout(() => {
            iframeLoader.style.opacity = "0";
            setTimeout(() => {
                iframeLoader.style.display = "none";
            }, 300);
        }, 500); // pequeno delay para experiência fluida
    };
}

/**
 * Retorna do visualizador de relatórios para o painel principal (Grid de Cards)
 */
function voltarParaDashboard() {
    iframeViewport.style.display = "none";
    dashboardViewport.style.display = "flex";
    reportIframe.src = ""; // descarrega iframe
}

/**
 * Alterna a categoria de visualização ativa na barra lateral
 * @param {string} category 
 * @param {HTMLElement} activeBtn 
 */
function setActiveTab(category, activeBtn) {
    // Remove classe ativa de todas as abas
    sidebarButtons.forEach(btn => btn.classList.remove("active"));
    
    // Adiciona classe ativa na aba selecionada
    if (activeBtn) {
        activeBtn.classList.add("active");
    }
    
    // Retorna para o grid principal caso estivesse vendo um relatório
    voltarParaDashboard();
    
    // Atualiza cabeçalho e renderiza os indicadores
    updateHeader(category);
    renderIndicators(category);
    
    // No Mobile, fecha a barra lateral ao clicar em um link
    if (window.innerWidth <= 1024) {
        sidebar.classList.remove("open");
    }
}

// ==========================================================================
// Event Listeners e Inicialização
// ==========================================================================

// Cliques nos botões do menu lateral
sidebarButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        setActiveTab(category, btn);
    });
});

// Cliques nos links de controle de visualização do iframe
btnVoltarDashboard.addEventListener("click", voltarParaDashboard);

// Cliques nos logotipos/home
logoHome.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveTab("all", btnVisaoGeral);
});

// Event Listener para abrir/fechar Menu Lateral no Mobile/Responsivo
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});



// Inicialização da Página
document.addEventListener("DOMContentLoaded", () => {
    // Renderiza todos os indicadores ao iniciar
    setActiveTab("all", btnVisaoGeral);
});
