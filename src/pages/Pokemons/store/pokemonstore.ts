import type { IPokemon, PokemonResponsePaginated } from "@/pages/Pokemons/types/pokemon";

import type { IRequestParameters } from "@/shared/helpers/apiCallHelper";
import apiCallHelper from "@/shared/helpers/apiCallHelper";
import { defineStore } from "pinia";

const POKEAPI = 'https://pokeapi.co/api/v2/';

interface PokemonState {
    allPokemonsPaginated: {
        results: IPokemon[];
        nextUrl: string | null;
        previousUrl: string | null;
        count: number;
    },
    pokemonsInfo: Array<any>
}

export const usePokemonStore = defineStore('pokemons', {
    state: (): PokemonState => ({
        allPokemonsPaginated: {
            results: [],
            nextUrl: '',
            previousUrl: '',
            count: 0,
        },
        pokemonsInfo: []
    }),
    getters: {
        nextUrl: (state) => state.allPokemonsPaginated.nextUrl,
        previousUrl: (state) => state.allPokemonsPaginated.previousUrl,
        currentResultsCount: (state) => state.allPokemonsPaginated.results.length,
        currentResults: (state) => state.allPokemonsPaginated.results,
        totalCount: (state) => state.allPokemonsPaginated.count
    },
    actions: {
        async getAllPokemons(endpointUrl = 'pokemon') {
            const params = {
                apiUrl: POKEAPI,
                endpoint: endpointUrl,
                method: "GET",
                body: "",
            };
            
            const resource = await apiCallHelper<PokemonResponsePaginated>(params as IRequestParameters);

            if (resource.value) {
                this.allPokemonsPaginated.results = resource.value.results;
                this.allPokemonsPaginated.nextUrl = resource.value.next;
                this.allPokemonsPaginated.previousUrl = resource.value.previous;
                this.allPokemonsPaginated.count = resource.value.count;
            }
        },
        async getPokemonsInfo() {
            let params = {
                apiUrl: POKEAPI,
                endpoint: '',
                method: "GET",
                body: "",
            };

            this.allPokemonsPaginated.results.forEach(async (pokemon) => {
                params.endpoint = `pokemon/${pokemon.name}`;
                const resource = await apiCallHelper<any>(params as IRequestParameters);
                if (resource.value) {
                    this.pokemonsInfo.push(resource.value.sprites);
                }
            })
        }
    }
})
