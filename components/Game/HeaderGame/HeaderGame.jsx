import React, { useState, useEffect } from "react";
import { Grid, Image, Icon, Button, GridColumn } from "semantic-ui-react";
import { size } from "lodash";
import classNames from "classnames";
import {
  isFavoriteApi,
  addFavoriteApi,
  deleteFavoriteApi,
} from "../../../api/favorite";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

export default function HeaderGame(props) {
  const { game } = props;
  const { poster, title } = game;

  return (
    <Grid className="header-game">
      <GridColumn mobile={16} tablet={6} computer={5}>
        <Image src={poster.url} alt={title} fluid />
      </GridColumn>
      <Grid.Column mobile={16} tablet={10} computer={11}>
        <Info game={game} />
      </Grid.Column>
    </Grid>
  );
}

function Info(props) {
  const { game } = props;
  const { title, summary, price, discount, url } = game;
  const [isFavorite, setIsFavorites] = useState(false);
  const { auth, logout } = useAuth();
  const [reloadFavorite, setReloadFavorite] = useState(false);
  const { addProductCart } = useCart();

  const addFavorite = async () => {
    if (auth) {
      await addFavoriteApi(auth.idUser, game.id, logout);
      setReloadFavorite(true);
    }
  };

  const deleteFavorite = async () => {
    if (auth) {
      await deleteFavoriteApi(auth.idUser, game.id, logout);
      setReloadFavorite(true);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await isFavoriteApi(auth.idUser, game.id, logout);
      if (size(response) > 0) setIsFavorites(true);
      else setIsFavorites(false);
    })();
    setReloadFavorite(false);
  }, [game, reloadFavorite]);

  return (
    <>
      <div className="header-game__title">
        {title}
        <Icon
          name={isFavorite ? "heart" : "heart outline"}
          className={classNames({
            like: isFavorite,
          })}
          link
          onClick={() => (isFavorite ? deleteFavorite() : addFavorite())}
          // onClick={
          //   isFavorite ? console.log("apreta") : console.log("sdfasfasfa")
          // }
        />
      </div>
      <div className="header-game__delivery">Entrega en 2/48 hs</div>
      <div
        className="header-game__summary"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <div className="header-game__buy">
        <div className="header-game__buy-price">
          <p>Precio de venta al publico: {price}$</p>
          <div className="header-game__buy-price-actions">
            <p>-{discount}%</p>
            <p>{(price - Math.floor(price * discount) / 100).toFixed(2)}$</p>
          </div>
        </div>
        <Button
          className="header-game__but-btn"
          onClick={() => addProductCart(url)}
        >
          Comprar
        </Button>
      </div>
    </>
  );
}
