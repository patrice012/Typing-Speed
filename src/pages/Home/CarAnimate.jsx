import { FaCarSide } from "react-icons/fa";
import { PiCarProfileThin } from "react-icons/pi";

export const CarAnimate = () => {
    return (
        <section className="mainContent--car">
            <div className="mainContent--car--preview">
                <div className="car--preview--user">
                    <FaCarSide />
                </div>
                <div className="car--preview--bot">
                    <PiCarProfileThin />
                </div>
            </div>
        </section>
    );
};
