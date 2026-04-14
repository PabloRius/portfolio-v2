// ---------------------------------------------------------------------------
// Re-export shared types
// ---------------------------------------------------------------------------
export { DEFAULT_LANG } from "./types";
export type { Lang } from "./types";

// ---------------------------------------------------------------------------
// UI module imports
// ---------------------------------------------------------------------------
import { about } from "./modules/about";
import { actions } from "./modules/actions";
import { detail } from "./modules/detail";
import { footer } from "./modules/footer";
import { hero } from "./modules/hero";
import { nav } from "./modules/nav";
import { projectsPage } from "./modules/projects-page";
import { sections } from "./modules/sections";

// ---------------------------------------------------------------------------
// Assemble the full ui object from each module
// ---------------------------------------------------------------------------
export const ui = {
  en: {
    ...nav.en,
    ...hero.en,
    ...about.en,
    ...sections.en,
    ...actions.en,
    ...footer.en,
    ...detail.en,
    ...projectsPage.en,
  },
  es: {
    ...nav.es,
    ...hero.es,
    ...about.es,
    ...sections.es,
    ...actions.es,
    ...footer.es,
    ...detail.es,
    ...projectsPage.es,
  },
  fr: {
    ...nav.fr,
    ...hero.fr,
    ...about.fr,
    ...sections.fr,
    ...actions.fr,
    ...footer.fr,
    ...detail.fr,
    ...projectsPage.fr,
  },
} as const;

export type TranslationKey = keyof (typeof ui)["en"];

// ---------------------------------------------------------------------------
// Content module imports
// ---------------------------------------------------------------------------
import { education } from "./content/education";
import { experience } from "./content/experience";
import { projects } from "./content/projects";

// ---------------------------------------------------------------------------
// Assemble the full content object from each module
// ---------------------------------------------------------------------------
export const content = {
  en: {
    projects: projects.en,
    experience: experience.en,
    education: education.en,
  },
  es: {
    projects: projects.es,
    experience: experience.es,
    education: education.es,
  },
  fr: {
    projects: projects.fr,
    experience: experience.fr,
    education: education.fr,
  },
} as const;

// ---------------------------------------------------------------------------
// Helper: get a UI string (falls back to English if key missing in lang)
// ---------------------------------------------------------------------------
import type { Lang } from "./types";

export function t(lang: Lang, key: TranslationKey): string {
  return (ui[lang] as Record<string, string>)[key] ?? ui["en"][key];
}

// ---------------------------------------------------------------------------
// Helper: get translated item content by slug
// ---------------------------------------------------------------------------
type Section = "projects" | "experience" | "education";

export function getItemContent<S extends Section>(
  lang: Lang,
  section: S,
  slug: string,
) {
  const items = content[lang][section] as unknown as Array<
    { slug: string } & Record<string, unknown>
  >;
  return (
    items.find((i) => i.slug === slug) ??
    (
      content["en"][section] as unknown as Array<
        { slug: string } & Record<string, unknown>
      >
    ).find((i) => i.slug === slug)
  );
}
