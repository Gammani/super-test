import React from "react";
import s from "./Namecountry.module.css";

const Namecountry = () => {
    return (
        <div className={s.namecountry}>
            <div className={s.namecountry_icon}>
                <i className="bi bi-card-image" style={{color: "red"}}  ></i>
            </div>
            <div className={s.namecountry_country}>
                Country
            </div>
        </div>
    )
}

export default Namecountry;