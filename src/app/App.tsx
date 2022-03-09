import React from 'react';
import s from './App.module.css';
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import RestingPlace from "./components/restingplace/Restingplace";
import Trips from "./components/trips/Trips";

function App() {
    return (
        <div className={s.background}>
            <div className={s.app}>
                <Header/>
                <Search/>
                <RestingPlace/>
                <Trips/>
            </div>
        </div>
    );
}

export default App;