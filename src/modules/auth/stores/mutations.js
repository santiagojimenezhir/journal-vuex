export const loginUser = (state, { user, idToken, refreshToken }) => {
    if (idToken) {
        localStorage.setItem('idToken', idToken)
        state.idToken = idToken
    }
    if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken)
        state.refreshToken = refreshToken
    }
    state.user = user
    state.status = 'authenticated'
};

export const logout = (state) => {
        state.user = null
        state.idToken = null
        state.refreshToken = null
        state.status = 'not-authenticated'
        localStorage.removeItem('idToken')
        localStorage.removeItem('resfreshToken')
    }
    /**
     * Cuando la base resuleva paso a mutations
     * Son sincronzas y las mutaciones sirven para alterar o modificar el state, el state es reactivo
     *
     */