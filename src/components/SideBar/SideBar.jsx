import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsKeyboardFill } from 'react-icons/bs';
import { MdOutlineScore, MdSpeed } from "react-icons/md";
import { BiHelpCircle } from 'react-icons/bi';

export const SideBar = () => {
    return (
        <div className="drawer-side sidebar">
            <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
            ></label>

            <div className="sidebar--menu  min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <div className="sidebar--user">
                    <span>
                        <FaUserAlt />
                    </span>
                    {/* <Link to='/'>Log In</Link> */}
                    <Link to="/">Log in</Link>
                </div>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="#">
                                <BsKeyboardFill />
                                Practice
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <FaUserAlt />
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <BiHelpCircle />
                                Help
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <MdOutlineScore />
                                Hight scores
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="#">
                                <MdSpeed />
                                Typing speed
                            </NavLink>
                        </li>
                        {/* <li>
                            <NavLink to="#">Layouts</NavLink>
                        </li> */}
                    </ul>
                </nav>
            </div>
        </div>
    );
};
