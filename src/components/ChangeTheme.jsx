import { useEffect, useState } from "react";

export const ChangeTheme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const [checkboxStatus, setCheckboxStatus] = useState(false);

    const toggleTheme = () => {
        setTheme((theme) => {
            return theme == "light" ? "dark" : "light";
        });
    };

    useEffect(() => {
        const overrideDefaultTheme = localStorage.getItem(
            "overrideDefaultTheme"
        );
        if (overrideDefaultTheme == null || overrideDefaultTheme == undefined) {
            const themePreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(() => {
                return themePreference ? "dark" : "light";
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("overrideDefaultTheme", true);
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.documentElement.setAttribute("data-theme", localTheme);
        setCheckboxStatus(theme == "dark");
    }, [theme]);

    return (
        <div className="changeTheme">
            <label className="">
                <span className="label-text">{theme || ""}</span>
                <input
                    onChange={toggleTheme}
                    type="checkbox"
                    className="toggle"
                    checked={checkboxStatus}
                />
            </label>
        </div>
    );
};
