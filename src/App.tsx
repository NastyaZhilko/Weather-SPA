import React from 'react'
import {Routes} from "./UI/Routes/Routes";
import {Header} from "./UI/Pages/Header/Header";
import style from "./App.module.css"
import {Footer} from "./UI/Pages/Footer/Footer";

function App() {
    return (
        <div className={style.body}>
            <Header/>
           <Routes/>
           <Footer/>
        </div>
    );
}

export default App;
