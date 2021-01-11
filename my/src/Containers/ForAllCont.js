import React, {useEffect} from 'react';
import {ForAll} from '../Components'
import Grid from "@material-ui/core/Grid";
import {messageActions} from "../redux/actions";
import {connect} from "react-redux";
import {messagesApi} from "../utils/api";
import CircularProgress from "@material-ui/core/CircularProgress";

const ForAllCont = ({
                        fetchMessages,
                        items,
                        isLoading,
                        removeMessageById,
                        files,
                        fetchSendMessage,
                        avatar,
                    }) => {



    useEffect(() => {
            fetchMessages();
            },[])

console.log(avatar)

    return (
        <>
        {isLoading ? (
            <Grid container spacing={4}>
                {items.map(item=>      <ForAll avatar={avatar} item={item} />)}

        </Grid>
            ):
                <CircularProgress />}
         </>
    );
};

export default connect(
    ({  message, user, files,avatar }) => ({
        items: message.items,
        files: files.items,
        user: user.data,
        isLoading:message.isLoading,
        avatar:avatar.items
    }),
    messageActions,
)(ForAllCont);