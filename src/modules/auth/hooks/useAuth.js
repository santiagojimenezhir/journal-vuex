import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {
    const store = useStore()

    const createUser = async(user) => {
        const resp = await store.dispatch('auth/CreateUser', user)
        return resp
    }
    const loginUser = async(user) => {
        const resp = await store.dispatch("auth/SignInUser", user)
        return resp
    }

    const checkAuthStatus = async() => {
        const resp = await store.dispatch('auth/CheckAuthentication')
        return resp
    }
    const logout = () => {
        store.commit('auth/logout')
        store.commit('journal/clearEntries')
    }
    return {
        checkAuthStatus,
        createUser,
        loginUser,
        logout,

        authStatus: computed(() => store.getters['auth/currentState']),
        userName: computed(() => store.getters['auth/userName'])

    }
}

export default useAuth