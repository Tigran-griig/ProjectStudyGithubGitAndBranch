import {InfoForm as FormGroup, Dialog, Card} from "../Components";

import React, { useState} from 'react';
import {filesApi} from "../utils/api";
import {filesActions, messageActions} from "../redux/actions";
import {connect} from "react-redux";
import {Route} from "react-router-dom";



const InfoForm = (
    {
        files,
        fetchSendMessage,
        setAttachments,
        addItems,

    }) => {
    const [valuePhone, setValuePhone] = useState('')

    const [values, setValues] = useState({
        price: '0',
        textAboutProduct:'',
        textAdditionProduct:''
    });

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
    const handleChang = (event) => {
        setValues({
            ...values,
            ...valuePhone,
            [event.target.name]: event.target.value,
        });
    };

    const sendMessage = () => {
            fetchSendMessage({
                text: values.textAboutProduct,
                phone:valuePhone,
                price:values.price,
                aboutProducts:values.textAdditionProduct,
                attachments: files.map(file => file.uid),
            })
            setValues({
                price: '0',
                textAboutProduct:'',
                textAdditionProduct:''
            })

        setValuePhone('')
            setAttachments([]);
        }




    return (
        <>
        <FormGroup
            handleChang={handleChang}
            setValuePhone={setValuePhone}
            valuePhone={valuePhone}
            values={values}
            onSelectFiles={onSelectFiles}
            sendMessage={sendMessage}
        />
        <Route path={'/ads/add'}><Dialog  title={' Ձեր ապրանքը հաջողութ յամբ ավելացվել է'} text={'Կարող եք այն տեսնել պատմություն բաժնում կամ գտնել գլխաոր եջում'} /></Route>
        </>
    )
};

export default connect(({  files, user,message }) => ({
        files: files.items,
        user: user.data,
    }),
    { ...messageActions, ...filesActions },
)(InfoForm)