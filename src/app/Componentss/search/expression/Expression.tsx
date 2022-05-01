import React from "react";
import s from "./Expression.module.css";
import Firsttext from "./Firsttext/Firsttest";
import Secondtext from "./Secondtext/Secondtext";

const Expression = () => {
    return (
        <div className={s.search_text}>
            <Firsttext/>
            <Secondtext />
        </div>
    )
}

export default Expression;