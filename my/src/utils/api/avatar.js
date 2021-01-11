import { axios } from "../../core";

export default {
    show:() => axios.get("/avatar"),
    send: (attachments) => axios.post("/avatar", {attachments})
};