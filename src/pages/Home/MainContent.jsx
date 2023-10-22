import { TextLoading } from "./TextLoading";
import { CarAnimate } from "./CarAnimate";
import { UserInput } from "./UserInput";
import { TopBar } from "./TopBar";
import { useState, useRef, useContext } from "react";
import { TextContext } from "../../contexts/textContext";

export const MainContent = () => {
    const [xoffset, setXoffset] = useState(0);
    const lastInput = useRef("");
    const index = useRef(0);
    const { text } = useContext(TextContext);
    const carStep = useRef(0);

    // const botStep = useRef(0);
    // const [botXoffset, setbotXoffset] = useState(0);


    // // moving the bot
    // const botCar = document.getElementById("bot-car");
    // const botCarWidth = botCar?.clientWidth;
    // // botStep.current = (parentWidth - botCarWidth) / text.length;
    // setbotXoffset((prev) => prev + botStep.current);

    const handleInput = (value) => {
        const userCar = document.getElementById("user-car");
        const parentWidth = userCar?.parentElement?.clientWidth;
        const userCarWidth = userCar?.clientWidth;
        // const currentPosition = userCar?.getBoundingClientRect()?.left;
        carStep.current = (parentWidth - userCarWidth) / text.length;

        if (text.substring(0, index.current + 1).includes(value)) {
            if (lastInput.current.length < value.length) {
                setXoffset((prev) => prev + carStep.current);
            } else if (lastInput.current.length > value.length)
                setXoffset((prev) => prev - carStep.current);
            lastInput.current = value;
            index.current++;
        }

        if (value.length == 0) {
            setXoffset(0);
            index.current = 0;
        }
    };

    return (
        <div className="mainContent--container">
            <TopBar />
            <section className="mainContent">
                <CarAnimate xoffset={xoffset} botXoffset={8} />
                <TextLoading />
                <UserInput handleInput={handleInput} />
                <div>
                    <button className="btn">Leave the Race</button>
                </div>
            </section>
        </div>
    );
};
