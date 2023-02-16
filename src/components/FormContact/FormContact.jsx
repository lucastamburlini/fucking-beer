import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const FormContact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9j4qbe4",
        "template_ps0dkxr",
        form.current,
        "tbR40Hx-c70jdXylN"
      )
      .then(
        (result) => {
          alert(
            "Su mensaje fue enviado con éxito ¡Gracias por contactarse con FuckingBeer!"
          );
        },
        (error) => {
          alert(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phoneNumber: "",
      }}
      validationSchema={yup.object({
        firstName: yup
          .string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Campo obligatorio"),
        lastName: yup
          .string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("Campo obligatorio"),
        email: yup
          .string()
          .email("Correo electrónico inválido")
          .required("Campo obligatorio"),
        message: yup
          .string()
          .max(15, "Debe dejar un mensaje")
          .required("Debe dejar un mensaje"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 0);
      }}
    >
      <div id="contact" className={styles.container}>
        <Form onSubmit={sendEmail} ref={form}>
          <div className={styles.containerForm}>
            <div className={styles.tittle}>
              <h2>Contacta con nosotros</h2>
              <p>
                Contanos cómo podemos ayudarte y nos pondremos en contacto a la
                brevedad.
              </p>
            </div>
            <div className={styles.form}>
              <div className={styles.item1}>
                <label htmlFor="firstName">Nombre</label>
                <Field name="firstName" type="text" />
                <ErrorMessage name="firstName" />
              </div>
              <div className={styles.item2}>
                <label htmlFor="lastName">Apellido</label>
                <Field name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </div>
              <div className={styles.item3}>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </div>
              <div className={styles.item4}>
                <label htmlFor="phoneNumber">Teléfono</label>
                <Field name="phoneNumber" type="phoneNumber" />
              </div>
              <div className={styles.item5}>
                <label htmlFor="message">Mensaje</label>
                <Field name="message" as="textarea" />
                <ErrorMessage name="message" />
              </div>
            </div>
            <Button
              type="submit"
              color="warning"
              variant="outlined"
              endIcon={<SendIcon />}
            >
              Enviar
            </Button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
export default FormContact;
