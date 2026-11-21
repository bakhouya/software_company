

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme-mode";

export default function ThemeToggle() {

    const [theme, setTheme] = useState<Theme>(() => {
        try {
            const savedTheme = localStorage.getItem(STORAGE_KEY);
            return savedTheme === "dark" ? "dark" : "light";
        } catch {return "light";}
    });

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        try {localStorage.setItem(STORAGE_KEY, theme);} catch {}
    }, [theme]);

    const toggleTheme = () => {setTheme((prev) => prev === "light" ? "dark" : "light");};

    return (
        <button
            type="button"
            className="theme_toggle radius_large bg_hover"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={theme === "light" ? "Dark mode" : "Light mode"}>
            <span className="theme_toggle_icon">
                {theme === "light" ? (
                    <Moon size={19} strokeWidth={1.8} />
                ) : (
                    <Sun size={19} strokeWidth={1.8} />
                )}
            </span>
        </button>
    );
}
