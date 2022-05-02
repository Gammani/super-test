import React from "react";


type PropsType = {
    id: string
}

const ImageOld: React.FC<PropsType> = ({id}) => {

    const string1: string = "1.jpg"
    const string2: string = "2.jpg"
    const string3: string = "3.jpg"

    return (

        <div>
            <img src={require(`../assets/img/${id}/${string1}`)} alt={"img"} width={"300px"}/>
            <img src={require(`../assets/img/${id}/${string2}`)} alt={"img"} width={"300px"}/>
            <img src={require(`../assets/img/${id}/${string3}`)} alt={"img"} width={"300px"}/>
        </div>
    );
};

export default ImageOld;
