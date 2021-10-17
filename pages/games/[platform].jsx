import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import BasicLayout from "../../layouts/BasicLayout";
import { size } from "lodash";
import { useRouter } from "next/dist/client/router";
import { getGamesPlatformApi } from "../../api/game";
import ListGames from "../../components/ListGames";
import { getTotalGamesPlatformApi } from "../../api/game";

const limitPerPage = 10;

export default function Platform() {
  const { query } = useRouter();
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      if (query.platform) {
        const response = await getGamesPlatformApi(
          query.platform,
          limitPerPage,
          0
        );
        setGames(response);
      }
    })();
  }, [query]);

  useEffect(() => {
    (async () => {
      const response = await getTotalGamesPlatformApi(query.platform);
      if (!query.page || currentPages === 1) return 0;
      else return currentPages * limitPerPage - limitPerPage;
    })();
  }, [query]);

  return (
    <BasicLayout className="platform">
      {!games && <Loader active>Cargado Juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay Juegos</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  );
}
