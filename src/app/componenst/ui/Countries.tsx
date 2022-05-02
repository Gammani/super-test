import React, {useEffect, useState} from "react";
import {CountriesType} from "../../api/fake.api/users.api";
import api from "../../api";
import Country from "./Country";


const Countries = () => {

    const [countries, setCountries] = useState <Array<CountriesType> | undefined>(undefined);

    useEffect(() => {
        api.users.fetchAll().then((data: any) => setCountries(data));
    }, [])

    if(countries) {
        return (
            <div>
                {countries && countries.map((country) => (
                    <Country country={country} key={country._id}/>
                ))}
            </div>
        );
    }

return <h1>loading...</h1>
}



export default Countries;
