import React, {useEffect, useState} from "react";
import {UsersType} from "./api/fake.api/users.api";
import api from "./api/index";
import User from "./User";


const Users = () => {

    const [users, setUsers] = useState<Array<UsersType> | undefined>(undefined);

    useEffect(() => {
        api.users.fetchAll().then((data: any) => setUsers(data));
    }, [])

    return (
        <div>
            {users && users.map((user) => (
                <User user={user} key={user._id}/>
            ))}
        </div>
    );
};

export default Users;
