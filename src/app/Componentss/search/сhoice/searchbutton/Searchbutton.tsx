import React from "react";
import s from "./Searchbutton.module.css";

const Searchbutton = () => {
    return (
        <div className={s.search_button}>
            <input type="button" name="search" value="Поиск" />
        </div>
    )
}

export default Searchbutton;