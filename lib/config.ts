// lib/config.ts
// Nettoyé : aucun marqueur de diff, aucun « @@ … »
// Types en import "type" pour éviter tout import runtime inutile
import type { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

// Titre de l’app (affiché dans l’UI)
export const appTitle = "Tonton Jeff × AMZ SC";

// Thème (on reste large avec Partial pour éviter les erreurs de typage strict)
export const colorScheme: ColorScheme = "dark";
export const theme: Partial<ThemeOption> = {
  colorScheme,
  color: {
    accent: {
      // Ton orange brand
      primary: "#FF7D07",
      level: 2,
    },
  },
  radius: "round",
  density: "comfortable",
};

// Messages d’accueil et placeholder
export const greetingText =
  "Bienvenue ! Session Q&R — pose ta question, on attaque direct.";
export const placeholderText = "Écris ta question ici…";

// Prompts de démarrage (Start Screen)
export const startScreenPrompts: StartScreenPrompt[] = [
  {
    title: "Débloquer une marque",
    prompt:
      "Guide-moi étape par étape pour débloquer une marque sur Amazon via facture valide.",
  },
  {
    title: "Sourcing 500–3000 €",
    prompt:
      "Propose une stratégie de sourcing sécurisée (factures compatibles Amazon, retours faciles).",
  },
  {
    title: "Diagnostiquer un refus Amazon",
    prompt:
      "J’ai un refus de déblocage marque. Liste les causes probables et les actions correctives.",
  },
];

// (optionnel) Base API si tu proxifies ChatKit
export const chatkitApiBase =
  process.env.NEXT_PUBLIC_CHATKIT_API_BASE || undefined;

// Workflow (Agent Builder) – requis côté starter
export const workflowId = process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID || "";

// (optionnel) modèle si tu le forces via env
export const defaultModel = process.env.NEXT_PUBLIC_MODEL || undefined;
