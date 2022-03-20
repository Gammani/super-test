import React from "react";
import s from "./Header.module.css";
import Navheader from "./navheader/Navheader";
import Navlogin from "./navlogin/Navlogin";

const Header = () => {
    return (
        <div className={s.header}>
            <Navheader />
            <Navlogin />
        </div>
    )
}

export default Header;