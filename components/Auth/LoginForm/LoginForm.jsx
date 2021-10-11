import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {} from "react-toastify";

export default function LoginForm(props) {
  const { showRegisterForm } = props;

  return (
    <Form className="login-form">
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo electrónico"
      />
      <Form.Input name="password" type="passwrod" placeholder="password" />

      <div className="actions">
        <Button type="button" basic onClick={showRegisterForm}>
          Registrarse
        </Button>
        <div>
          <Button className="submit" type="submit">
            Entrar
          </Button>
          <Button type="button">Recuperar Contrasena</Button>
        </div>
      </div>
    </Form>
  );
}
