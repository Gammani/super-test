import React from "react";
import s from "./Navheader.module.css"

const Navheader = () => {
    return (
        <div className={s.nav_header}>
            <a href="">Главная</a>
            <a href="">Поиск</a>
            <a href="">Страны</a>
            <a href="">Истории</a>
        </div>
    )
}

export default Navheader;