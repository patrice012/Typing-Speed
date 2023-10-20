import { SideBar } from "../../components/SideBar/SideBar";
import { MainContent } from "./MainContent";

export const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
               <MainContent/>
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>
            <SideBar/>
        </div>
    );
}