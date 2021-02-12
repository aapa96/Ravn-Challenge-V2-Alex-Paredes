import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { HeaderComponent } from "../Components/Header";
import { PeoplePage } from "../Pages/people/index";
import { PersonPage } from "../Pages/person/index";
import '../styles/index.scss';

export const RouterApp = (props) => {


    return (

        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="people" />
                </Route>
                <Route path="/people">
                    <PeoplePage />
                </Route>
                <Route path="/person/:id">
                    <PersonPage />
                </Route>
            </Switch>
        </Router>

    )
}