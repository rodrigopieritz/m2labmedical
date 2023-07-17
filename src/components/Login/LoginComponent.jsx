import React, { useContext, useState, useEffect } from "react";
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

  const { setAuth } = useContext(AuthContext);

  const redirectToHome = () => {
    setAuth({
      user: { email },
      isLogged: true,
    });
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
        const allowedUsers = JSON.parse(localStorage.getItem("allowedUsers"));
        const user = allowedUsers.find(
          (allowedUser) =>
            allowedUser.email === email && allowedUser.password === password
        );

        if (user) {
          setAuth({
            user: { email },
            isLogged: true,
          });
          navigate("/");
        } else {
          setEmailError("Usuário e/ou senha incorretos");
          setPasswordError("");
        }
      })
      .catch((error) => {
        if (error.path === "email") {
          setEmailError(error.message);
        } else if (error.path === "password") {
          setPasswordError(error.message);
        }
      });
  };

  const addAllowedUsersToLocalStorage = () => {
    const allowedUsers = [
      {
        email: "usuariopermitido@email.com",
        password: "usuariopermitido",
      },
    ];
    localStorage.setItem("allowedUsers", JSON.stringify(allowedUsers));
  };

  useEffect(() => {
    addAllowedUsersToLocalStorage();
  }, []);

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
        <InputComponent
          id="password"
          type="password"
          placeholder="Digite sua senha"
          label="Senha"
          value={password}
          onInput={handleInput}
          error={passwordError}
        />
        {emailError && <div>{emailError}</div>}
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
