import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import tags from './admin/tags';
import category from './admin/category';
import home from './pages/home';

const routes = [
    {
        name: 'home',
        path: '/home',
        component: home
    },
    {
        name:'tags',
        path:'/tags',
        component: tags
    },

    {
        name:'category',
        path:'/category',
        component: category
    }

];

export default new VueRouter({
    mode: 'history',
    routes
});
