import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Button} from '../'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {NumberFormatCustom} from '../../utils/helpers'
import {UploadField} from "@navjobs/upload";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import {Link} from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    flags:{
        width:'200px',
        height:"70px"
    },
    btn:{
        marginLeft: "50px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
    },
    textare:{
        marginTop:'10px'
    },
    block:{
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        }
}));


export default function FormattedInputs({
                                            setValuePhone,
                                            handleChang,
                                            valuePhone,
                                            values,
                                            onSelectFiles,
                                            sendMessage

                                        }) {
    const classes = useStyles();





    return (
        <div className={classes.block}>
            <div >
            <div className={classes.flags}>
            <PhoneInput
                placeholder="Գրեք ձեր հեռախոսահամարը"
                value={valuePhone}
                onChange={setValuePhone}
                />
            {isValidPhoneNumber(valuePhone)}
            </div>
            <div>
            <TextField
                label="Գրեք ապրանքի գինը"
                value={values.price}
                onChange={handleChang}
                name="price"
                InputProps={{
                    inputComponent: NumberFormatCustom,
                }}
            />
            </div>
        <div className={classes.textare}>
            <TextareaAutosize
                rowsMax={5}
                aria-label="maximum height"
                placeholder="Տեղեկություն ապրանքի մասին"
                value={values.textAboutProduct}
                onChange={handleChang}
                name="textAboutProduct"

            />
        </div>
           <div>
               <TextareaAutosize
                rowsMax={5}
                aria-label="maximum height"
                placeholder="Լրացուցիչ տեղեկություն"
                value={values.textAdditionProduct}
                onChange={handleChang}
                name="textAdditionProduct"

            />

           </div>
            <h2>Ավելացրեք Նկարներ</h2>
            <div>
                <UploadField
                    onFiles={onSelectFiles}
                    containerProps={{
                        className: 'resume_import'
                    }}
                    containerProps={{
                        className: "chat-input__actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif,.bmp",
                    }}
                >
                    <IconButton >
                        <AddCircleOutlineIcon fontSize={"large"} />
                    </IconButton>
                </UploadField>
            </div>
               <Link to={'/ads/add'}>
                <Button className={classes.btn} onClick={sendMessage} color={'primary'} variant="contained"  >Հայտարարել</Button>
               </Link>
               </div>
        </div>
    );
}
