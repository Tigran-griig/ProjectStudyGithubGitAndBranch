import express from "express";

import {MessageModel, UserModal} from "../models";
import { IMessage } from "../models/Message";

class MessageController {


    index = (req: express.Request, res: express.Response): void => {
        // @ts-ignore


        MessageModel.find()
            .populate(["user", "attachments"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({
                        status: "error",
                        message: "Messages not found",
                    });
                }
                res.json(messages);
            });
    };

    show = (req: express.Request, res: express.Response): void => {
        // @ts-ignore
        const userId: string = req.user._id;


        MessageModel.find({user: userId})
            .populate(["user", "attachments"])
            .exec(function (err, messages) {
                if (err) {
                    return res.status(404).json({
                        status: "error",
                        message: "Messages not found",
                    });
                }
                res.json(messages);
            });
    };

    create = (req: express.Request, res: express.Response): void => {
        // @ts-ignore
        const userId: string = req.user._id;

        const postData = {
            text: req.body.text,
            phone: req.body.phone,
            price: req.body.price,
            aboutProducts: req.body.aboutProducts,
            attachments: req.body.attachments,
            user: userId,
        };

        const message = new MessageModel(postData);


        message
            .save()
            .then((obj: IMessage) => {
                obj.populate(
                    "user attachments",
                    (err: any, message: IMessage) => {
                        if (err) {
                            return res.status(500).json({
                                status: "error",
                                message: err,
                            });
                        }


                        res.json(message);

                    }
                );
            })
            .catch((reason) => {
                res.json(reason);
            });
    };

    delete = (req: express.Request, res: express.Response) => {
        const id: string = req.params.id
        MessageModel.findOneAndRemove({_id: id})
            .then(message => {
                if (message) {
                    res.json({
                        message: `Message removed`
                    })
                }
            }).catch(() => {
            res.json({
                message: 'Messages not found'
            })
        })

    }
}

export default MessageController;