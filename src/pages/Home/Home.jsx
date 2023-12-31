import { SideBar } from "../../components/SideBar/SideBar";
import { MainContent } from "./MainContent";
import { TextProvider } from "../../contexts/textContext";
// import { HiArrowRightOnRectangle } from "react-icons/hi2";
// import { HiArrowLeftOnRectangle } from "react-icons/hi2";

export const Home = () => {
    return (
        <div className="drawer lg:drawer-open main">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content main--container">
                <TextProvider>
                    <MainContent />
                </TextProvider>
            </div>
            <SideBar />
        </div>
    );
};
