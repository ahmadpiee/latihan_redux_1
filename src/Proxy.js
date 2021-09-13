import axios from "axios";

const URL = "https://randomuser.me/api/";

export default axios.create({
    baseURL: URL,
});

export const endPoint = {};
