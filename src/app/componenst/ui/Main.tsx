import React, {useEffect, useState} from "react";
import api from "./../../api";
import {CountriesType} from "../../api/fake.api/countries.api";

const Main = () => {

    const [countries, setCountries] = useState<Array<CountriesType> | undefined>(undefined);



    useEffect(() => {
        api.countries.fetchAll().then((data: any) => setCountries(data));
    }, [])



    if(countries) {
        return(
            <div>
                {countries && countries.map(country => (
                    <div key={country._id}>{country.name} это <b>{country.description}</b></div>
                ))}
            </div>
        );
    }

    return <h1>loading...</h1>
};

export default Main;
