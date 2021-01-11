import React from 'react';
import {Alert, Block, Button} from "../../../Components";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";

const RegisterForm = props => {
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
                <h2>Գրանցում</h2>
                <p>Խնդրում ենք լրացնել բոլոր դաշտերը</p>
            </div>
            <Block>
                <form onSubmit={handleSubmit} className={'login_form'}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="fullname"
                        label="Ամբողջ անունը"
                        type="text"
                        id="fullname"
                        autoComplete="current-password"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.fullname && touched.fullname && <Alert severity="error">{errors.fullname}</Alert>}
                    {!touched.name ? "" : errors.name}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Մուտքանուն(գործող էլ-հասցե)"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <Alert severity="error">{errors.email}</Alert>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password"
                        label="Գաղտնաբառ"
                        type="password"
                        autoComplete="current-password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password && touched.password && <Alert severity="error">{errors.password}</Alert>}
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        name="password_2"
                        label="Կրկնել գաղտնաբառ"
                        type="password"
                        autoComplete="current-password"
                        value={values.password_2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.password_2 && touched.password_2 && <Alert severity="error">{errors.password_2}</Alert>}
                    <Button  onClick={handleSubmit} color={'primary'} variant="contained" size={'large'} >Գրանցվել</Button>
                    <Link className="auth__register-link" to="/signin">
                        Մուտք
                    </Link>
                </form>
            </Block>
        </div>
    );
};

export default RegisterForm;