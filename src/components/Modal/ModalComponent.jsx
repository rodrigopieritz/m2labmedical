import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import { InputComponent } from "../Input/inputComponent";

export const ModalComponent = () => {

  const { setShowModal: setShowModalContext } = useContext(ModalContext);

  const handleShowModal = (e) => {
    e.preventDefault();

    setShowModalContext(false);
  };

  return (
    <>
      <p>Cadastro de Usuário</p>
      <form>
      <InputComponent
        id="email"
        type="email"
        placeholder="Digite seu email"
        label="E-mail"
      />
      <InputComponent
        id="password"
        type="password"
        placeholder="Digite sua senha"
        label="Senha"
      />
       <InputComponent
        id="confirmPassword"
        type="password"
        placeholder="Confirme sua senha"
        label="Confirmar senha"
      />
      <button type="submit" onClick={handleShowModal}>
        Cadastrar Usuário
      </button>
      </form>
    </>
  );
};


