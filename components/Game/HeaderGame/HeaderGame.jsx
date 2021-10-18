import React, { useState, useEffect } from "react";
import { Grid, Image, Icon, Button, GridColumn } from "semantic-ui-react";
import { size } from "lodash";

export default function HeaderGame(props) {
  const { game } = props;
  const { poster, title } = game;
  console.log(poster.url);

  // console.log(game.poster.url);

  return (
    <Grid className="header-game">
      <GridColumn mobile={16} tablet={6} computer={5}>
        <Image src={poster.url} alt={title} fluid />
      </GridColumn>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <p>Info Game</p>
      </Grid.Column>
    </Grid>
  );
}
