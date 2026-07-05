<template>
  <h2>Pokedex</h2>
  {{ pokemonsInfo }}

</template>

<script>
import { usePokemonStore } from './store/pokemonstore';
import { mapActions, mapState } from 'pinia';
export default {
  methods: {
    ...mapActions(usePokemonStore, ['getAllPokemons', 'getPokemonsInfo']),
  },

  computed: {
    ...mapState(usePokemonStore, ['currentResultsCount', 'currentResults', 'pokemonsInfo']),
  },

  mounted() {
    this.getAllPokemons();
    this.getPokemonsInfo();
  }
}
</script>
