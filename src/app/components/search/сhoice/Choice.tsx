import React from "react";
import s from "./Choice.module.css";
import Searchcountry from "./search_country/Searchcountry";
import Searchfirstdata from "./searchfirstdata/Searchfirstdata";
import Searchseconddata from "./searchseconddata/Searchseconddata";
import Searchperson from "./searchperson/Searchperson";
import Searchbutton from "./searchbutton/Searchbutton";

const Choice = () => {
    return (
        <div className={s.search_search}>
            <Searchcountry />
            <Searchfirstdata />
            <Searchseconddata />
            <Searchperson />
            <Searchbutton />
        </div>
    )
}

export default Choice;