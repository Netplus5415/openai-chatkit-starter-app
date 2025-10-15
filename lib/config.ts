// lib/config.ts
import type { ColorScheme, StartScreenPrompt } from "@openai/chatkit";

/** ID du workflow ChatKit (exposé côté client) */
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

/** Endpoint Next.js (côté serveur) qui crée la session ChatKit */
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

/** Prompts d'écran d'accueil (pas de `title` dans ce type) */
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    prompt:
      "Guide-moi étape par étape pour débloquer une marque sur Amazon avec une facture conforme.",
  },
  {
    prompt:
      "Propose une stratégie de sourcing sécurisée (factures compatibles Amazon, retours maîtrisés).",
  },
  {
    prompt:
      "Diagnostique un refus de déblocage et liste les actions correctives rapides.",
  },
];

/** Texte placeholder de l’input */
export const PLACEHOLDER_INPUT =
  "Décris ton cas (ASIN, contexte, objectif)…";

/** Message d’accueil */
export const GREETING =
  "Espace Membres — Tonton JEF, votre expert en arbitrage Amazon.";

/**
 * Thème UI. On retourne `any` pour rester compatible avec toutes les versions
 * de `@openai/chatkit` (évite les erreurs TS sur les propriétés de thème).
 */
export const getThemeConfig = (theme: ColorScheme): any => ({
  colorScheme: theme, // "light" | "dark"
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : 4,
    },
    accent: {
      primary: "#FF7D07",
      level: 2,
    },
  },
  radius: "round",
  density: "comfortable",
});

