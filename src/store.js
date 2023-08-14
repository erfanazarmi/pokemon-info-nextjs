import { makeObservable, observable, computed } from "mobx";
import { toRomaji } from "wanakana";

class Store {
  pokemon = [];
  filter = "";
  selectedPokemon = null;

  constructor() {
    makeObservable(this, {
        pokemon: observable, filter: observable, selectedPokemon: observable,
        filteredPokemonEN: computed, filteredPokemonJP: computed
    });
  }

  get filteredPokemonEN() {
    return this.pokemon
    .filter((pokemon) =>
      pokemon.name.english
        .toLowerCase()
        .includes(this.filter.toLowerCase())
    )
  }

  get filteredPokemonJP() {
    return this.pokemon
    .filter((pokemon) =>
      toRomaji(pokemon.name.japanese).includes(toRomaji(store.filter))
    )
  }

  setPokemon(pokemon) {
    this.pokemon = pokemon;
  }
  setFilter(filter) {
    this.filter = filter;
  }
  setSelectedPokemon(selectedPokemon) {
    this.selectedPokemon = selectedPokemon;
  }
}

const store = new Store();

export default store;
