<template>
  <h2>Pokedex</h2>
  <v-container>
    <v-row>
      <v-col 
        v-for="pokemon in pokemonsInfo.sort((a, b) => a.order - b.order)" 
        :key="pokemon.order"
        cols="12"
        sm="6"
        lg="4"
      >
        <v-sheet class="pa-2">
          <v-card
            class="mx-auto">
              <v-img
                :src = pokemon.sprites.front_default
              ></v-img>

              <v-card-title class="capitalize">{{ pokemon.name }}</v-card-title>
          </v-card>
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

<style scoped>
.capitalize {
  text-transform: capitalize;
}
</style>
