import React from 'react'
import {Routes} from "./UI/routes/Routes";
import {Header} from "./UI/pages/Header/Header";
import style from "./App.module.css"
import {Footer} from "./UI/pages/Footer/Footer";

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
