<template>
  <h2>Pokedex</h2>
  <article>Tutaj będzie lista pokemonów</article>
</template>

<script setup>
import { usePokemonStore } from './store/pokemonstore';
const pokemonStore = usePokemonStore();
await pokemonStore.getAllPokemons();

console.log(pokemonStore.$state.allPokemonsPaginated);
</script>
