import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import * as yup from "yup";
import { InputComponent } from "../Input/inputComponent";
import * as Styled from "./ModalComponent.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { addAllowedUsersToLocalStorage } from "../../service/user.service";

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
      addAllowedUsersToLocalStorage(email, password);
      alert("novo usuário cadastrado com sucesso");
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
    <Styled.ModalBackdrop aria-label="Cadastro Modal Backdrop">
  <Styled.ModalContainer>
    <legend>Cadastro de novo usuário</legend>
    <div className="mb-3" aria-label="Modal Content Spacer"></div>
    <form onSubmit={handleFormSubmition} noValidate aria-label="Registration Form">
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
      {emailError && <div aria-label="Email Error" style={{ color: 'red' }}>{emailError}</div>}
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
      {passwordError && <div aria-label="Password Error" style={{ color: 'red' }}>{passwordError}</div>}
      <InputComponent
        id="confirmPassword"
        type="password"
        placeholder="Confirme sua senha"
        label="Confirmar senha"
        value={confirmPassword}
        onInput={handleInput}
        error={confirmPasswordError}
        aria-label="Confirm Password Input"
      />
      {confirmPasswordError && (
        <div aria-label="Confirm Password Error" style={{ color: 'red' }}>{confirmPasswordError}</div>
      )}
      <div className="row">
        <div>
          <ButtonComponent
            id="hideModalBtn"
            label="Cancelar"
            type="button"
            onClick={handleShowModal}
            aria-label="Hide Modal Button"
          />

          <ButtonComponent
            id="registerUserBtn"
            label="Cadastrar Usuário"
            type="submit"
            onClick={handleFormSubmition}
            aria-label="Register User Button"
          />
        </div>
      </div>
    </form>
  </Styled.ModalContainer>
</Styled.ModalBackdrop>

    </>
  );
};
