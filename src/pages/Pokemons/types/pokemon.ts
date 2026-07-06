interface IType {
    name: string,
    url: string
}

interface ISprites {
    front_default: string
}

interface ITypeSlotted {
    slot: number,
    type: IType
}

interface IStatOnly {
    name: string,
    url: string,
}

interface IStat {
    base_stat: number,
    effort: number,
    stat: IStatOnly
}

export interface IPokemon {
    name: string,
    url: string
}

export interface IPokemonBasicInfo {
    name: string,
    order: number,
    types: ITypeSlotted[],
    stats: IStat[],
    sprites: ISprites,
}

export interface PokemonResponsePaginated {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
}
