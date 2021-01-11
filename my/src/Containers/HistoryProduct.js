import React, {useEffect, useMemo} from 'react';
import {ForAll} from '../Components/index'
import Grid from "@material-ui/core/Grid";
import {messageActions} from "../redux/actions";
import {connect} from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";


const HistoryProduct = ({
                            fetchMyMessages,
                            myItems,
                            isLoading,
                            removeMessageById,
                            files,
                            fetchSendMessage,
                            avatar
                        }) => {



    useEffect(() => {
            fetchMyMessages();

    },[myItems.length])

const handleRemoveProduct = id =>{
     removeMessageById(id)
    fetchMyMessages();

}



    return (
        <>
            {isLoading ? (
                    <Grid container spacing={4}>
                        {myItems.map(item=> <ForAll key={item._id} handleRemoveProduct={handleRemoveProduct} avatar={avatar} item={item} />)}
                    </Grid>
                ):
                <CircularProgress />}
        </>
    );
};

export default connect(
    ({  message, user, files,avatar }) => ({
        myItems: message.history,
        files: files.items,
        user: user.data,
        isLoading:message.isLoading,
        avatar:avatar.items
    }),
    messageActions,
)(HistoryProduct);