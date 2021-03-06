import React, { useState, useEffect } from "react";
import { size } from "lodash";
import BasicLayout from "../layouts/BasicLayout";
import { getLastGamesApi } from "../api/game";
import { Divider, Loader } from "semantic-ui-react";
import ListGames from "../components/ListGames/ListGames";
import Seo from "../components/Seo";

export default function Home() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastGamesApi(50);
      if (size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, []);
  return (
    <BasicLayout>
      <Seo />
      {!games && <Loader active>Cargando juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay juegos</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
}
