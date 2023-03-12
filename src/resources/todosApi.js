import axios from "@/resources/axios";

export default {
    getTodos(id, completed = 'all') {
        if(completed !== 'all') {
            return axios.get(`todos?userId=${id}&completed=${completed}`);
        }
        return axios.get(`todos?userId=${id}`);
    },
    create(todo) {
        return axios.post(`todos`, todo);
    },
};