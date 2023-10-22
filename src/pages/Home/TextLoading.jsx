import { TextContext } from "../../contexts/textContext";
import { useContext } from "react";

export const TextLoading = () => {
    const { text } = useContext(TextContext);
    return (
        <section className="mainContent--text">
            <div className="text-container">
                <p className="text">
                    {text}
                </p>
            </div>
        </section>
    );
} 