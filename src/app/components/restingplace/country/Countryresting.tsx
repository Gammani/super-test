import React from "react";
import s from "./Countryresting.module.css"
import Namecountry from "./namecountry/Namecountry";

const Countryresting = () => {
    return (
        <div className={s.coutryresting}>
            <Namecountry />
            <Namecountry />
        </div>
    )
}

export default Countryresting;