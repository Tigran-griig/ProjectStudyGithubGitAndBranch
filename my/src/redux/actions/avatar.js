import {avatarApi} from "../../utils/api";
import store from "../store";

const Actions = {
    setAvatar: items => ({
        type: "AVATAR:SET_ITEMS",
        payload: items
    }),


    fetchAvatar:()=> dispatch=> {
        avatarApi
            .show()
            .then(({ data }) => {
                    // if (data.length) {
                    //         dispatch(Actions.setAvatar(data[0].attachments[0].url));
                    //
                    // }
        })

    },


};

export default Actions;