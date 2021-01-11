import mongoose,{Schema,Document} from 'mongoose'
import isEmail from 'validator/lib/isEmail'
import {generatePasswordHash} from "../utils";


export interface IUser extends Document{
    email:string;
    fullname:string;
    password:string;
    confirmed:boolean;
    avatar?:string;
    confirm_hash?:string;
    last_seen?:Date;


}

const UserSchema = new Schema({
    email: {
        type:String,
        required:'Email address is required',
        validate:[isEmail,'Invalid Email'],
        unique:true

    },
    fullname: {
        type:String,
        required:'FullName is required'

    },
    password: {
        type:String,
        required:'Password is required'

    },
    confirmed: {
        type:Boolean,
        default:false
    },
    avatar: String,
    confirm_hash: String,
    last_seen: {
       type: Date,
       default:new Date()
    },
        attachments: {type: Schema.Types.ObjectId, ref: "UploadFile"}
},
    {
    timestamps:true,


});


UserSchema.pre<IUser>("save", async function (next) {
    const user = this;

    if (!user.isModified("password")) {
        return next();
    }


    user.password = await generatePasswordHash(user.password);
    user.confirm_hash = await generatePasswordHash(new Date().toString());
});


const UserModal = mongoose.model<IUser>('User',UserSchema)

export default UserModal