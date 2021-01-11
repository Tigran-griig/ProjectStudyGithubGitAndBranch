import mongoose, { Schema, Document } from "mongoose";

export interface IMessage extends Document {
    text: string;
    phone:number;
    price:number;
    aboutProducts:string;
}

const MessageSchema = new Schema(
    {
        text: { type: String, require: Boolean },
        phone:{ type: Number, require: Boolean },
        price:{ type: Number, require: Boolean },
        aboutProducts:{ type: String, require: Boolean },
        user: { type: Schema.Types.ObjectId, ref: "User", require: true },
        attachments: [{ type: Schema.Types.ObjectId, ref: "UploadFile" }],
    },
    {
        timestamps: true,
        usePushEach: true,
    }
);

const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);

export default MessageModel;