import RegisterForm from "../Component/RegisterForm";
import {withFormik} from "formik";
import {validateRegisterForm} from "../../../utils/helpers";
import store from "../../../redux/store";
import {userActions} from "../../../redux/actions/index";


export default  withFormik({
    mapPropsToValues: () => (
        {
            fullname: '',
            email: '',
            password: '',
            password_2: ''}
        ),

    validate: values => {
        const errors = {};
        Object.keys(values).forEach(key => validateRegisterForm[key] && validateRegisterForm[key](values,errors))

            return errors
        },


    handleSubmit: (values, { setSubmitting,props}) => {
        store
            .dispatch(userActions.fetchUserRegister(values))
            .then(data => {
                props.history.push('/signup/verify');
                setSubmitting(false);
            })
            .catch(err => {
                // if (get(err, 'response.data.message.errmsg', '').indexOf('dup') >= 0) {
                //     openNotifiaction({
                //         title: 'Սխալ',
                //         text: 'Այդպիսի էլ-հասցե  արդեն գոյություն ունի',
                //         type: 'error',
                //         duration: 5000
                //     });
                // } else {
                //     openNotifiaction({
                //         title: 'Սխալ',
                //         text: 'Պորձեք մի պոքր ուշ․․․ Սերվերաին խնիրներ են առաջացել',
                //         type: 'error',
                //         duration: 5000
                //     });
                // }

                setSubmitting(false);
            });
    },

    displayName: 'RegisterForm',
})(RegisterForm);