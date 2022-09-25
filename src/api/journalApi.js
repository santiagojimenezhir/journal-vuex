import axios from "axios";

const journalApi = axios.create({
    baseURL: "https://vue-demos-c7666-default-rtdb.firebaseio.com",
    params: `:id`,

});

journalApi.interceptors.request.use((config) => {
    config.params = {
        auth: localStorage.getItem('idToken')
    }
    return config
})

export default journalApi;