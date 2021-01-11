import express from 'express'
import {UserModal} from "../models";


export default (req: express.Request, _: express.Response, next: express.NextFunction) => {
    if (req.user) {
        UserModal.findOneAndUpdate(
            // @ts-ignore
            { _id: req.user.id },
            {
                last_seen: new Date(),
            },
            { new: true },
        );
    }
    next();
};