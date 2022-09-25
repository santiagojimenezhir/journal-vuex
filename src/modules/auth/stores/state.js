export default () => ({
    isLoading: true,
    status: 'authenticating',
    user: null,
    idToken: null,
    refreshToken: null
        // se coloca de esta manera para que el state sea reactivo si no se coloca como funcion solo sería estatico
});

/**
 * es similar al data(){return{}} de cada componente que tenemos
 * con el cual se notifica a todos los componentes que ocupen dicho data de este store
 */