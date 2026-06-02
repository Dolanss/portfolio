export type Project = {
  name: string;
  description: string;
  stack: string[];
  problem: string;
  solution: string;
  demonstrates: string;
  architecture: string[];
  impact: string;
  diagram: DiagramType;
  link: string;
  tags: string[];
};

export type OpenSourceItem = {
  name: string;
  description: string;
  focus: string[];
  link: string;
  tags: string[];
};

export type FocusArea = {
  title: string;
  description: string;
};

export type DiagramType = 'event' | 'fiscal' | 'bff';

export type MindsetItem = {
  title: string;
  description: string;
};

export const links = {
  github: 'https://github.com/Dolanss',
  linkedin: 'https://www.linkedin.com/in/gabrielfsdoliveira/',
  email: 'gabriel.springkernel@gmail.com',
  phoneDisplay: '(43) 99195-7444',
  phoneHref: 'tel:+5543991957444',
  whatsapp: 'https://wa.me/5543991957444',
};

export const heroBadges = ['Java', 'Spring Boot', 'Distributed Systems', 'ERP', 'Fiscal'];

export const heroIndicators = ['APIs REST', 'RabbitMQ', 'Redis', 'Fiscal Systems', 'Cloud-native'];

export const engineeringFocus: FocusArea[] = [
  {
    title: 'Event-driven systems',
    description: 'Desenho de fluxos assíncronos com filas, eventos financeiros e tratamento de falhas previsíveis.',
  },
  {
    title: 'Fiscal integrations',
    description: 'Integrações com SEFAZ, SOAP, XMLs fiscais, SPED/EFD e documentos fiscais eletrônicos.',
  },
  {
    title: 'ERP workflows',
    description: 'Rotinas de cadastro, faturamento, fiscal, financeiro e automações para reduzir trabalho manual.',
  },
  {
    title: 'Distributed processing',
    description: 'Separação de responsabilidades entre serviços, filas e processamentos que não precisam ser síncronos.',
  },
  {
    title: 'Cloud-native backend',
    description: 'Serviços Java com Docker, GCP, configuração por ambiente e atenção ao ciclo de deploy.',
  },
  {
    title: 'Financial systems',
    description: 'Modelagem de regras de cobrança, apuração, relatórios e consistência em fluxos transacionais.',
  },
  {
    title: 'Observability and operations',
    description: 'Logs, métricas e leitura de comportamento para deixar serviços mais fáceis de debugar e operar.',
  },
  {
    title: 'Secure data exposure',
    description: 'Contratos de API e BFFs com cuidado na exposição de dados sensíveis e recortes de acesso.',
  },
];

export const architectureFlows: Array<{
  title: string;
  description: string;
  diagram: DiagramType;
}> = [
  {
    title: 'Event processing',
    description: 'Fila entre API e worker para manter operações financeiras fora de uma cadeia síncrona longa.',
    diagram: 'event',
  },
  {
    title: 'Fiscal document flow',
    description: 'Leitura de XML fiscal, parsing, validação e entrega para rotinas ERP/fiscal.',
    diagram: 'fiscal',
  },
  {
    title: 'Secure API exposure',
    description: 'BFF aplicando regra de anonimização antes de expor dados ao cliente.',
    diagram: 'bff',
  },
];

export const engineeringMindset: MindsetItem[] = [
  {
    title: 'Serviços fáceis de operar',
    description: 'Código, logs e contratos pensados para entender falhas sem depender de adivinhação.',
  },
  {
    title: 'APIs previsíveis',
    description: 'Contratos REST claros, respostas consistentes e validação antes de persistir ou publicar eventos.',
  },
  {
    title: 'Desacoplamento com propósito',
    description: 'Filas e workers quando o fluxo precisa tolerar latência, retries ou processamento posterior.',
  },
  {
    title: 'Modelagem de domínio',
    description: 'Regras fiscais e financeiras organizadas perto do domínio, não espalhadas pela aplicação.',
  },
  {
    title: 'Integração corporativa',
    description: 'Atenção a SOAP, XML, ERP, bancos relacionais e sistemas que precisam continuar operando.',
  },
  {
    title: 'Evolução contínua',
    description: 'Preferência por estruturas simples de alterar, testar e revisar quando a regra de negócio muda.',
  },
];

export const productionConcerns: MindsetItem[] = [
  {
    title: 'Retry handling',
    description: 'Retries com limite e contexto, sem esconder falhas permanentes.',
  },
  {
    title: 'Idempotency',
    description: 'Proteção contra duplicidade em eventos, cobranças e rotinas de integração.',
  },
  {
    title: 'Logging',
    description: 'Logs com identificadores úteis para rastrear chamadas e jobs assíncronos.',
  },
  {
    title: 'Monitoring',
    description: 'Métricas e sinais básicos para acompanhar filas, erros e latência.',
  },
  {
    title: 'Async processing',
    description: 'Workers para tarefas que não precisam bloquear a requisição principal.',
  },
  {
    title: 'Failure isolation',
    description: 'Separação de responsabilidades para uma falha não derrubar o fluxo inteiro.',
  },
  {
    title: 'Data consistency',
    description: 'Cuidado com transações, estados intermediários e reprocessamento seguro.',
  },
  {
    title: 'Contract validation',
    description: 'Validação de entrada, saída e eventos antes de integrar com outros sistemas.',
  },
];

export const operationalSignals = [
  'Processamento de milhares de registros fiscais/dia.',
  'Fluxos assíncronos para eventos financeiros.',
  'Redução de trabalho manual em rotinas operacionais.',
  'Integrações com documentos fiscais eletrônicos.',
  'Modelagem de regras fiscais e financeiras.',
];

export const backendTeamStrengths = [
  'Java/Spring Boot para sistemas corporativos.',
  'Domínio fiscal/financeiro aplicado a software.',
  'APIs REST, SQL e persistência com JPA/Hibernate.',
  'Mensageria com RabbitMQ/JMS.',
  'Redis para cache e otimização de leitura.',
  'Docker, GCP e observabilidade para operação.',
  'Leitura de código em projetos open source Java.',
];

export const featuredProjects: Project[] = [
  {
    name: 'K-Anonymization BFF Pattern',
    description:
      'BFF em Java/Spring Boot para expor dados analíticos com regras de k-anonymization antes da resposta da API.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'BFF', 'Data Privacy'],
    problem:
      'APIs analíticas podem expor dados sensíveis quando retornam recortes pequenos demais ou identificáveis.',
    solution:
      'Aplicação de uma camada BFF para agregar respostas, aplicar regra de k-anonymization e controlar o formato exposto ao cliente.',
    demonstrates:
      'Desenho de contrato REST, separação entre API e camada de agregação, e cuidado com exposição segura de dados.',
    architecture: ['BFF', 'Anonymization', 'Client'],
    impact: 'Exposição mais controlada de dados sensíveis em APIs analíticas.',
    diagram: 'bff',
    link: 'https://github.com/Dolanss/K-Anonymization_BFF_Pattern',
    tags: ['BFF', 'LGPD', 'Data Privacy', 'API Design', 'Spring Boot'],
  },
  {
    name: 'EFD Parser',
    description:
      'Parser para arquivos fiscais EFD, com extração estruturada e normalização de registros tributários brasileiros.',
    stack: ['Java', 'File Parsing', 'Fiscal Domain', 'Data Normalization', 'ERP'],
    problem:
      'Arquivos EFD/SPED têm layout rígido, muitos registros e exigem leitura consistente para uso em rotinas fiscais.',
    solution:
      'Parser focado em transformar linhas fiscais em dados estruturados, normalizados e prontos para validação ou integração.',
    demonstrates:
      'Leitura de layout fiscal, tratamento de arquivos grandes e transformação de dados para sistemas ERP/fiscal.',
    architecture: ['Fiscal XML', 'Parser', 'Validation', 'ERP'],
    impact: 'Processamento de milhares de registros fiscais/dia em rotinas de leitura e normalização.',
    diagram: 'fiscal',
    link: 'https://github.com/Dolanss/EFD_PARSER',
    tags: ['EFD', 'SPED', 'Fiscal', 'Parsing', 'Tax Systems'],
  },
  {
    name: 'Event-driven Billing',
    description:
      'Arquitetura de billing orientada a eventos para processar transações financeiras e etapas de faturamento de forma assíncrona.',
    stack: ['Java', 'Spring Boot', 'RabbitMQ', 'Messaging', 'Event-driven Architecture'],
    problem:
      'Fluxos de billing e faturamento não devem depender de uma cadeia síncrona longa para concluir cada etapa.',
    solution:
      'Uso de eventos e mensageria para desacoplar etapas de cobrança, processamento financeiro e emissão de registros.',
    demonstrates:
      'Desenho de filas, processamento assíncrono, idempotência e rastreabilidade em rotinas financeiras.',
    architecture: ['API', 'RabbitMQ', 'Worker', 'Database'],
    impact: 'Fluxos assíncronos para eventos financeiros e etapas de faturamento.',
    diagram: 'event',
    link: 'https://github.com/Dolanss/Event-driven_billing',
    tags: ['Billing', 'RabbitMQ', 'Async Processing', 'Distributed Systems', 'Idempotency'],
  },
  {
    name: 'Tax Calculation Engine',
    description:
      'Motor de cálculo tributário para organizar regras fiscais, cálculos e pontos de extensão por tipo de operação.',
    stack: ['Java', 'Spring Boot', 'Domain Modeling', 'Business Rules', 'Clean Architecture'],
    problem:
      'Regras fiscais mudam com frequência e ficam difíceis de manter quando cálculos se espalham pelo código.',
    solution:
      'Organização de regras por domínio e pontos de extensão para manter cálculos tributários mais previsíveis.',
    demonstrates:
      'Modelagem de regras de negócio, encapsulamento de cálculos e organização de código para mudança fiscal frequente.',
    architecture: ['Input', 'Tax rules', 'Calculation', 'Result'],
    impact: 'Modelagem de regras fiscais e financeiras com separação de responsabilidades.',
    diagram: 'fiscal',
    link: 'https://github.com/Dolanss/Tax_Calculation_Engine',
    tags: ['Tax Rules', 'Fiscal', 'Rules Engine', 'Clean Architecture', 'Java'],
  },
  {
    name: 'Crypto Tax',
    description: 'Aplicação para cálculo tributário de criptoativos e organização de lógica de apuração financeira.',
    stack: ['Java', 'Financial Systems', 'Tax Calculation', 'Data Processing', 'Reporting'],
    problem:
      'Operações com criptoativos precisam ser agrupadas e interpretadas antes de entrar em cálculo e relatório fiscal.',
    solution:
      'Estrutura para calcular valores tributários e organizar dados de operações em um fluxo de apuração financeira.',
    demonstrates:
      'Tratamento de dados financeiros, regras de cálculo e geração de informações úteis para reporting fiscal.',
    architecture: ['Operations', 'Rules', 'Tax report'],
    impact: 'Organização de operações financeiras para cálculo tributário e reporting.',
    diagram: 'event',
    link: 'https://github.com/Dolanss/CRYPTO_TAX',
    tags: ['Crypto Tax', 'Finance', 'Tax Calculation', 'Reporting', 'Data Processing'],
  },
];

export const openSourceItems: OpenSourceItem[] = [
  {
    name: 'Resilience4j study/contribution fork',
    description:
      'Open source study and contribution work around resilience patterns and Spring Boot tests in the Java ecosystem.',
    focus: ['Java', 'Spring Boot', 'Retry behavior', 'Circuit breaker', 'Automated tests'],
    link: 'https://github.com/Dolanss/resilience4j',
    tags: ['Open Source Study', 'Resilience4j', 'Test Reliability', 'Spring Boot'],
  },
  {
    name: 'Apache Camel Spring Boot contribution fork',
    description:
      'Fork with proposed improvements in the Apache Camel Spring Boot ecosystem, focused on test reliability and integration behavior.',
    focus: ['Java', 'Spring Boot', 'Apache Camel', 'Integration tests', 'Test stability'],
    link: 'https://github.com/Dolanss/camel-spring-boot',
    tags: ['Fork with Proposed Improvements', 'Integration Behavior', 'Testing', 'Camel'],
  },
];

export const techGroups = [
  {
    title: 'Backend',
    items: ['Java', 'Kotlin', 'Spring Boot', 'Spring Security', 'JPA', 'Hibernate', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Data',
    items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'],
  },
  {
    title: 'Messaging / Integration',
    items: ['RabbitMQ', 'JMS', 'SOAP', 'SEFAZ', 'SPED/EFD', 'Event-driven Architecture'],
  },
  {
    title: 'Cloud / DevOps',
    items: ['GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Grafana', 'Prometheus'],
  },
  {
    title: 'Practices',
    items: ['Clean Architecture', 'TDD', 'Unit Testing', 'Git', 'Agile/Scrum', 'System Design'],
  },
];
