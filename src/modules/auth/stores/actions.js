// export const myAction = async ({ commit }) => {
//   console.log(
//     "Se coloca commit como atributo por que es lo que mas importa, sin embrago uede ser context"
//   );
// };

/**
 * Create user
 */

import authApi from "@/api/authApi";

export const CreateUser = async({ commit }, user) => {
    const { name, email, password } = user
    try {
        const { data } = await authApi.post(":signUp", { email, password, returnSecureToken: true })
        const { idToken, refreshToken } = data
        await authApi.post(":update", { displayName: name, idToken })
        delete user.password
        commit('loginUser', { user, idToken, refreshToken })
        return { ok: true }
    } catch (error) {
        return { ok: false, message: error.response.data.error.message }
    }
};
export const SignInUser = async({ commit }, user) => {
    const { email, password } = user
    try {
        const { data } = await authApi.post(":signInWithPassword", { email, password, returnSecureToken: true })
        const { idToken, refreshToken, displayName } = data
        user.name = displayName

        commit('loginUser', { user, idToken, refreshToken })

        return { ok: true }
    } catch (error) {

        return { ok: false, message: error.response.data.error.message }
    }
};


export const CheckAuthentication = async({ commit }) => {
    const idToken = localStorage.getItem('idToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!idToken) {
        commit('logout')
        return { ok: false, message: 'Sin Token' }
    }

    try {

        const { data } = await authApi.post(':lookup', { idToken })
        const { displayName, email } = data.users[0]

        const user = {
            name: displayName,
            email
        }

        commit('loginUser', { user, idToken, refreshToken })

        return {
            ok: true,
            message: ''
        }


    } catch (error) {
        commit('logout')
        return { ok: false, message: error.response.data.message }

    }

};

/**
 * Acción de carga de entries
 */

//Estas acciones impactan a la base de datos si son de put,put,patch,delete
/**
 *
 * Puede ser acciones asincronas que para modificar al state deben pasar por el commit mutation
 * Esto quiere decir que para afectar nuestro state se debe efectuar un commit mutation
 * y la mutation afectaria nuestro estate
 */