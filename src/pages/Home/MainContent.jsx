import { TextLoading } from "./TextLoading";
import { CarAnimate } from "./CarAnimate";
import { UserInput } from "./UserInput";
import { TopBar } from "./TopBar";

export const MainContent = () => {
    return (
        <div className="mainContent--container">
            <TopBar />
            <section className="mainContent">
                <CarAnimate />
                <TextLoading />
                <UserInput />
                <div>
                    <button className="btn">Leave the Race</button>
                </div>
            </section>
        </div>
    );
};
