import { createRouter, createWebHistory} from "vue-router";
import HomePage from "./pages/homePage.vue";
import RepositoryInfo from "./pages/repositoryInfo.vue";
import pageFour from "./pages/pageFour.vue";
import ErrBoundary from "./pages/errBoundary.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: HomePage},
        {path: '/repo-info/:id', component: RepositoryInfo},
        {path: '/pg404', component: pageFour},
        {path: '/error', component: ErrBoundary }
    ]
})

export default routes;