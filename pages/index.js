import store from "../src/store";
import PokemonInfo from "../components/PokemonInfo";
import PokemonFilter from "../components/PokemonFilter";
import PokemonTable from "../components/PokemonTable";

export async function getServerSideProps() {
  const pokemon = await fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
  .then((response) => response.json());
  return {
    props: {
      pokemon
    }, 
  }
}

const Home = ({ pokemon }) => {
  store.setPokemon(pokemon);
  return (
    <div className="page-container">
      <h1 className="title">Pokemon Search</h1>
      <div className="grid-container">
        <div>
          <PokemonFilter />
          <PokemonTable />
        </div>
        <div>
          <PokemonInfo />
        </div>
      </div>
    </div>
  )
}

export default Home;
