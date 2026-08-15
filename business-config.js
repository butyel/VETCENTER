/* ============================================================
   VETCENTER — Configuração central do negócio
   Centraliza TODOS os dados da empresa em um único lugar.
   Qualquer informação NÃO CONFIRMADA permanece como null/"" e
   não aparece na interface.
   ============================================================ */
window.VETCENTER_CONFIG = {
  /* --- Identidade --- */
  name: "VetCenter",
  legalName: "Vet Center - Presidente Epitácio",
  type: "VetCenter — Clínica Veterinária em Presidente Epitácio",
  positioning: "Cuidado veterinário completo para cães e gatos em Presidente Epitácio.",
  baseUrl: "https://vetcenter-delta.vercel.app",

  /* --- NAP (Nome, Endereço, Telefone) --- */
  address: {
    street: "R. Fortaleza, 10-51",
    district: "Centro",
    city: "Presidente Epitácio",
    state: "SP",
    postalCode: "19470-043",
    full: "R. Fortaleza, 10-51 - Centro, Presidente Epitácio - SP, 19470-043",
    // Coordenadas confirmadas pelo cliente
    lat: -21.76723633679676,
    lng: -52.11200564078367
  },

  /* --- Contato (confirmado) --- */
  phone: {
    display: "(18) 3281-1035",
    tel: "+551832811035",
    // WhatsApp confirmado: (18) 98174-5375
    whatsapp: "+5518981745375",
    whatsappDisplay: "(18) 98174-5375",
    // Emergência confirmada: (18) 98174-5375
    emergency: "+5518981745375",
    emergencyDisplay: "(18) 98174-5375"
  },

  /* --- E-mail (confirmado) --- */
  email: {
    address: "contato@vetcenter.com.br",
    display: "contato@vetcenter.com.br"
  },

  /* --- Horário de funcionamento (regular) --- */
  openingHours: {
    text: "Segunda a sexta: 08h às 18h · Sábado: 08h às 12h · Domingo: fechado",
    short: "Seg–Sex 08h–18h · Sáb 08h–12h · Dom fechado",
    spec: [
      { days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "08:00", closes: "18:00" },
      { days: ["Sa"], opens: "08:00", closes: "12:00" }
    ]
  },

  /* --- Avaliações Google --- */
  reviews: {
    rating: "4,8",
    count: "Mais de 70 avaliações",
    googleUrl: "https://g.page/r/CS8i_YLsyWNtEBM/review",
    label: "Ver avaliações no Google"
  },

  /* --- Redes sociais (oficiais/confirmadas) --- */
  social: {
    instagram: "https://www.instagram.com/vetcenter_epi/",
    facebook: "https://www.facebook.com/vetcenteEpi",
    // URL de negócio/perfil no Google
    googleBusiness: "https://g.page/r/CS8i_YLsyWNtEBM/review"
  },

  /* --- Serviços confirmados --- */
  services: {
    consultation: true,        // Consulta Veterinária (confirmado)
    vaccination: true,         // Vacinação (confirmado)
    imaging: true,             // Diagnóstico por Imagem (confirmado)
    xray: true,                // Raio-X Digital (confirmado)
    // Abaixo: NÃO confirmados — permanecem false até comprovação
    ultrasound: false,
    echocardiogram: false,
    surgery: false,
    hospitalization: false,
    dentistry: false,
    pharmacy: false,
    convenios: false,
    laboratory: false
  },

  /* --- Serviços exibidos (cards) --- */
  featureServices: [
    {
      id: "consulta-veterinaria",
      title: "Consulta Veterinária",
      desc: "Avaliação e acompanhamento da saúde de cães e gatos.",
      icon: "stethoscope"
    },
    {
      id: "vacinacao",
      title: "Vacinação",
      desc: "Prevenção e acompanhamento do protocolo vacinal.",
      icon: "syringe"
    },
    {
      id: "diagnostico-por-imagem",
      title: "Diagnóstico por Imagem",
      desc: "Recursos de imagem para auxiliar a investigação veterinária.",
      icon: "x-ray"
    },
    {
      id: "emergencia",
      title: "Atendimento de Emergência",
      desc: "Orientação para situações que exigem avaliação veterinária rápida.",
      icon: "ambulance"
    },
    {
      id: "banho-e-tosa",
      title: "Banho e Tosa",
      desc: "Cuidados com higiene, pele e pelagem.",
      icon: "cut"
    },
    {
      id: "pet-shop",
      title: "Pet Shop",
      desc: "Produtos e cuidados para o dia a dia dos pets.",
      icon: "shopping-bag"
    }
  ]
};
