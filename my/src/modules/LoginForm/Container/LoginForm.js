import React from 'react';
import {withFormik} from "formik";
import LoginForm from "../Component/LoginForm";
import {validateLoginForm} from "../../../utils/helpers";
import store from "../../../redux/store";
import {userActions} from "../../../redux/actions/index";

export default  withFormik({
    enableReinitialize:true,
    mapPropsToValues: () =>({
        email:'',
        password:''
    }),

    validate: values => {
        const errors = {};
        Object.keys(values).forEach(key => validateLoginForm[key] && validateLoginForm[key](values,errors))

        return errors
    },

    handleSubmit: (values,{setSubmitting,props}) => {
        store.dispatch(userActions.fetchUserLogin(values))
            .then(({status}) =>{
                if(status === 'success'){
                    setTimeout(()=>{
                        props.history.push('/')

                    },150)
                }
                setSubmitting(false)
            }).catch(()=>{
            setSubmitting(false)

        })
    },
    displayName: 'LoginForm',
})(LoginForm);