import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import { Error404 } from "../Pages/404/404";
import {MainPage} from "../Pages/MainPage/MainPage";
import {SidePage} from "../Pages/SidePage/SidePage";

export const Routes = () => {

    return(
        <div>
            <Switch>
                <Route path={'/'} exact render={()=><Redirect to={'/main'}/>} />
                <Route path={'/main'} render={()=><MainPage/>}/>
                <Route path={'/in/:cityName'} render={()=><SidePage/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}