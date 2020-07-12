
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routers from './routers';
import RouteSubRouter from './RouteSubRouter';

class App extends Component{ 
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    {routers.map((route,key)=><RouteSubRouter key={key} {...route} />)}
                    <Route />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App