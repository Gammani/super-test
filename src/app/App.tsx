import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./componenst/ui/NavBar";
import Login from "./layouts/Login";

const App = () => {
    return (
        <div className={"d-flex justify-content-center"}>
            <NavBar />
            <Routes>
            <Route path={"/login"}>
                <Route path={":type"} element={<Login/>}/>
                <Route path={""} element={<Login/>}/>
            </Route>
            </Routes>
        </div>
    );
}

export default App;