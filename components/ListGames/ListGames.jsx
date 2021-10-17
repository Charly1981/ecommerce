import React from "react";
import { Image, Grid } from "semantic-ui-react";
import Link from "next/link";
import { map } from "lodash";
import { getRouteMatcher } from "next/dist/shared/lib/router/utils";

export default function ListGames(props) {
  const { games } = props;
  return (
    <div className="list-games">
      <Grid>
        <Grid.Row columns={5}>
          {map(games, (game) => (
            // <Game game={game} />
            <Game game={game} />
          ))}
          pos
        </Grid.Row>
      </Grid>
    </div>
  );
}

function Game(props) {
  const { game } = props;
  // console.log(urlBuilder(game.author.photo[0].url));
  const urlImage = `"http://127.0.01:1337${game.poster.url}"`;
  console.log(urlImage);
  console.log;
  return (
    <Grid.Column className="list-game__game">
      <Link href={urlImage}>
        <a>
          <div className="list-game__game-poster">
            <Image src={game.poster.url} alt={game.title} />
          </div>
        </a>
      </Link>
    </Grid.Column>
  );
}
