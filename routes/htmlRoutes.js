import React, { Component } from "react"
import { Route, Switch } from "react-router-dom";
import LoginButton from "../client/src/components/loginbutton";

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route component={LoginButton} exact path="/" />
            </Switch>
        )
    }
}
export default Router