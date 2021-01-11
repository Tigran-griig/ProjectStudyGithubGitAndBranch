import React, {useEffect, useState} from 'react';
import {Block} from "../../../Components";
import {userApi} from "../../../utils/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Button} from "../../../Components";

const renderTextInfo = ({ hash, verified }) => {
    if (hash) {
        if (verified) {
            return {
                status: 'success',
                title: 'Պատրաստ է!',
                message: 'Ձեր գրանցումե հաստատվեց',
            };
        } else {
            return {
                status: 'error',
                title: 'Սխալ',
                message: 'դուք սղալ խեշ եք ոգտագործել',
            };
        }
    } else {
        return {
            status: 'info',
            title: 'Հաստատեք գրանցումը',
            message: 'Ստուգեք դձեր Էլ-հասցեին ուղարկվել է հաստատման լինկ',
        };
    }
};


const CheckInfo = ({ location, history }) => {
    const hash = location.search.split('hash=')[1];
    const [verified, setVerified] = useState(false);
    const [checking, setChecking] = useState(!!hash);
    const [info, setInfo] = useState(renderTextInfo({ hash, checking, verified }));

    const setStatus = ({ checking, verified }) => {
        setInfo(renderTextInfo({ hash, checking, verified }));
        setVerified(verified);
        setChecking(checking);
    };
    useEffect(() => {
        if (hash) {

            userApi
                .verifyHash(hash)
                .then(() => {
                    setStatus({ verified: true, checking: false });
                })
                .catch(() => {
                    setStatus({ verified: false, checking: false });
                });
        }
    }, []);

    return (
        <Block>
            {!checking ?
                (<div >
                       <h2>
                            {info.title}
                        </h2>
                        <p variant="body2" color="textSecondary" component="p">
                            {info.message}
                        </p>
                    { info.status === 'success' && verified &&
                    (
                    <Button  color={"primary"} onClick={() => history.push('/signin')}>
                        Մուտք
                    </Button>
                    )}
            </div>
                )

                :
                (
                <CircularProgress />
            )}
        </Block>
    );
};

export default CheckInfo;
