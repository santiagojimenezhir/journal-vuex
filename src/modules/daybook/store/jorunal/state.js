export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(), //12168721
            date: new Date().toDateString(), // Sat 23 2022
            text: "Commodo consectetur amet officia fugiat. Sunt consectetur ad commodo officia duis consectetur magna nisi veniam. Amet magna deserunt sit ea proident laborum nisi aute ut voluptate. Lorem exercitation elit dolore ea amet reprehenderit aliqua dolor duis.",
            picture: null,
        },
        {
            id: new Date().getTime() + 1000, //12168721
            date: new Date().toDateString(), // Sat 23 2022
            text: "Ex non cupidatat quis est consequat amet ad pariatur est ad irure velit. In voluptate sit qui sit dolore in. Ex reprehenderit proident cillum proident elit. Reprehenderit consequat non fugiat excepteur veniam proident nisi aliqua occaecat tempor id proident cillum. Esse eu irure minim id exercitation reprehenderit esse consequat. In deserunt exercitation eu nisi qui magna magna aliquip reprehenderit velit incididunt.",
            picture: null,
        },
        {
            id: new Date().getTime() + 2000, //12168721
            date: new Date().toDateString(), // Sat 23 2022
            text: "Consequat aliqua qui enim esse nisi magna fugiat tempor esse. Nisi sunt qui fugiat aliquip ullamco fugiat magna anim proident. Eu aliqua qui aute eu veniam proident dolore cillum.",
            picture: null,
        },
    ],
    // se coloca de esta manera para qie el state sea reactivo si no se coloca como funcion solo sería estatico
});

/**
 * es similar al data(){return{}} de cada componente que tenemos
 * con el cual se notifica a todos los componentes que ocupen dicho data de este store
 */