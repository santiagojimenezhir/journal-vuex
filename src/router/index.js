import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import DayBookLayout from "@/modules/daybook/router";
import AuthLayout from "@/modules/auth/router";
import isAuthenticatedGuard from "../modules/auth/router/auth-guard";


const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/daybook",
        beforeEnter: [isAuthenticatedGuard],
        ...DayBookLayout,
    },
    {
        path: "/auth",
        ...AuthLayout,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;