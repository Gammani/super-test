import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.login}>
                <button>
                    <div className={s.logon}>
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className={s.text}>Личный кабинет</div>
                </button>
            </div>
        </div>
    )
}

export default Header;