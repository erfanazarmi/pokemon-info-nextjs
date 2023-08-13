import Link from "next/link";

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td>
      <Link href={`/pokemon/${pokemon.id}`}>
        {pokemon.name.japanese}
      </Link>
    </td>
    <td>{pokemon.name.english}</td>
    <td>{pokemon.type.join(", ")}</td>
    <td><button style={{width: 50}} onClick={() => onSelect(pokemon)}>+</button></td>
  </tr>
)

export default PokemonRow;