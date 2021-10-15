import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { Formik, FormikProvider, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useAuth from "../../../hooks/useAuth";
import { createAddressApi } from "../../../api/address";

export default function AddressForm(props) {
  const { setShowModal } = props;
  const [loading, setLoading] = useState(false);
  const { auth, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      createAddress(formData);
    },
  });

  const createAddress = async (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    console.log("ESTOY MANDANDO A CREATEADD");
    console.log(formDataTemp);
    const response = await createAddressApi(formDataTemp, logout);
    if (!response) {
      toast.warning("Error al crear la dirección");
      setLoading(false);
    } else {
      formik.resetForm();
      setLoading(false);
      setShowModal(false);
      toast.success("Se agregó la dirección correctamente.");
    }
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        type="text"
        label="Titulo de la direccion"
        palceholder="Titulo de la direccion"
        onChange={formik.handleChange}
        value={formik.values.title}
        error={formik.errors.title}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          type="text"
          label="Nombre y apellidos"
          placeholder="Nombre y Apellido"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Form.Input
          name="address"
          type="text"
          label="Direccion"
          placeholder="Direccion"
          onChange={formik.handleChange}
          value={formik.values.address}
          error={formik.errors.address}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="city"
          type="text"
          label="Ciudad"
          placeholder="Ciudad"
          onChange={formik.handleChange}
          value={formik.values.city}
          error={formik.errors.city}
        />
        <Form.Input
          name="state"
          type="text"
          label="Estado/Provincia/Región"
          placeholder="Estado/Provincia/Región"
          onChange={formik.handleChange}
          value={formik.values.state}
          error={formik.errors.state}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postalCode"
          type="text"
          label="Codigo Postal"
          placeholder="Codigo Postal"
          onChange={formik.handleChange}
          value={formik.values.postalCode}
          error={formik.errors.postalCode}
        />
        <Form.Input
          name="phone"
          type="text"
          label="Numero de telefono"
          placeholder="Numero de telefono"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone}
        />
      </Form.Group>
      <div className="actions">
        <Button className="submit" type="submit" loading={loading}>
          Crear dirección
        </Button>
      </div>
    </Form>
  );
}

function initialValues() {
  return {
    title: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  };
}

function validationSchema() {
  return {
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postalCode: Yup.string().required(true),
    phone: Yup.string().required(true),
  };
}
