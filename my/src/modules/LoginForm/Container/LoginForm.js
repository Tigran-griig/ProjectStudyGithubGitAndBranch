import React from 'react';
import {withFormik} from "formik";
import validateForm from "../../../utils/helpers/valiateForm";
import RegisterForm from "../../RegisterForm/Component/RegisterForm";
import LoginForm from "../Component/LoginForm";

export default  withFormik({
    mapPropsToValues: () => (
        {
            email: '',
            password: '',
        }
    ),

    handleSubmit: (values, { setSubmitting}) => {
        console.log(values)
        setSubmitting(false);
    },

    displayName: 'LoginForm',
})(LoginForm);