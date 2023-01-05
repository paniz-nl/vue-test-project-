import { createRouter, createWebHistory } from "vue-router";
import TheHome from './pages/TheHome.vue'
import WelcomeItem from './components/WelcomeItem.vue'
import UserIndex from './pages/Usere/UserIndex.vue'

const routes = [
    { path: "/", name: "home", component: TheHome },
    { path: "/users", name: "welcome", component: UserIndex },
    { path: "/posts", name: "welcome2", component: WelcomeItem }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;