import React from 'react';
import {Alert, Block, Button} from "../../../Components";
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";

const LoginForm = props => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
    }=props
    return (
        <div>
            <div className="auth__top">
                <h2>Մուտք</h2>
                <p>Խնդում ենք մուտքագրել ձեր տվյալերը</p>
            </div>
            <Block>
                <form onSubmit={handleSubmit} className={'login_form'}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Մուտքանուն"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <Alert severity="error" >Error</Alert>
                    <TextField
                        error={true}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Գաղտնաբառ"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {/*<Alert severity="success" >{message}</Alert>*/}

                    <Button onClick={handleSubmit} color={'primary'} variant="contained" size={'large'} >Մուտք</Button>

                    <Link className="auth__register-link" to="/signup">
                        Գրանցում
                    </Link>
                </form>
            </Block>
        </div>
    );
};

export default LoginForm;