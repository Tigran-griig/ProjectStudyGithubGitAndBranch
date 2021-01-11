export default {
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
            }
    }
};




