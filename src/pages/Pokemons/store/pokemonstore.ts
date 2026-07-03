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
    };
}

export const usePokemonStore = defineStore('pokemons', {
    state: (): PokemonState => ({
        allPokemonsPaginated: {
            results: [],
            nextUrl: '',
            previousUrl: '',
            count: 0,
        },
    }),
    actions: {
        async getAllPokemons() {
            const params = {
                apiUrl: POKEAPI,
                endpoint: "pokemon",
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
        }
    }
})
