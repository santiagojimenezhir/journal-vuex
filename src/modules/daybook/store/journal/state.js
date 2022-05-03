export default () => ({
    isLoading: true,
    entries: [],
    // se coloca de esta manera para qie el state sea reactivo si no se coloca como funcion solo sería estatico
});

/**
 * es similar al data(){return{}} de cada componente que tenemos
 * con el cual se notifica a todos los componentes que ocupen dicho data de este store
 */