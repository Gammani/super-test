import React from "react";
import s from "./Searchfirstdata.module.css";

const Searchfirstdata = () => {
    return (
        <div className={s.search_first_data}>
            <input type="text" placeholder="dd-mm-yy" size={10}></input>
        </div>
    )
}

export default Searchfirstdata;