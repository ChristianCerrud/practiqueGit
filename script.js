// --- Translations Data ---
const translations = {
  es: {
    toc_title: "Contenido",
    nav_config: "1. Configuración Inicial",
    nav_start: "2. Arrancando Motores",
    nav_daily: "3. El Ciclo Diario",
    nav_branches: "4. Ramas (Universos)",
    nav_cloud: "5. Nube y Sincronización",
    nav_info: "6. Información e Historial",
    header_subtitle:
      "Tu guía rápida de comandos esenciales aprendidos en el bootcamp.",
    sec1_title: "1. Configuración Inicial",
    sec1_desc:
      "Lo primero que haces en una PC nueva. Fundamental para que tus commits tengan tu firma.",
    sec1_c1: "# Configura tu identidad global",
    sec1_c2: "# Ajustes de calidad de vida recomendados",
    sec2_title: "2. Arrancando Motores",
    sec2_desc:
      "Cómo empezar un proyecto, ya sea desde cero en tu PC o trayéndolo de la nube.",
    sec2_c1: "# Convierte la carpeta actual en un repositorio",
    sec2_c2: "# Descarga un proyecto existente",
    sec3_title: "3. El Ciclo Diario",
    sec3_desc:
      "El flujo sagrado de trabajo: trabajar, preparar y guardar. Repetir 100 veces al día.",
    sec3_c1: "# Comprueba qué ha cambiado",
    sec3_c2: "# Prepara TODOS los archivos cambiados (Stage)",
    sec3_c3: "# Guarda la versión con un mensaje",
    sec4_title: "4. Ramas (Universos)",
    sec4_desc:
      "Nunca trabajes directo en `main`. Crea espacios seguros para tus experimentos.",
    sec4_c1: "# Crea UNA NUEVA rama y te mueve a ella",
    sec4_c2: "# Regresa a la rama principal",
    sec5_title: "5. Nube y Sincronización",
    sec5_desc:
      "Conectando tu PC local con GitHub. Subir tus cambios y bajar los de tus compañeros.",

    // Nueva traducción
    sec5_c0: "# Conecta tu repo local con el de GitHub",

    sec5_c1: "# Sube tu rama actual a GitHub (publicar)",
    sec5_c2: "# Baja los cambios nuevos de la nube",
    sec6_title: "6. Información e Historial",
    sec6_desc: "Comandos para no perderse y ver qué ha pasado antes.",
    sec6_c1: "# Historial de commits resumido",
    sec6_c2: "# Verifica la conexión SSH",
  },
  en: {
    toc_title: "Contents",
    nav_config: "1. Initial Setup",
    nav_start: "2. Starting Engines",
    nav_daily: "3. The Daily Cycle",
    nav_branches: "4. Branches (Universes)",
    nav_cloud: "5. Cloud & Sync",
    nav_info: "6. Info & History",
    header_subtitle:
      "Your quick guide to essential commands learned in the bootcamp.",
    sec1_title: "1. Initial Setup",
    sec1_desc:
      "First thing to do on a new PC. Essential for signing your commits.",
    sec1_c1: "# Configure global identity",
    sec1_c2: "# Recommended QoL settings",
    sec2_title: "2. Starting Engines",
    sec2_desc:
      "How to start a project, whether from scratch or pulling from the cloud.",
    sec2_c1: "# Convert current folder into a repo",
    sec2_c2: "# Download an existing project",
    sec3_title: "3. The Daily Cycle",
    sec3_desc:
      "The sacred workflow: work, stage, save. Repeat 100 times a day.",
    sec3_c1: "# Check what changed",
    sec3_c2: "# Stage ALL changed files",
    sec3_c3: "# Save version with a message",
    sec4_title: "4. Branches (Universes)",
    sec4_desc:
      "Never work directly on `main`. Create safe spaces for your experiments.",
    sec4_c1: "# Create NEW branch and switch to it",
    sec4_c2: "# Return to main branch",
    sec5_title: "5. Cloud & Sync",
    sec5_desc:
      "Connecting local PC to GitHub. Uploading your changes and getting others'.",

    // Nueva traducción
    sec5_c0: "# Connect local repo to GitHub",

    sec5_c1: "# Upload current branch to GitHub",
    sec5_c2: "# Download new changes from cloud",
    sec6_title: "6. Info & History",
    sec6_desc: "Commands to find your way and see what happened before.",
    sec6_c1: "# Summary commit history",
    sec6_c2: "# Verify SSH connection",
  },
  fr: {
    toc_title: "Contenu",
    nav_config: "1. Configuration Initiale",
    nav_start: "2. Démarrage",
    nav_daily: "3. Cycle Quotidien",
    nav_branches: "4. Branches (Univers)",
    nav_cloud: "5. Cloud et Synchro",
    nav_info: "6. Info et Historique",
    header_subtitle:
      "Votre guide rapide des commandes essentielles apprises au bootcamp.",
    sec1_title: "1. Configuration Initiale",
    sec1_desc:
      "Première étape sur un nouveau PC. Essentiel pour signer vos commits.",
    sec1_c1: "# Configure votre identité globale",
    sec1_c2: "# Paramètres de confort recommandés",
    sec2_title: "2. Démarrage",
    sec2_desc:
      "Comment démarrer un projet, soit de zéro, soit depuis le cloud.",
    sec2_c1: "# Convertit le dossier actuel en dépôt",
    sec2_c2: "# Télécharge un projet existant",
    sec3_title: "3. Cycle Quotidien",
    sec3_desc:
      "Le flux sacré : travailler, préparer, sauvegarder. Répéter 100 fois.",
    sec3_c1: "# Vérifie les changements",
    sec3_c2: "# Prépare TOUS les fichiers (Stage)",
    sec3_c3: "# Sauvegarde la version avec message",
    sec4_title: "4. Branches (Univers)",
    sec4_desc:
      "Ne jamais travailler sur `main`. Créez des espaces sûrs pour tester.",
    sec4_c1: "# Crée une NOUVELLE branche et bascule",
    sec4_c2: "# Retourne à la branche principale",
    sec5_title: "5. Cloud et Synchro",
    sec5_desc:
      "Connecter le PC à GitHub. Envoyer vos modifs et récupérer les autres.",

    // Nueva traducción
    sec5_c0: "# Connecte le dépôt local à GitHub",

    sec5_c1: "# Envoie votre branche sur GitHub",
    sec5_c2: "# Récupère les changements du cloud",
    sec6_title: "6. Info et Historique",
    sec6_desc: "Commandes pour s'orienter et voir l'historique.",
    sec6_c1: "# Historique des commits résumé",
    sec6_c2: "# Vérifie la connexion SSH",
  },
};

// --- Language Switcher Logic ---
const langBtns = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    langBtns.forEach((b) => b.classList.remove("active"));
    // Add active to clicked
    btn.classList.add("active");

    const selectedLang = btn.getAttribute("data-lang");
    updateLanguage(selectedLang);
  });
});

function updateLanguage(lang) {
  document.documentElement.lang = lang;
  translatableElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      // Add fade animation for text change
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = translations[lang][key];
        el.style.opacity = 1;
      }, 200);
    }
  });
}

// --- Click to Copy Logic ---
const cmdRows = document.querySelectorAll(".cmd-row");

cmdRows.forEach((row) => {
  row.addEventListener("click", async () => {
    const code = row.querySelector("code").innerText;
    try {
      await navigator.clipboard.writeText(code);

      // Visual feedback
      const originalBg = row.style.backgroundColor;
      row.style.backgroundColor = "rgba(34, 197, 94, 0.2)"; // Green tint
      row.style.transform = "scale(0.98)";

      setTimeout(() => {
        row.style.backgroundColor = originalBg;
        row.style.transform = "scale(1)";
      }, 200);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  });
});
