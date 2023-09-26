import { createRouter, createWebHashHistory } from 'vue-router';
import * as Vue from 'vue';

const routes = [
    { path: '/', name: '/', component: () => import('@/Desktop.vue')},
   
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})


