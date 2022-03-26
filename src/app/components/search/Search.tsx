import React from "react";
import s from "./Search.module.css";
import Expression from "./expression/Expression";
import Choice from "./сhoice/Choice";

const Search = () => {
    return (
        <div className={s.search}>
            <Expression />
            <Choice />
        </div>
    )
}

export default Search;