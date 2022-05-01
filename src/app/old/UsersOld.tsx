import React, {useEffect, useState} from "react";
import {UsersType} from "../api/fake.api/users.api";
import api from "../api";
import UserOld from "./UserOld";


const UsersOld = () => {

    const [users, setUsers] = useState<Array<UsersType> | undefined>(undefined);

    useEffect(() => {
        api.users.fetchAll().then((data: any) => setUsers(data));
    }, [])

    return (
        <div>
            {users && users.map((user) => (
                <UserOld user={user} key={user._id}/>
            ))}
        </div>
    );
};

export default UsersOld;
