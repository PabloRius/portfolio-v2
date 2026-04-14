/**
 * Client-side i18n helpers.
 * Runs in the browser; imported by the LangToggle component and the inline
 * <script> blocks that live in each page.
 */

import type { Lang } from "./translations";
import { DEFAULT_LANG, ui } from "./translations";

export const STORAGE_KEY = "lang";

export function getStoredLang(): Lang {
  if (typeof localStorage === "undefined") return DEFAULT_LANG;
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "es" ? "es" : "en";
}

export function setStoredLang(lang: Lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

/**
 * Walk the DOM and replace the text content of every element that has a
 * `data-i18n="key"` attribute with the corresponding translation string.
 */
export function applyTranslations(lang: Lang) {
  const dict = ui[lang] as Record<string, string>;
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n!;
    if (key in dict) el.textContent = dict[key];
  });

  // Also update aria-label attributes marked with data-i18n-label
  document.querySelectorAll<HTMLElement>("[data-i18n-label]").forEach((el) => {
    const key = el.dataset.i18nLabel!;
    if (key in dict) el.setAttribute("aria-label", dict[key]);
  });
}
