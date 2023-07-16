import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import * as yup from "yup";
import { InputComponent } from "../Input/inputComponent";

export const ModalComponent = () => {
  const { setShowModal: setShowModalContext } = useContext(ModalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;
    if (id === "email") {
      setEmail(value);
      setEmailError("");
    }
    if (id === "password") {
      setPassword(value);
      setPasswordError("");
    } else if (id === "confirmPassword") {
      setConfirmPassword(value);
      setConfirmPasswordError("");
    }
  };

   const handleShowModal = () => {
    setShowModalContext(false);
  };

    const handleFormSubmition = (e) => {
    e.preventDefault();

       const validationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("Campo obrigatório"),
      password: yup
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .required("Campo obrigatório"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas não são iguais")
        .required("Campo obrigatório"),
    });

    try {
      validationSchema.validateSync({
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });

      handleShowModal();
    } catch (error) {
      if (error.path === "email") {
        setEmailError(error.message);
      } else if (error.path === "password") {
        setPasswordError(error.message);
      } else if (error.path === "confirmPassword") {
        setConfirmPasswordError(error.message);
      }
    }
  };

  return (
    <>
      <legend>Cadastro de novo usuário</legend>
      <form onSubmit={handleFormSubmition} noValidate>
        <InputComponent
          id="email"
          type="email"
          placeholder="Digite seu email"
          label="E-mail"
          value={email}
          onInput={handleInput}
          error={emailError}
        />
        {emailError && <div>{emailError}</div>}
        <InputComponent
          id="password"
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          value={password}
          onInput={handleInput}
          error={passwordError}
        />
        {passwordError && <div>{passwordError}</div>}
        <InputComponent
          id="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
          label="Confirmar senha"
          value={confirmPassword}
          onInput={handleInput}
          error={confirmPasswordError}
        />
        {confirmPasswordError && <div>{confirmPasswordError}</div>}

        <button type="button" onClick={handleShowModal}>
          Cancelar
        </button>

        <button type="submit">Cadastrar Usuário</button>
      </form>
    </>
  );
};
