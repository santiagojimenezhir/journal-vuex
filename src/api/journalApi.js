import axios from "axios";

const journalApi = axios.create({
    baseURL: "https://vue-demos-c7666-default-rtdb.firebaseio.com",
    params: `:id`,
});

export default journalApi;