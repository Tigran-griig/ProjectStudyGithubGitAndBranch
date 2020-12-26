import RegisterForm from "../Component/RegisterForm";
import {withFormik} from "formik";
import validateForm from "../../../utils/helpers/valiateForm";

export default  withFormik({
    mapPropsToValues: () => (
        {
            fullName: '',
            email: '',
            password: '',
            password_2: ''}
        ),

    validate: values => {
        const errors = {};
        Object.keys(values).forEach(key => validateForm[key] && validateForm[key](values,errors))

            return errors
        },


    handleSubmit: (values, { setSubmitting}) => {
             console.log(values)
            setSubmitting(false);
    },

    displayName: 'RegisterForm',
})(RegisterForm);