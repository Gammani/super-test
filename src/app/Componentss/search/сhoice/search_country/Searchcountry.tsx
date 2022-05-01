import React from "react";
import s from "./Searchcountry.module.css";

const Searchcountry = () => {
    return (
        <div className={s.search_country}>
            <input type="text" placeholder="Выберите место"></input>
        </div>
    )
}

export default Searchcountry;