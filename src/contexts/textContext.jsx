import { createContext, useState } from "react";

const TextContext = createContext();

const TextProvider = ({ children }) => {
    const initailData =
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit.\
    Quidem laborum ullam expedita iusto, excepturi consectetur\
    qui repudiandae quasi blanditiis, quia voluptatum id labore\
    aspernatur iure ipsa. Labore laboriosam consectetur ab\
    cumque quos, nulla praesentium perspiciatis porro, facilis\
    nesciunt dolore cupiditate aliquid, perferendis non odio\
    quae eaque ipsam. Molestiae, similique tempora?";


    const [text, setText] = useState('hello world');

    const addText = (newText) => {
        setText(newText);
    };

    return (
        <TextContext.Provider value={{ text, addText }}>
            {children}
        </TextContext.Provider>
    );
};

export {TextProvider, TextContext}
