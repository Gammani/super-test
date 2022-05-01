import React from "react";
import {UsersType} from "../api/fake.api/users.api";
import ImageOld from "./ImageOld";

type PropsType = {
    user: UsersType
}

const UserOld: React.FC<PropsType> = ({user}) => {
    return (
        <div>
            <h1>{user.user}</h1>
            <div>
                <h3>location: </h3>
                <span><b>country:</b> {user.location.country} <b>city:</b> {user.location.city} <b>address:</b> {user.location.address}</span>
            </div>
            <div>
                <h4>rate: {user.rate}</h4>
            </div>
            <div>
                <b>description: </b> {user.description}
            </div>
            <div>
                <ul><b>review: </b> {user.review.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <h3>cost: {user.cost}</h3>
            <ImageOld id={user._id}/>
        </div>
    );
};

export default UserOld;
