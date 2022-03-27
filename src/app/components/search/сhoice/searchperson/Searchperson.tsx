import React from "react";
import s from "./Searchperson.module.css";

const Searchperson = () => {
    return (
        <div className={s.search_person}>
            <input type="text" placeholder="сколько человек" size={12}></input>
        </div>
    )
}

export default Searchperson;