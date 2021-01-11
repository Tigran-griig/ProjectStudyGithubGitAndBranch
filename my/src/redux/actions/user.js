import {userApi} from "../../utils/api";
import {openNotification} from '../../utils/helpers'

const actions ={

    setUserData:data =>({
        type:'USER:SET_DATA',
        payload:data
    }),
    setIsAuth: bool => ({
        type: 'USER:SET_IS_AUTH',
        payload: bool,
    }),
    fetchUserData: () => dispatch => {
        userApi
            .getMe()
            .then(({ data }) => {
                dispatch(actions.setUserData(data));
            })
            .catch(err => {
                if (err.response.status === 403) {
                    dispatch(actions.setIsAuth(false));
                    delete window.localStorage.token;
                }
            });
    },
    fetchUserLogin: (postData) => dispatch => {
        return userApi.login(postData).then(({data})=>{
            const {token} = data
            if(data.status === 'unconfirmed'){
                openNotification({

                    title: 'Մուտքը չհաջողվեց',
                    text:'Խնդրում ենք հաստատել ձեր գրանցումը',
                    type: 'error'

                })
            }
            if(data.status==='success'){
                openNotification({
                    title: 'Մուտքը հաջողվեց',
                    type: 'success'
                })
                window.axios.defaults.headers.common['token'] = token;
                window.localStorage['token'] = token;
                dispatch(actions.fetchUserData())

            }
            return data


        }).catch(()=>{
            openNotification({
                title:'Սխալ Մուտքի ժամաակ!',
                text:'Սխալ մուտքանուն կամ գաղտնաբառ',
                type:'error'

            })
        })

    },
    fetchUserRegister: postData => () => {
        return userApi.register(postData);
    },
}

export default actions