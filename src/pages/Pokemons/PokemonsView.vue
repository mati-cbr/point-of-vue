<template>
  <h2>Pokedex</h2>
  <v-container>
    <v-row>
      <v-col 
        v-for="pokemon in pokemonsInfo" 
        :key="pokemon.order"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-sheet class="pa-2">
          {{ pokemon.name }}
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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

  async mounted() {
    await this.getAllPokemons();
    await this.getPokemonsInfo();
  }
}
</script>
