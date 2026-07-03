export interface IPokemon {
    name: string,
    url: string
}

export interface IPokemonDetails {
    name: string,
    order: number
}

export interface PokemonResponsePaginated {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}
