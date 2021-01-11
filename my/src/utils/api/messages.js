import { axios } from "../../core";

export default {
    getAll:() => axios.get("/messages"),
    show:() => axios.get("/messages/user"),
    removeById: id => axios.delete("/messages/" + id),
    send: (text, phone,price,aboutProducts,  attachments) =>
        axios.post("/messages", {
            text: text,
            phone:phone,
            price:price,
            aboutProducts:aboutProducts ,
            attachments
        })
};