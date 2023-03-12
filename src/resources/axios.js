import axios from "axios";

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});
