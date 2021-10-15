import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updatePasswordApi } from "../../../api/user";

export default function ChangePasswordForm(props) {
  const { user, logout } = props;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(
        user.id,
        formData.password,
        logout
      );
      console.log(response);
      if (!response || response?.statusCode === 400) {
        toast.error("Error al actualizar la contraseña.");
      } else {
        logout();
      }
      setLoading(true);
    },
  });

  return (
    <div className="change-password-form">
      <h4>Cambia tu passowrd</h4>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            name="password"
            type="password"
            placeholder="Nueva contraseña"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.errors.repeatPassword}
          />
          <Form.Input
            name="repeatPassword"
            type="password"
            placeholder="Confirma tu nueva contraseña"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
          />
        </Form.Group>
        <Button className="submit" loading={loading}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref("repeatPassword")], true),
    repeatPassword: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password")], true),
  };
}
