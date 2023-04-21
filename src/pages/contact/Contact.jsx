import React, { useRef, useState } from "react";
import './Contact.css';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Validacion } from "./Validacion";

export default function Contact() {
  const form = useRef();


  const [values, setValues] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setErrors(Validacion(values));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wf3sqpe',
        'template_emkjedj',
        form.current,
        '2de5dh3wcuxLsnH3u'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    Swal.fire({
      text: "Mensaje enviado",
      icon: "success",
      iconColor: "rgb(62, 138, 62)",
      showCloseButton: true,
      allowEnterKey: false,

    }).then((result) => {
      if (result.isConfirmed) {
        setValues({
          name: "",
          lastName: "",
          email: "",
          message: "",
        });
      }
    });
  };




  return (
    <section id="contact">
      <div className="container-contact-title">
        <h1>Contactame</h1>
      </div>
<div className="container-form"> 
      <form
        onSubmit={sendEmail}
        ref={form} >

        <label htmlFor='name' className="name">Nombre</label>
        <input
          type='text'
          name='name'
          placeholder="Ingrese su nombre..."
          className="nameinput"
          onChange={(e) => handleChange(e)}
          value={values.name}
        />
        {errors.name && (
          <p className='error_name'>* {errors.name}</p>
        )}

        <label htmlFor='lastName' className="lastName">Apellido</label>
        <input
          type='text'
          name='lastName'
          placeholder="Ingrese su apellido..."
          className="lastNameinput"
          onChange={(e) => handleChange(e)}
          value={values.lastName}
        />
        {errors.lastName && (
          <p className='error_lastName'>* {errors.lastName}</p>
        )}
        <label htmlFor='email' className="email">Email</label>
        <input
          type='email'
          name='email'
          placeholder="Ingrese su email..."
          className="emailinput"
          onChange={(e) => handleChange(e)}
          value={values.email}
        />
        {errors.email && (
          <p className='error_email'>* {errors.email}</p>
        )}
        <label htmlFor='message' className="message">Mensaje</label>
        <textarea
          name="message"
          type='text'
          placeholder="Escriba su mensaje..."
          className="messageinput"
          onChange={(e) => handleChange(e)}
          value={values.message}
        />
        {errors.message && (
          <p className='error_message'>* {errors.message}</p>
        )}

        < button
          type="submit"
          className="btn_send"
          disabled={errors.name || errors.lastName || errors.email || errors.message === "" ? true : false}>Enviar</button>

      </form>
      </div>
    </section>
  )
}