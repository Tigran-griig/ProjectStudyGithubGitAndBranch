export default {
    fullName: (values,errors) => {
        if (!values.fullName) {
            errors.fullName = "Գրեք ձեր անունե կամ ազգանունը";
        }
    },
    email: (values,errors) => {

        if (!values.email) {
            errors.email = "Գրեք E-Mail";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Սխալ E-Mail";
         }

        },

        password: (values,errors) => {
            if (!values.password) {
                errors.password = "Գրել գաղտնաբառը";
            } else if (
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)
            ) {
                errors.password = "Շատ հեշտ գաղտնաբառ է";
            }
    },
        password_2: (values,errors) => {

            if (values.password_2 !== values.password) {
                errors.password_2 = "Գաղտնաբառերե չեն համապատասխանում";
            }


        }

};




