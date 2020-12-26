import React from 'react';
import {LoginForm,RegisterForm} from "../../modules";
import './Auth.scss'
import { Route } from "react-router-dom";


const Auth = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route exact path="/signin" component={LoginForm} />
                <Route exact path="/signup" component={RegisterForm} />
            </div>
        </section>
    );
};

export default Auth;