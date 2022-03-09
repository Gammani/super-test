import React from 'react';
import s from './App.module.css';
import Header from "./components/Header";
import Search from "./components/Search";
import RestingPlace from "./components/Restingplace";
import Trips from "./components/Trips";

function App() {
    return (
        <div className={s.app}>
            <Header />
            <Search />
            <RestingPlace />
            <Trips />
        </div>
    );
}

export default App;