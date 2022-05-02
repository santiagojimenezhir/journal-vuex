// export const myGetter = (state) => {
//   console.log(
//     "No es asincrono, solo es una función que cumple una acción"
//   );
// };

/**Busqueda por todo las entradas que conincidan con el termino  */
export const getEntriesByTerm =
    (state) =>
    (term = "") => {
        if (term.length === 0) return state.entries;

        return state.entries.filter((entry) =>
            entry.text.toLowerCase().includes(term.toLowerCase())
        );
    };

/**Búsqueda por un id en particulas, solo regresa una entry */
export const getEntryById =
    (state) =>
    (id = "") => {
        const entry = state.entries.find((entry) => entry.id === id);
        if (!entry) return;
        return {...entry }; //Pruab lo que dijo fernando sobre que se pued econfundir
    };

/**
 *
 * Obtener infomación del state para procesar y utlizarla a la conveniencia
 */