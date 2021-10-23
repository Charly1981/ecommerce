import React from "react";
import { Loader } from "semantic-ui-react";
import BasicLayout from "../layouts/BasicLayout";
import { useState, useEffect } from "react";
import { searchGameApi } from "../api/game";
import { useRouter } from "next/router";
import { size } from "lodash";
import ListGames from "../components/ListGames";
import Seo from "../components/Seo";

export default function search() {
  const [games, setGames] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    document.getElementById("search-game").focus();
  }, []);

  useEffect(() => {
    (async () => {
      if (size(query.query) > 0) {
        const response = await searchGameApi(query.query);
        if (size(response) > 0) setGames(response);
        else setGames([]);
      } else {
        setGames([]);
      }
    })();
  }, [query]);

  return (
    <BasicLayout className="search">
      <Seo title={`Buscando: ${query.query}`} />
      <div className="data">
        {!games && <Loader active>Cargado Juegos</Loader>}
        {games && size(games) === 0 && (
          <div className="data__not-found">
            <h3>No tienes ningun juego en tu lista</h3>
          </div>
        )}
        {size(games) > 0 && <ListGames games={games} />}
      </div>
    </BasicLayout>
  );
}
