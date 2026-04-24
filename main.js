const canvas = document.getElementById("starfield");
const context = canvas.getContext("2d");

const pointer = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};

const particles = [];
const particleCount = Math.min(110, Math.max(64, Math.round(window.innerWidth / 14)));
const langToggle = document.getElementById("langToggle");
const root = document.documentElement;

const translations = {
  pt: {
    title: "Venelouis | Tech Educator & Builder",
    description:
      "Venelouis - professor de tecnologia, facilitador Google Arcade Brasil 2026 e criador de projetos educacionais em Bíblia, ciência e tecnologia.",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.eyebrow": "Professor de tecnologia · Clube Amplexo Educação",
    "hero.title": 'Tecnologia que <span>ensina</span>, conecta e transforma.',
    "hero.lede":
      "Eu sou Venelouis, educador, facilitador do Google Arcade Brasil 2026 e ex-aluno da Universidade Hebraica de Jerusalém. Meu trabalho une fé, ciência, tecnologia e experiências de aprendizagem com impacto real.",
    "hero.primaryCta": "Ver projetos",
    "hero.secondaryCta": "Falar comigo",
    "hero.pill1": "ICO",
    "hero.pill2": "Matemática",
    "hero.pill3": "Bíblia",
    "hero.pill4": "Ciência",
    "hero.pill5": "Tecnologia",
    "hero.chipLeftLabel": "Arcade Brasil 2026",
    "hero.chipLeftValue": "Facilitador",
    "hero.chipRightLabel": "Base acadêmica",
    "hero.chipRightValue": "Hebraica de Jerusalém",
    "stats.one": "professor com linguagem de futuro",
    "stats.two": "plataformas educacionais em destaque",
    "stats.three": "redes para acompanhar e colaborar",
    "about.label": "Sobre mim",
    "about.heading": "Ensino com propósito, arquitetura digital e experiência memorável.",
    "about.paragraph1":
      "No Clube Amplexo Educação, ajudo estudantes a enxergarem a tecnologia como ferramenta de criação, pensamento e serviço. Minha trajetória combina formação internacional, mediação pedagógica e projetos que aproximam conhecimento bíblico, ciência e tecnologia.",
    "about.paragraph2":
      "A identidade visual deste site foi pensada para refletir essa mistura: precisão, movimento, luz e uma sensação de laboratório vivo em constante evolução.",
    "stack.label": "Assinatura",
    "stack.roleLabel": "Função",
    "stack.roleValue": "Professor de tecnologia",
    "stack.orgLabel": "Instituição",
    "stack.orgValue": "Clube Amplexo Educação",
    "stack.programLabel": "Programas",
    "stack.programValue": "Google Arcade Brasil 2026",
    "projects.label": "Projetos em destaque",
    "projects.heading": "Plataformas pensadas para aprender com profundidade e engajamento.",
    "project.oneTitle": "Plataforma gamificada para estudo da Bíblia, ciência e tecnologia.",
    "project.oneBody":
      "Uma experiência de aprendizado com progressão, desafio, narrativa e descoberta. Ideal para conectar espiritualidade, lógica, curiosidade científica e prática tecnológica.",
    "project.oneTag1": "Gamificação",
    "project.oneTag2": "Educação bíblica",
    "project.oneTag3": "Ciência",
    "project.oneCta": "Visitar creio.eu",
    "project.twoTitle": "Estudo bíblico interlinear nos principais idiomas antigos.",
    "project.twoBody":
      "Uma plataforma para explorar hebraico, aramaico, grego, latim, ge'ez, síriaco e armênio com foco em contexto, estrutura e comparação textual.",
    "project.twoTag1": "Interlinear",
    "project.twoTag2": "Idiomas antigos",
    "project.twoTag3": "Pesquisa",
    "project.twoCta": "Visitar biblia.creio.eu",
    "project.threeTitle": "Clube Amplexo: Excelência em Competições Científicas.",
    "project.threeBody":
      "Referência nacional em olimpíadas de conhecimento, preparando talentos para os maiores desafios intelectuais do mundo.",
    "project.threeTag1": "Educação",
    "project.threeTag2": "Olimpíadas",
    "project.threeTag3": "Premiados",
    "project.threeCta": "Visitar amplexoedu.com",
    "timeline.label": "Linha de atuação",
    "timeline.heading": "Uma narrativa que une ensino, inovação e impacto.",
    "timeline.oneLabel": "Formação",
    "timeline.oneTitle": "Universidade Hebraica de Jerusalém",
    "timeline.oneBody": "Base acadêmica com amplitude cultural e intelectual.",
    "timeline.twoLabel": "Atualidade",
    "timeline.twoTitle": "Clube Amplexo Educação",
    "timeline.twoBody": "Docência e facilitação com foco em tecnologia e aprendizado vivo.",
    "timeline.threeLabel": "Horizonte",
    "timeline.threeTitle": "Google Arcade Brasil 2026",
    "timeline.threeBody": "Atuação como facilitador em um programa de mobilização e criação.",
    "contact.label": "Contato",
    "contact.heading": "Vamos construir algo extraordinário.",
    "contact.body":
      "Se você quiser colaboração, palestras, oficinas, consultoria pedagógica ou parceria em projetos de tecnologia e educação, me encontre nas redes abaixo.",
    "contact.whatsapp": "WhatsApp direto",
    "footer.tagline": "Tecnologia, educação e propósito.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.builtWith": "Desenvolvido com paixão e precisão.",
    "lang.button": "EN",
  },
  en: {
    title: "Venelouis | Tech Educator & Builder",
    description:
      "Venelouis - technology teacher, Google Arcade Brazil 2026 facilitator, and creator of educational projects in Bible, science, and technology.",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "Technology teacher · Clube Amplexo Educação",
    "hero.title": 'Technology that <span>teaches</span>, connects, and transforms.',
    "hero.lede":
      "I am Venelouis, an educator, Google Arcade Brazil 2026 facilitator, and alumnus of the Hebrew University of Jerusalem. My work blends faith, science, technology, and learning experiences with real impact.",
    "hero.primaryCta": "View projects",
    "hero.secondaryCta": "Contact me",
    "hero.pill1": "ICO",
    "hero.pill2": "Math",
    "hero.pill3": "Bible",
    "hero.pill4": "Science",
    "hero.pill5": "Technology",
    "hero.chipLeftLabel": "Google Arcade 2026",
    "hero.chipLeftValue": "Facilitator",
    "hero.chipRightLabel": "Academic base",
    "hero.chipRightValue": "Hebrew University of Jerusalem",
    "stats.one": "teacher with a future-facing language",
    "stats.two": "featured educational platforms",
    "stats.three": "channels to follow and collaborate",
    "about.label": "About me",
    "about.heading": "I teach with purpose, digital architecture, and memorable experiences.",
    "about.paragraph1":
      "At Clube Amplexo Educação, I help students see technology as a tool for creation, thought, and service. My journey combines international education, pedagogical facilitation, and projects that connect biblical knowledge, science, and technology.",
    "about.paragraph2":
      "The visual identity of this site was designed to reflect that blend: precision, motion, light, and the feeling of a living laboratory in constant evolution.",
    "stack.label": "Signature",
    "stack.roleLabel": "Role",
    "stack.roleValue": "Technology teacher",
    "stack.orgLabel": "Organization",
    "stack.orgValue": "Clube Amplexo Educação",
    "stack.programLabel": "Programs",
    "stack.programValue": "Google Arcade Brazil 2026",
    "projects.label": "Featured projects",
    "projects.heading": "Platforms designed for deep, engaging learning.",
    "project.oneTitle": "A gamified platform for Bible, science, and technology study.",
    "project.oneBody":
      "A learning experience with progression, challenge, narrative, and discovery. Ideal for connecting spirituality, logic, scientific curiosity, and practical technology.",
    "project.oneTag1": "Gamification",
    "project.oneTag2": "Bible education",
    "project.oneTag3": "Science",
    "project.oneCta": "Visit creio.eu",
    "project.twoTitle": "Interlinear Bible study in the major ancient languages.",
    "project.twoBody":
      "A platform to explore Hebrew, Aramaic, Greek, Latin, Ge'ez, Syriac, and Armenian with a focus on context, structure, and textual comparison.",
    "project.twoTag1": "Interlinear",
    "project.twoTag2": "Ancient languages",
    "project.twoTag3": "Research",
    "project.twoCta": "Visit biblia.creio.eu",
    "project.threeTitle": "Clube Amplexo: Excellence in Scientific Competitions.",
    "project.threeBody":
      "A national reference in knowledge olympiads, preparing talents for the world's greatest intellectual challenges.",
    "project.threeTag1": "Education",
    "project.threeTag2": "Olympiads",
    "project.threeTag3": "Award-winning",
    "project.threeCta": "Visit amplexoedu.com",
    "timeline.label": "Focus timeline",
    "timeline.heading": "A narrative that connects teaching, innovation, and impact.",
    "timeline.oneLabel": "Formation",
    "timeline.oneTitle": "Hebrew University of Jerusalem",
    "timeline.oneBody": "Academic foundation with cultural and intellectual breadth.",
    "timeline.twoLabel": "Now",
    "timeline.twoTitle": "Clube Amplexo Educação",
    "timeline.twoBody": "Teaching and facilitation focused on technology and living learning.",
    "timeline.threeLabel": "Forward",
    "timeline.threeTitle": "Google Arcade Brazil 2026",
    "timeline.threeBody": "Working as a facilitator in a mobilization and creation program.",
    "contact.label": "Contact",
    "contact.heading": "Let's build something extraordinary.",
    "contact.body":
      "If you want collaboration, talks, workshops, pedagogical consulting, or partnerships in technology and education, find me on the channels below.",
    "contact.whatsapp": "Direct WhatsApp",
    "footer.tagline": "Technology, education, and purpose.",
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with passion & precision.",
    "lang.button": "PT",
  },
};

let currentLanguage = "pt";

function applyLanguage(language) {
  const copy = translations[language];

  root.lang = language === "en" ? "en" : "pt-BR";
  document.title = copy.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", copy.description);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (copy[key]) {
      element.textContent = copy[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (copy[key]) {
      element.innerHTML = copy[key];
    }
  });

  langToggle.textContent = copy["lang.button"];
  currentLanguage = language;
  localStorage.setItem("venelouis-language", language);
}

const savedLanguage = localStorage.getItem("venelouis-language");
const preferredLanguage = savedLanguage || (navigator.language && navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");

applyLanguage(preferredLanguage);

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function createParticle(seedIndex) {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * (0.22 + seedIndex * 0.002),
    vy: (Math.random() - 0.5) * (0.22 + seedIndex * 0.002),
    radius: 1 + Math.random() * 1.9,
    hue: 175 + Math.random() * 90,
  };
}

function initParticles() {
  particles.length = 0;
  for (let index = 0; index < particleCount; index += 1) {
    particles.push(createParticle(index));
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    }
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

window.addEventListener("mousemove", (event) => {
  const xOffset = (event.clientX / window.innerWidth - 0.5) * 10;
  const yOffset = (event.clientY / window.innerHeight - 0.5) * 10;
  document.documentElement.style.setProperty("--pointer-x", `${xOffset}px`);
  document.documentElement.style.setProperty("--pointer-y", `${yOffset}px`);
});

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateMotionMode() {
  if (reducedMotionQuery.matches) {
    return;
  }
}

reducedMotionQuery.addEventListener("change", updateMotionMode);
updateMotionMode();

langToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "pt" ? "en" : "pt");
});

function draw() {
  if (reducedMotionQuery.matches) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    return;
  }

  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  context.fillStyle = "rgba(4, 7, 13, 0.16)";
  context.fillRect(0, 0, window.innerWidth, window.innerHeight);

  for (const particle of particles) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (particle.x < -20) particle.x = window.innerWidth + 20;
    if (particle.x > window.innerWidth + 20) particle.x = -20;
    if (particle.y < -20) particle.y = window.innerHeight + 20;
    if (particle.y > window.innerHeight + 20) particle.y = -20;

    const distance = Math.hypot(pointer.x - particle.x, pointer.y - particle.y);
    const alpha = Math.max(0.08, 1 - distance / 260);

    context.beginPath();
    context.fillStyle = `hsla(${particle.hue}, 95%, 72%, ${0.18 + alpha * 0.55})`;
    context.arc(particle.x, particle.y, particle.radius + alpha * 1.1, 0, Math.PI * 2);
    context.fill();
  }

  for (let i = 0; i < particles.length; i += 1) {
    for (let j = i + 1; j < particles.length; j += 1) {
      const a = particles[i];
      const b = particles[j];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);

      if (distance < 130) {
        const alpha = (1 - distance / 130) * 0.26;
        context.beginPath();
        context.strokeStyle = `rgba(111, 248, 255, ${alpha})`;
        context.lineWidth = 1;
        context.moveTo(a.x, a.y);
        context.lineTo(b.x, b.y);
        context.stroke();
      }
    }
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  initParticles();
});

window.addEventListener("pointermove", (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
});

window.addEventListener("pointerleave", () => {
  pointer.x = window.innerWidth / 2;
  pointer.y = window.innerHeight / 2;
});

resizeCanvas();
initParticles();
draw();