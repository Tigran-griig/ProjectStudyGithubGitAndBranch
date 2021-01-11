import React, {useEffect} from 'react'
import {Auth, OnlyOurUsers, ForAll, Home} from "./pages";
import {Route,Switch} from "react-router-dom";
import {connect} from "react-redux";
import {avatarActions} from "./redux/actions";


const App = props => {
    const { isAuth } = props;

  return (
    <div className="wrapper">
        <Switch>
            {!isAuth &&
                <Route
                    exact
                    path={["/signin", "/signup", "/signup/verify"]}
                    component={Auth}
                />
            }
            <Route
                path="/"
                render={() => (isAuth ? <Home ><OnlyOurUsers /></Home> :<Home ><ForAll /></Home> )}
            />
        </Switch>
    </div>
  );
}


export default connect(({user,avatar}) => (
    {isAuth:user.isAuth
    }))(App);
