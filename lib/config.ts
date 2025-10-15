// src/lib/config.ts (ou lib/config.ts selon l'import)
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// IMPORTANT : garder un tableau (même vide)
export const STARTER_PROMPTS: StartScreenPrompt[] = [];

export const PLACEHOLDER_INPUT = "Décrivez votre cas (ASIN, contexte, objectif)…";
export const GREETING = "Espace Membres — Tonton JEFF, votre expert en arbitrage Amazon.";

export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#FF7D07",
      level: 1,
    },
  },
  radius: "round",
});
