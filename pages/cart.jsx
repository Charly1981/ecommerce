import React, { useState, useEffect } from "react";
import BasicLayaout from "../layouts/BasicLayout";
import { getGameByUrlApi } from "../api/game";
import useCart from "../hooks/useCart";
import BasicLayout from "../layouts/BasicLayout";
import SummaryCart from "../components/Cart/SummaryCart";

export default function Cart() {
  const { getProductsCart } = useCart();
  const products = getProductsCart();

  return !products ? <EmptyCart /> : <FullCart products={products} />;
}

function EmptyCart() {
  return (
    <BasicLayaout className="empty-cart">
      <h2>No hay productos en el carrito</h2>
    </BasicLayaout>
  );
}

function FullCart(props) {
  const { products } = props;
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        const data = await getGameByUrlApi(product);
        productsTemp.push(data);
      }
      setProductsData(productsTemp);
    })();
  }, []);

  return (
    <BasicLayaout className="empty-cart">
      <SummaryCart products={productsData} />
    </BasicLayaout>
  );
}