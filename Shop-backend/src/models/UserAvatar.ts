// @ts-ignore
import mongoose, { Schema, Document } from "mongoose";

export interface IAvatar extends Document {
}

const UserAvatarSchema = new Schema(
    {
        user: { type: Schema.Types.ObjectId, ref: "User", require: true },
        attachments: [{ type: Schema.Types.ObjectId, ref: "UploadFile" }]
        },
    {
        timestamps: true,
        usePushEach: true,
    }
);

const AvatarModel = mongoose.model<IAvatar>("UserAvatar.ts", UserAvatarSchema);

export default AvatarModel;