import axios from "axios";

const authApi = axios.create({
    baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
    params: {
        key: "AIzaSyBlwrGTltTewqz4Wj-vGClo2Pddwu5P0Y8"
    },
});

export default authApi;