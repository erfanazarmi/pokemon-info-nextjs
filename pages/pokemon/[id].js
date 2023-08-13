import { withRouter } from "next/router";
import store from "../../src/store";

export default withRouter(({router}) => {
  const pokemon = store.pokemon.find(({id}) => id.toString() == router.query.id);
  return (
    <>
    {
      pokemon && (
        <>
          <h1>{pokemon.name.japanese}</h1>
          <h2>{pokemon.name.english}</h2>
          <table>
            {Object.keys(pokemon.base).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{pokemon.base[key]}</td>
              </tr>
            ))}
          </table>
        </>
      )
    }
    </>
  );
});