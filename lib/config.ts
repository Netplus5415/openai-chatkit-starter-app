// lib/config.ts
import type { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

/** ID du workflow ChatKit (public côté client) */
export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

/** Endpoint Next.js pour créer une session ChatKit côté serveur */
export const CREATE_SESSION_ENDPOINT = "/api/create-session";

/** Laisse un tableau (même vide) pour éviter les erreurs .map() */
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    title: "Débloquer une marque",
    prompt:
      "Guide-moi étape par étape pour débloquer une marque sur Amazon avec une facture conforme.",
  },
  {
    title: "Sourcing 500–3000 €",
    prompt:
      "Propose une stratégie de sourcing sécurisée (factures compatibles Amazon, retours maîtrisés).",
  },
  {
    title: "Refus Amazon",
    prompt:
      "Diagnostique un refus de déblocage et liste les actions correctives rapides.",
  },
];

export const PLACEHOLDER_INPUT = "Décris ton cas (ASIN, contexte, objectif)…";

export const GREETING =
  "Espace Membres — Tonton JEF, votre expert en arbitrage Amazon.";

/** Thème : fourni en fonction du mode (light/dark) demandé par ChatKit */
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
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
