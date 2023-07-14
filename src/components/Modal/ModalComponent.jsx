import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";

export const ModalComponent = () => {
    const { setShowModal: setShowModalContext } = useContext(ModalContext);

    const handleShowModal = (e) => {
        e.preventDefault();
    
        setShowModalContext(false);
      };
    
    return(
        <>
        <p>Cadastro de Usuário</p>
        <p>Formulário para cadastro de novo usuário aqui</p>
        <button type="button" onClick={handleShowModal}>Fechar Modal Cadastro</button>
        </>
    )
}