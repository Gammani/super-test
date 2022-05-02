import React from "react";
import {CountriesType} from "../../api/fake.api/users.api";
import ImageOld from "../../old/ImageOld";

type PropsType = {
    country: CountriesType
}

const Country: React.FC<PropsType> = ({country}) => {

    return (
        <div>
            <h1>{country.user}</h1>
            <div>
                <h3>location: </h3>
                <span><b>country:</b> {country.location.country} <b>city:</b> {country.location.city} <b>address:</b> {country.location.address}</span>
            </div>
            <div>
                <h4>rate: {country.rate}</h4>
            </div>
            <div>
                <b>description: </b> {country.description}
            </div>
            <div>
                <ul><b>review: </b> {country.review.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <h3>cost: {country.cost}</h3>
            <ImageOld id={country._id}/>
        </div>
    );
};

export default Country;
