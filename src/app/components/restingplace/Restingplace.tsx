import React from "react";
import s from "./RestingPlace.module.css";
import Countryresting from "./country/Countryresting";

const RestingPlace = () => {
    return (
        <div className={s.restingPlace}>
            <Countryresting />
            <Countryresting />
        </div>
    )
}

export default RestingPlace;