import React from "react";
import s from "./Searchseconddata.module.css";

const Searchseconddata = () => {
    return (
        <div className={s.search_second_data}>
            <input type="text" placeholder="dd-mm-yy" size={10}></input>
        </div>
    )
}

export default Searchseconddata;