// export const myAction = async ({ commit }) => {
//   console.log(
//     "Se coloca commit como atributo por que es lo que mas importa, sin embrago uede ser context"
//   );
// };

/**
 * Acción de carga de entries
 */
export const loadEntries = async(
    /* context */
    { commit }
) => {
    console.log(commit);
};
/**
 * Acción de carga de entries
 */
export const updateEntries = async(
    /* context */
    { commit }
) => {
    console.log(commit);
};
/**
 * Acción de carga de entries
 */
export const createEntries = async(
    /* context */
    { commit }
) => {
    console.log(commit);
};

//Estas acciones impactan a la base de datos si son de put,put,patch,delete
/**
 *
 * Puede ser acciones asincronas que para modificar al state deben pasar por el commit mutation
 * Esto quiere decir que para afectar nuestro state se debe efectuar un commit mutation
 * y la mutation afectaria nuestro estate
 */