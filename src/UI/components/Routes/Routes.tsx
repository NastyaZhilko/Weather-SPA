import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {MainPage} from "../Pages/MainPage/MainPage";
import {SidePage} from "../Pages/SidePage/SidePage";

export const Routes = () => {

    return(
        <div>
            <Switch>
                <Route path={'/'} exact render={()=><Redirect to={'/main'}/>} />
                <Route path={'/main'} render={()=><MainPage/>}/>
                <Route path={'/in/:cityName'} render={()=><SidePage/>}/>
            </Switch>
        </div>
    )
}