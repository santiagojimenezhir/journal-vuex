// export const myMutation = (state) => {
//   console.log(
//     "No es asincrono es sincrono"
//   );
// };

export const setEntry = (state, entries) => {
    state.entries = [...state.entries, ...entries]; // este hay que averigurar que hace con la funcion de destrcutirazacion de spret
    state.isLoading = false; //Se setea a falos porque en teoria ya cargo la data
};
export const updateEntry = (state, entry) => {
    const idx = state.entries.map((e) => e.id).indexOf(entry.id);
    state.entries[idx] = entry;
};
export const addEntry = (state, entry) => {
    state.entries = [entry, ...state.entries]; // el arreglo de entradas sera igual a mi prime entrada y los demas despues , es decir se agrega nuestro entrada nueva arriba de todo
};
export const deleteEntry = (state, id) => {
    /**
     * Con el filter se puede buscar todo el arreglo que no sea el id que le estamos mandando
     * es decir, se filtraran todas las antradas menos la que concincida con el id, la omitira de nuestro arreglo
     */
    state.entries = state.entries.filter((entry) => entry.id !== id); // Arreglo ya sin la entrada que eliminamos
};
export const clearEntries = (state) => {
    state.entries = [];
};

/**
 * Cuando la base resuleva paso a mutations
 * Son sincronzas y las mutaciones sirven para alterar o modificar el state, el state es reactivo
 *
 */