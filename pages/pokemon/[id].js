import { withRouter } from "next/router";

export async function getServerSideProps(context) {
  const allPokemon = await fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json")
  .then((response) => response.json());
  const pokemon = allPokemon.find(({id}) => id.toString() == context.query.id);
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