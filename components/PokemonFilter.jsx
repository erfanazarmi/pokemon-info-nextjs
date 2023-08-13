import { observer } from "mobx-react";
import store from "../src/store";

const PokemonFilter = () => {
  return (
    <input
      type="text"
      value={store.filter}
      onChange={(e) => store.setFilter(e.target.value)}
    />
  );
};

export default observer(PokemonFilter);
