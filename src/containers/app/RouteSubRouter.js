import React,{component} from 'react';
import {Route} from 'react-router-dom';

const RouteSubRouter = route=>{
    return(
        <Route
            path={route.path}
            exact={route.exact}
            render={props=>(
                // route.private
                // ?
                //   Auth.isUserAuthenticated() ? (
                //     <route.component {...props} routes={route.routes} />
                //   ) : (
                //     <Redirect
                //       to={{
                //         pathname: "/signup/login",
                //         state: { from: props.location }
                //       }}
                //     />
                //   )
                // :
                <route.component {...props} routes={route.routes} />
              )}
        />
    );
}
export default RouteSubRouter