import { FaCarSide } from "react-icons/fa";
import { PiCarProfileThin } from "react-icons/pi";

export const CarAnimate = ({ xoffset, botXoffset }) => {
    return (
        <section className="mainContent--car">
            <div className="mainContent--car--preview">
                <div className="car--preview--user">
                    <FaCarSide
                        id="user-car"
                        style={{ position: "absolute", left: xoffset + "px" }}
                    />
                </div>
                <div className="car--preview--bot">
                    <PiCarProfileThin
                        id="bot-car"
                        style={{
                            position: "absolute",
                            left: botXoffset + "px",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
