/**
 * Client-side i18n helpers.
 * Runs in the browser; imported by the LangToggle component and the inline
 * <script> blocks that live in each page.
 */

import type { Lang } from "./translations";
import { content, DEFAULT_LANG, ui } from "./translations";

export const STORAGE_KEY = "lang";

export function getStoredLang(): Lang {
  if (typeof localStorage === "undefined") return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "es" ? "es" : stored === "fr" ? "fr" : "en";
}

export function setStoredLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

/**
 * Walk the DOM and replace text of elements with:
 *  - data-i18n="key"                        → UI string from ui[lang]
 *  - data-i18n-content="section:slug:field" → per-item field from content[lang]
 */
export function applyTranslations(lang: Lang) {
  const dict = ui[lang] as Record<string, string>;

  // UI strings
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n!;
    if (key in dict) el.textContent = dict[key];
  });

  // aria-label attributes
  document.querySelectorAll<HTMLElement>("[data-i18n-label]").forEach((el) => {
    const key = el.dataset.i18nLabel!;
    if (key in dict) el.setAttribute("aria-label", dict[key]);
  });

  // Per-item content: data-i18n-content="section:slug:field"
  // Special case: data-i18n-content="experience:slug:bullet:N"
  document
    .querySelectorAll<HTMLElement>("[data-i18n-content]")
    .forEach((el) => {
      const parts = el.dataset.i18nContent!.split(":");
      const [section, slug, field, indexStr] = parts as [
        "projects" | "experience" | "education",
        string,
        string,
        string | undefined,
      ];
      const items = content[lang][section] as unknown as Array<
        Record<string, unknown>
      >;
      const item =
        items.find((i) => (i as { slug: string }).slug === slug) ??
        (
          content["en"][section] as unknown as Array<Record<string, unknown>>
        ).find((i) => (i as { slug: string }).slug === slug);
      if (!item) return;
      if (indexStr !== undefined) {
        // array field like bullets[N]
        const arr = item[field] as string[] | undefined;
        if (arr) el.textContent = arr[Number(indexStr)] ?? "";
      } else if (field in item) {
        el.textContent = item[field] as string;
      }
    });
}
