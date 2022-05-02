import React, {useEffect, useState} from "react";
import {CountriesType} from "../api/fake.api/users.api";
import api from "../api";
import UserOld from "./UserOld";


const UsersOld = () => {

    const [countries, setCountries] = useState <Array<CountriesType> | undefined>(undefined);

    useEffect(() => {
        api.users.fetchAll().then((data: any) => setCountries(data));
    }, [])

    return (
        <div>
            {countries && countries.map((country) => (
                <UserOld countryy={country} key={country._id}/>
            ))}
        </div>
    );
};

export default UsersOld;
