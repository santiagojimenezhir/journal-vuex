// export const myAction = async ({ commit }) => {
//   console.log(
//     "Se coloca commit como atributo por que es lo que mas importa, sin embrago uede ser context"
//   );
// };

import journalApi from "@/api/journalApi";

/**
 * Acción de carga de entries
 */
export const loadEntries = async({ commit }) =>
    /* context */
    {
        if (!data) {
            commit("setEntry", []);
        }
        const { data } = await journalApi.get("/entries.json");
        const entries = [];
        /**
         * Converit un objeto de objetos a arreglo de objetos, para trbajaar de mejor forma la data
         */
        for (let id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id],
            });
        }
        commit("setEntry", entries);
    };
/**
 * Acción de carga de entries
 */
export const updateEntries = async({ commit }, entry) => {
    //Desesctruturación de objeto para obtener lo que se requiere
    console.log(entry);
    //Obtener
    const { id, date, picture, text } = entry;
    const dataSave = { date, picture, text };
    //Llamar a api para actualizar datos correspondoentes
    journalApi.put(`/entries/${id}.json`, dataSave);
    // console.log(resp.data);

    //Hacer commmit de cruce para actualice la entry que fue actualziada para que se actualicen los datos
    commit("updateEntry", {...entry });
};
/**
 * Acción de carga de entries
 */
export const createEntries = async({ commit }, entry) => {
    const { date, picture, text } = entry; //se dessectrura la entrada

    const dataToCreate = { date, picture, text }; // asginamos los valores que tendra nuestro objeto
    const { data } = await journalApi.post("/entries.json", dataToCreate); // se inserta en FB

    dataToCreate.id = data.name; // se obtiene el ID de la entrada

    commit("addEntry", dataToCreate); // commit mutation para alterra el arreglo de entries

    return data.name; // se regresa el id para hacer maniobras a futuro con el "se redirigira de pagian con este ID"
};

export const deleteEntries = async({ commit }, id) => {
    await journalApi.delete(`/entries/${id}.json`); // se inserta en FB

    commit("deleteEntry", id);

    return id;
};
//Estas acciones impactan a la base de datos si son de put,put,patch,delete
/**
 *
 * Puede ser acciones asincronas que para modificar al state deben pasar por el commit mutation
 * Esto quiere decir que para afectar nuestro state se debe efectuar un commit mutation
 * y la mutation afectaria nuestro estate
 */