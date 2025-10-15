// src/lib/config.ts
import { ColorScheme, StartScreenPrompt, ThemeOption } from "@openai/chatkit";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

// Espace membres : pas de prompts d'accueil
export const STARTER_PROMPTS: StartScreenPrompt[] = [];

export const PLACEHOLDER_INPUT =
  "Pose ta question à Tonton JEFF";

export const GREETING =
  "Espace Membres — Tonton JEFF, votre expert en arbitrage Amazon.";

// Thème sobre + accent AMZSC
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    grayscale: {
      hue: 220,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
    accent: {
      primary: "#FF7D07", // couleur de marque
      level: 1,
    },
  },
  radius: "round",
  // (Tu peux explorer d'autres options sur chatkit.studio/playground si besoin)
});
