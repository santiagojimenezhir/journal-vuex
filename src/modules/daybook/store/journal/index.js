import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

const journalModule = {
    namespaced: true, //Para que sirve ?
    actions,
    getters,
    mutations,
    state,
};

export default journalModule;

/**
 * Plantilla homologada de improtación de vuex
 * cascaron con el seaccede de forma organizada a cada elemtno como actions getters mutation y state
 */