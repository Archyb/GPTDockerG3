import axios from "axios";

export const fetchApi= axios.get("http://localhost::8000/api/chat").then((res) => {
    console.log(res.data)}).catch((err) => {    console.log(err)    })
