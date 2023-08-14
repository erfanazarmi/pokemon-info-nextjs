import { withRouter } from "next/router";

export async function getStaticPaths() {
  const allPokemon = require("../../src/pokemon.json");
  return {
    paths: allPokemon.map((p) => ({
      params: {
        id: p.id.toString(),

      }
    })),
    fallback: false
  }
}

export async function getStaticProps(context) {
  const allPokemon = require("../../src/pokemon.json");
  const pokemon = allPokemon.find(({id}) => id.toString() == context.params.id);
  return {
    props: {
      pokemon
    }, 
  }
}

export default withRouter(({ pokemon }) => {
  return (
    <>
    {
      pokemon && (
        <>
          <h1>{pokemon.name.japanese}</h1>
          <h2>{pokemon.name.english}</h2>
          <table>
            <tbody>
            {Object.keys(pokemon.base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{pokemon.base[key]}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </>
      )
    }
    </>
  );
});