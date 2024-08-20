//DEFINE OuR ROUTING RULE
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/home",
            name: "home",
        },
    ],
});

export default router;
