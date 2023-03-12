import axios from "@/resources/axios";

export default {
    getAll() {
        return axios.get(`users`);
    },
    getOne(id) {
        return axios.get(`users/${id}`);
    }
};