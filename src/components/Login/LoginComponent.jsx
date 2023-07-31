import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import * as yup from "yup";
import { InputComponent } from "../Input/inputComponent";
import { AuthContext } from "../../context/auth/auth.context";
import { ButtonComponent } from "../Button/buttonComponent";
import * as Styled from "./LoginComponent.style";

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

    return (
      <section className="vh-100 my-5 mx-4" aria-label="Login Section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div
              className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5"
              aria-label="Login Form Section"
            >
              <form
                style={{ width: "23rem" }}
                onSubmit={handleFormSubmit}
                noValidate
                aria-label="Login Form"
              >
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                  aria-label="Login Header"
                >
                  Log in MedTech
                </h3>
    
                <InputComponent
                  id="email"
                  type="email"
                  placeholder="Digite seu email"
                  label="E-mail"
                  value={email}
                  onInput={handleInput}
                  error={emailError}
                  aria-label="Email Input"
                />
    
                <InputComponent
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  label="Senha"
                  value={password}
                  onInput={handleInput}
                  error={passwordError}
                  aria-label="Password Input"
                />
    
                <ButtonComponent
                  id="loginButton"
                  type="submit"
                  label="Logar"
                  aria-label="Login Button"
                />
    
                {emailError && (
                  <div className="small mb-1 pb-lg-2" aria-label="Email Error" style={{ color: 'red' }}>
                    {emailError}
                  </div>
                )}
                {passwordError && (
                  <div className="small mb-1 pb-lg-2" aria-label="Password Error" style={{ color: 'red' }}>
                    {passwordError}
                  </div>
                )}
    
                <p className="small mb-5 pb-lg-2">
                  <a
                    className="text-muted"
                    href="#!"
                    onClick={handleForgotPassword}
                    aria-label="Forgot Password Link"
                  >
                    Esqueceu a senha?
                  </a>
                </p>
                <p>
                  Não tem conta?{" "}
                  <a
                    href="#!"
                    className="link-info"
                    onClick={handleShowModal}
                    aria-label="Register Link"
                  >
                    Registre-se
                  </a>
                </p>
              
              </form>
            </div>
          </div>
          <div
            className="col-sm-6 px-0 d-none d-sm-block d-flex justify-content-center align-items-center my-5"
            aria-label="Login Image Section"
          >
            <img
              src="login-image-large.jpeg"
              alt="Login image"
              className="w-100 vh-60"
              style={{ objectFit: "cover", objectPosition: "right" }}
              aria-label="Login Image"
            />
          </div>
        </div>
      </div>
    </section>
    
  );
};
