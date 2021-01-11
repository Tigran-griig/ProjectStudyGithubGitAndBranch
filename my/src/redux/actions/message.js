import { messagesApi } from "../../utils/api";

const Actions = {
    setMessages: items => ({
        type: "MESSAGES:SET_ITEMS",
        payload: items
    }),
    setMyMessages: items => ({
        type: "MESSAGES:MY_ITEMS",
        payload: items
    }),
    addMessage: message => (dispatch) => {
            dispatch({
                type: "MESSAGES:ADD_MESSAGE",
                payload: message
            });
    },
    fetchSendMessage: ({ text,phone, price, aboutProducts, attachments }) => dispatch => {

        return messagesApi.send(text,phone, price, aboutProducts,attachments);
    },
    setIsLoading: bool => ({
        type: "MESSAGES:SET_IS_LOADING",
        payload: bool
    }),
    removeMessageById: id => dispatch => {
        if (window.confirm("Դուք իսկապես ուզում եք ջնջձլ հայտարարությունը")) {
            messagesApi
                .removeById(id)
                .then(({ data }) => {
                    dispatch({
                        type: "MESSAGES:REMOVE_MESSAGE",
                        payload: id
                    });
                })
                .catch(() => {
                    dispatch(Actions.setIsLoading(false));
                });
        }
    },
    fetchMessages:()=> dispatch=> {
        messagesApi
            .getAll()
            .then(({ data }) => {
            dispatch(Actions.setMessages(data));
            dispatch(Actions.setIsLoading(true))

            }).catch(()=>{
            dispatch(Actions.setIsLoading(false))
        })

    },
    fetchMyMessages:()=> dispatch=> {
        messagesApi
            .show()
            .then(({ data }) => {
                dispatch(Actions.setMyMessages(data));
                dispatch(Actions.setIsLoading(true))

            }).catch(()=>{
            dispatch(Actions.setIsLoading(false))
        })

    },

};

export default Actions;