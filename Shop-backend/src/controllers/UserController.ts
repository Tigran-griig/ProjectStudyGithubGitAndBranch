import express from 'express';
import bcrypt from 'bcrypt'
import {UserModal} from "../models";
import {createJWTToken} from "../utils";
import {IUser} from "../models/User";
import {validationResult} from "express-validator";
const mailer = require('../utils/nodemailer/mailer')

class UserController {


    show = (req:express.Request,res:express.Response) => {
        const id: string = req.params.id

          UserModal.findById(id,(err,user)=>{
              if(err){
                  return  res.status(404).json({
                      message:'User Not found'

                  })
              }

              res.json(user)

          })

    }

    getMe = (req:any,res:express.Response) => {
        const id: string = req.user._id;

        UserModal.findById(id,(err,user)=>{
            if(err || !user){
                return  res.status(404).json({
                    message:'User Not found'

                })
            }

            res.json(user)

        })
    }

create = (req:express.Request,res:express.Response) => {
    const postData = {
        email: req.body.email,
        fullname: req.body.fullname,
        password: req.body.password,
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
    }


    const user = new UserModal(postData);
    user.save().then((obj: any) => {
        mailer(obj)
   return res.json(obj)

    }).catch(reason => {
        res.status(500).json({
            status: "error",
            message: reason,
        });
})

}
    verify = (req: express.Request, res: express.Response): void => {
        // @ts-ignore
        const hash: string = req.query.hash;

        if (!hash) {
            res.status(422).json({ errors: "Invalid hash" });
        } else {
            UserModal.findOne({ confirm_hash: hash }, (err: any, user: IUser) => {
                if (err || !user) {
                    return res.status(404).json({
                        status: "error",
                        message: "Hash not found",
                    });
                }

                user.confirmed = true;
                user.save((err: any) => {
                    if (err) {
                        return res.status(404).json({
                            status: "error",
                            message: err,
                        });
                    }

                    res.json({
                        status: "success",
                        message: "Ձեր գրանցումե հաստատվեց",
                    });
                });
            });
        }
    };


    delete = (req:express.Request,res:express.Response) => {
        const id: string = req.params.id
        UserModal.findOneAndRemove({_id:id})
            .then(user =>{
               if(user) {
                    res.json({
                        message: `User ${user.fullname} removed`
                    })
                }
        }).catch(() =>{
            res.json({
                message:'User not found'
            })
            })

    }
    login = (req: express.Request, res: express.Response) => {
        const postData: { email: string; password: string } = {
            email: req.body.email,
            password: req.body.password,
        };

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        } else {
            UserModal.findOne({email: postData.email}, (err, user: IUser) => {
                if (err || !user) {
                    return res.status(404).json({
                        message: "User not found",
                    });
                }
                if (!user.confirmed) {
                    return res.status(203).json({
                        status: 'unconfirmed',
                        message: "Խնդրում ենք հաստատել ձեր գրանցումը"
                    })
                }
                if (user.confirmed && bcrypt.compareSync(postData.password, user.password)) {
                    const token = createJWTToken(user);
                    res.json({
                        status: "success",
                        token,
                    });
                } else {
                    res.status(403).json({
                        status: "error",
                        message: "Incorrect password or email",
                    });
                }
            });
        }
    };

}
export default UserController