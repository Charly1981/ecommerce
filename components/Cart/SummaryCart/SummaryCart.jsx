import React, { useState, useEffect } from "react";
import { Table, Image, Icon } from "semantic-ui-react";
import { forEach, map } from "lodash";
import useCart from "../../../hooks/useCart";

export default function SummaryCart(props) {
  const { products } = props;
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeProductCart } = useCart();

  useEffect(() => {
    let price = 0;
    forEach(products, (product) => {
      price += product[0].price;
    });
    setTotalPrice(price);
  }, []);

  const removeProduct = (product) => {
    removeProductCart(product);
  };

  return (
    <div className="summary-cart">
      <div className="title">Resumen del carrito</div>

      <div className="data">
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Plataforma</Table.HeaderCell>
              <Table.HeaderCell>Entrega</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(products, (product) => (
              <Table.Row key={product.id} className="summary-cart__product">
                <Table.Cell>
                  <Icon
                    name="close"
                    link
                    onClick={() => removeProduct(product[0].url)}
                  />
                  <Image src={product[0].poster.url} alt={product[0].title} />
                  {product[0].title}
                </Table.Cell>
                <Table.Cell>{product[0].platform.title}</Table.Cell>
                <Table.Cell>Inmediata</Table.Cell>
                <Table.Cell>${product[0].price}</Table.Cell>
              </Table.Row>
            ))}

            <Table.Row className="summary-cart__resume">
              <Table.Cell className="clear" />
              <Table.Cell colspan="2">Total:</Table.Cell>
              <Table.Cell className="total-price">
                {totalPrice.toFixed(2)} $
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
