import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import * as yup from "yup";
import { InputComponent } from "../Input/inputComponent";
import { AuthContext } from "../../context/auth/auth.context";

export const LoginComponent = () => {
  const { setShowModal: setShowModalContext } = useContext(ModalContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const {setAuth} = useContext (AuthContext);
  const {auth} = useContext (AuthContext);

  const redirectToHome = () => {
    setAuth({auth:{email},isLogged:true});
    console.log(auth)
    navigate("/");
  };

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;
    if (id === "email") {
      setEmail(value);
      setEmailError("");
    } else if (id === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert("Página em construção");
  };

  const handleShowModal = (event) => {
    event.preventDefault();
    setShowModalContext(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const validationSchema = yup.object().shape({
      email: yup
        .string()
        .email("Digite um e-mail válido")
        .required("Campo obrigatório"),
      password: yup
        .string()
        .min(8, "A senha deve ter pelo menos 8 caracteres")
        .required("Campo obrigatório"),
    });

    validationSchema
      .validate({ email, password })
      .then(() => {
        redirectToHome();
      })
      .catch((error) => {
        if (error.path === "email") {
          setEmailError(error.message);
        } else if (error.path === "password") {
          setPasswordError(error.message);
        }
      });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} noValidate>
        <legend>Login</legend>
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
        <button type="submit">Logar</button>
      </form>
      <div>
        <a href="#" onClick={handleForgotPassword}>
          Esqueci minha senha
        </a>
        <button type="button" onClick={handleShowModal}>
          Criar Conta
        </button>
      </div>
    </>
  );
};
