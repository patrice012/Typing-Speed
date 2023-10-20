import { FaCarSide } from "react-icons/fa";
import { PiCarProfileThin } from "react-icons/pi";
export const MainContent = () => {
    return (
        <section className="mainContent">
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
            <section className="mainContent--text">
                <div className="text-container">
                    <p className="text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quidem laborum ullam expedita iusto, excepturi
                        consectetur qui repudiandae quasi blanditiis, quia
                        voluptatum id labore aspernatur iure ipsa. Labore
                        laboriosam consectetur ab cumque quos, nulla praesentium
                        perspiciatis porro, facilis nesciunt dolore cupiditate
                        aliquid, perferendis non odio quae eaque ipsam.
                        Molestiae, similique tempora?
                    </p>
                </div>
            </section>
            <section className="mainContent--input">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered "
                />
            </section>
            <div>
                <button className="btn">
                    Leave the Race
                </button>
            </div>
        </section>
    );
};
