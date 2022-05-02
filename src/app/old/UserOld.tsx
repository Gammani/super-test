import React from "react";
import {CountriesType} from "../api/fake.api/users.api";
import ImageOld from "./ImageOld";

type PropsType = {
    countryy: CountriesType
}

const UserOld: React.FC<PropsType> = ({countryy}) => {
    return (
        <div>
            <h1>{countryy.user}</h1>
            <div>
                <h3>location: </h3>
                <span><b>country:</b> {countryy.location.country} <b>city:</b> {countryy.location.city} <b>address:</b> {countryy.location.address}</span>
            </div>
            <div>
                <h4>rate: {countryy.rate}</h4>
            </div>
            <div>
                <b>description: </b> {countryy.description}
            </div>
            <div>
                <ul><b>review: </b> {countryy.review.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <h3>cost: {countryy.cost}</h3>
            <ImageOld id={countryy._id}/>
        </div>
    );
};

export default UserOld;
