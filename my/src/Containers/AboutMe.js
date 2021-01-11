import React, {useEffect} from 'react'
import {AboutMe as BaseAboutMe} from "../Components";
import {avatarActions, filesActions} from "../redux/actions";
import {avatarApi, filesApi} from "../utils/api";
import {connect} from "react-redux";


const AboutMe = ({files,setAttachments,fetchAvatar,avatar}) => {
    const onSelectFiles = async files => {
        let uploaded = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const uid = Math.round(Math.random() * 1000);
            uploaded = [
                ...uploaded,
                {
                    uid,
                    name: file.name,
                    status: 'uploading',
                },
            ];
            setAttachments(uploaded);
            // eslint-disable-next-line no-loop-func
            await filesApi.upload(file).then(({ data }) => {
                uploaded = uploaded.map(item => {
                    if (item.uid === uid) {
                        return {
                            status: 'done',
                            uid: data.file._id,
                            name: data.file.filename,
                            url: data.file.url,
                        };
                    }
                    return item;
                });
            });
        }

        setAttachments(uploaded);
    };

  const  sendAvatar = () => {
      avatarApi.send(files.map(file => file.uid),)

  }

    useEffect(()=>{

        fetchAvatar()
    },[])
    return(
        <BaseAboutMe avatar={avatar} sendAvatar={sendAvatar} onSelectFiles={onSelectFiles} />
    )
}

export default connect(
    ({  files, user,avatar }) => ({
        files: files.items,
        user: user.data,
        avatar:avatar.items
    }),
    { ...filesActions,...avatarActions },
)(AboutMe)