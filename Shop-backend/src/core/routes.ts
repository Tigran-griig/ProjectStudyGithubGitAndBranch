import bodyParser from "body-parser";
import express from "express";
import {checkAuth, updateLastSeen} from "../middlewares";
import {UploadFileCtrl, UserCtrl,MessageCtrl,UserAvatarCtrl} from "../controllers";
import {loginValidations,registerValidations} from "../utils/validations";

import multer from "./multer";

export default (app: express.Express) => {

    const UserController = new UserCtrl()
    const MessageController = new MessageCtrl()

    const UploadFileController = new UploadFileCtrl()
const UserAvatarController =new UserAvatarCtrl()

    app.use(bodyParser.json())
    app.use(updateLastSeen)
    app.use(checkAuth)

    app.get("/", (_: express.Request, res: express.Response) => {
        res.send("Hello, World!");
    });

    app.get("/user/me",UserController.getMe)
    app.get("/user/verify",UserController.verify)
    app.post("/user/registration",registerValidations,UserController.create)
    app.post("/user/login",loginValidations,UserController.login)
    app.get("/user/:id",UserController.show)
    app.delete("/user/:id",UserController.delete)


    app.get("/messages", MessageController.index);
    app.get("/messages/user", MessageController.show);
    app.post("/messages", MessageController.create);
    app.delete("/messages/:id", MessageController.delete);

    app.post("/avatar", UserAvatarController.create);
    app.get("/avatar", UserAvatarController.show);


    app.post("/files", multer.single("file"), UploadFileController.create);
    app.delete("/files", UploadFileController.delete);


}