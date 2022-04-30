import { createStore } from "vuex";
import journal from "../modules/daybook/store/jorunal";

const store = createStore({
    modules: {
        journal,
    },
});

export default store;