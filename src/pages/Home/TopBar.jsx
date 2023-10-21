import { CountDown } from "../../components/CountDown";
import { ChangeTheme } from "../../components/ChangeTheme";
import { BiMenuAltLeft } from "react-icons/bi";


const CloseMenu = () => {
    return (
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <BiMenuAltLeft />
        </label>
    );
}

export const TopBar = () => {
    return (
        <section className="topBar--container">
            <div className="topBar">                
                <CloseMenu/>
                <CountDown />
                <ChangeTheme />
            </div>
        </section>
    );
};
