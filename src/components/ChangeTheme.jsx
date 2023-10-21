import { useState } from "react";

export const ChangeTheme = () => {
    const[checked, setChecked] = useState(true)
    const toogleTheme = () => {
        setChecked(prev => !prev)
        document.documentElement.classList.add("dark");
    }
    return (
        <div className="changeTheme">
            <label className="">
                <span className="label-text">Dark</span>
                <input onChange={toogleTheme} type="checkbox" className="toggle" checked={checked} />
            </label>
        </div>
    );
}