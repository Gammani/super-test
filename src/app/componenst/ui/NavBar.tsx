import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    return(
        <ul className={"nav"}>
            <li className={"nav-item"}>
                <Link className={"nav-link"} aria-current={"page"} to={"/"}>Главное</Link>
            </li>
            <li className={"nav-item"}>
                <Link className={"nav-link"} aria-current={"page"} to={"/search"}>Поиск</Link>
            </li>
            <li className={"nav-item"}>
                <Link className={"nav-link"} aria-current={"page"} to={"/countries"}>Страны</Link>
            </li>
            <li className={"nav-item"}>
                <Link className={"nav-link"} aria-current={"page"} to={"/messages"}>Истории</Link>
            </li>
            <li className={"nav-item"}>
                <Link className={"nav-link"} aria-current={"page"} to={"/login"}>Личный кабинет</Link>
            </li>
        </ul>
    );
};

export default NavBar;
