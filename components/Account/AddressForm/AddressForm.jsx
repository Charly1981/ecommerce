import React from "react";
import { Form, Button } from "semantic-ui-react";
export default function AddressForm() {
  return (
    <Form>
      <Form.Input
        name="title"
        type="text"
        label="Titulo de la direccion"
        palceholder="Titulo de la direccion"
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre y apellidos"
          placeholder="Nombre y Apellido"
        />
        <Form.Input
          name="address"
          type="text"
          label="Direccion"
          placeholder="Direccion"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="city"
          type="text"
          label="Ciudad"
          placeholder="Ciudad"
        />
        <Form.Input
          name="state"
          type="text"
          label="Estado/Provincia/Región"
          placeholder="Estado/Provincia/Región"
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postalCode"
          type="text"
          label="Codigo Postal"
          placeholder="Codigo Postal"
        />
        <Form.Input
          name="phone"
          type="text"
          label="Numero de telefono"
          placeholder="Numero de telefono"
        />
      </Form.Group>
      <div className="actions">
        <Button className="submit" type="submit">
          Crear dirección
        </Button>
      </div>
    </Form>
  );
}
