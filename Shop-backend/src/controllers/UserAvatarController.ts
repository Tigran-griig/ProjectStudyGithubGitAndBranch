import express from "express";

import {AvatarModal} from "../models";
import {IAvatar} from "../models/UserAvatar";

class UserAvatarController {


    show = (req: express.Request, res: express.Response): void => {
        // @ts-ignore
        const userId: string = req.user._id;


        AvatarModal.find({user: userId})
            .populate(["user", "attachments"])
            .exec(function (err, avatar:IAvatar) {
                if (err) {
                    return res.status(404).json({
                        status: "error",
                        message: "Avatar not found",
                    });
                }
                res.json(avatar);
            });
    };

    create = (req: express.Request, res: express.Response): void => {
        // @ts-ignore
        const userId: string = req.user._id;

        const postData = {
            attachments: req.body.attachments,
            user: userId,
        };

        const avatar = new AvatarModal(postData);


        avatar
            .save()
            .then((obj: IAvatar) => {
                obj.populate(
                    "user attachments",
                    (err: any, avatar: IAvatar) => {
                        if (err) {
                            return res.status(500).json({
                                status: "error",
                                message: err,
                            });
                        }


                        res.json(avatar);

                    }
                );
            })
            .catch((reason) => {
                res.json(reason);
            });
    };

}

export default UserAvatarController;