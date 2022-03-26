import React from "react";
import s from "./Navlogin.module.css"

const Navlogin = () => {
    return (
        <div className={s.nav_login}>
            <div className={s.nav_login_logo}>
                <i className="bi bi-file-earmark-person" style={{color: "red"}}></i>
            </div>
            <div className={s.header_login_text}>Личный кабинет</div>
        </div>
    )
}

export default Navlogin;