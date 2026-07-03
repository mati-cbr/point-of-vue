import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/pages/AboutView.vue'
import HomeView from '@/pages/HomeView.vue'
import PokemonsView from '@/pages/Pokemons/PokemonsView.vue'

const routes = [
    { path: '/home', component: HomeView },
    { path: '/', redirect: '/home' },
  { path: '/about', component: AboutView },
    { path: '/pokemon', component: PokemonsView }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})