import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";
const VALID_MODES = ["light", "dark", "system"];

const getStoredMode = () => {
  if (typeof window === "undefined") return "dark";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (VALID_MODES.includes(stored)) return stored;
  } catch {
    // localStorage can throw in private mode / sandboxed frames — fall through.
  }
  // Dark-first default. Mirrors the pre-paint script in index.html.
  return "dark";
};

const systemPrefersDark = () =>
  typeof window !== "undefined" &&
  !!window.matchMedia?.("(prefers-color-scheme: dark)").matches;

const resolveTheme = (mode) =>
  mode === "system" ? (systemPrefersDark() ? "dark" : "light") : mode;

export const useTheme = () => {
  const [mode, setMode] = useState(getStoredMode);

  useEffect(() => {
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", resolveTheme(mode) === "dark");
    };

    applyTheme();
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Ignore persistence failures.
    }

    // When following the OS, react live to system theme changes.
    if (mode !== "system" || typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", applyTheme);
    return () => media.removeEventListener("change", applyTheme);
  }, [mode]);

  const changeMode = useCallback((next) => {
    if (VALID_MODES.includes(next)) setMode(next);
  }, []);

  return { mode, setMode: changeMode };
};
