import React from "react";
import BasicLayout from "../layouts/BasicLayout";
import { useRouter } from "next/router";

export default function Game() {
  const { query } = useRouter();

  return (
    <BasicLayout className="game">
      <h1>Estamos en el juego: {query.game}</h1>
    </BasicLayout>
  );
}
