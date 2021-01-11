const initialState = {
    items: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case 'AVATAR:SET_ITEMS':
            return {
                ...state,
                items: payload,
            };

        default:
            return state;
    }
};