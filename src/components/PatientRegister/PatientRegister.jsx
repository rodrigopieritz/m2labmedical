// import React, {useState } from "react";
// import * as Styled from "./PatientRegister.style";
// import { ButtonComponent } from "../Button/buttonComponent";
// import { InputComponent } from "../Input/inputComponent";
// import * as yup from "yup";

// export const PatientRegister = () => {

//   const [name, setName] = useState("");
//   const [nameError, setNameError] = useState("");

//   const handleInput = (event) => {
//     event.preventDefault();
//     const { value, id } = event.target;
//     if (id === "name") {
//       setName(value);
//       setNameError("");
//     }

//   };
//   const addPatientToLocalStorage = () => {
//     console.log("aqui será desenvolvida a lógica para adicionar o paciente no localStorage")
//   };

//   const handleFormSubmition = (e) => {
//     e.preventDefault();

//     const validationSchema = yup.object().shape({
//       name: yup
//         .string()
//         .min(5, "Este campo deve ter pelo menos 5 caracteres")
//         .max(50, "Este campo deve ter no máximo 50 caracteres"),
//         });

//     try {
//       validationSchema.validateSync({
//         name: name,

//       });
//       addPatientToLocalStorage();
//       alert("novo usuário cadastrado com sucesso");

//     } catch (error) {
//       if (error.path === "name") {
//         setNameError(error.message);
//        }
//     }
//   };

//   return (
//     <>
//       <Styled.PatientRegister>
//         <form onSubmit={handleFormSubmition} noValidate>
//           <ButtonComponent id="save" type="submit" label="Salvar" />

//           <InputComponent
//             id="name"
//             type="text"
//             placeholder="Digite seu nome completo"
//             label="Nome Completo"
//             value={name}
//             onInput={handleInput}
//             error={nameError}
//           />
//           {nameError && <div>{nameError}</div>}
//         </form>
//       </Styled.PatientRegister>
//     </>
//   );
// };

import React, { useState } from "react";
import * as Styled from "./PatientRegister.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";

export const PatientRegister = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");

  const [birthdate, setBirthdate] = useState("");
  const [birthdateError, setBirthdateError] = useState("");

  const [cpf, setCpf] = useState("");
  const [cpfError, setCpfError] = useState("");

  const [rg, setRg] = useState("");
  const [rgError, setRgError] = useState("");

  const [maritalStatus, setMaritalStatus] = useState("");
  const [maritalStatusError, setMaritalStatusError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [naturalness, setNaturalness] = useState("");
  const [naturalnessError, setNaturalnessError] = useState("");

  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyContactError, setEmergencyContactError] = useState("");

  const [allergies, setAllergies] = useState("");
  const [specialCare, setSpecialCare] = useState("");
  const [insurance, setInsurance] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [insuranceValidity, setInsuranceValidity] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;
    if (id === "name") {
      setName(value);
      setNameError("");
    } else if (id === "gender") {
      setGender(value);
      setGenderError("");
    } else if (id === "birthdate") {
      setBirthdate(value);
      setBirthdateError("");
    } else if (id === "cpf") {
      setCpf(value);
      setCpfError("");
    } else if (id === "rg") {
      setRg(value);
      setRgError("");
    } else if (id === "maritalStatus") {
      setMaritalStatus(value);
      setMaritalStatusError("");
    } else if (id === "phone") {
      setPhone(value);
      setPhoneError("");
    } else if (id === "email") {
      setEmail(value);
      setEmailError("");
    } else if (id === "naturalness") {
      setNaturalness(value);
      setNaturalnessError("");
    } else if (id === "emergencyContact") {
      setEmergencyContact(value);
      setEmergencyContactError("");
    } else if (id === "allergies") {
      setAllergies(value);
    } else if (id === "specialCare") {
      setSpecialCare(value);
    } else if (id === "insurance") {
      setInsurance(value);
    } else if (id === "insuranceNumber") {
      setInsuranceNumber(value);
    } else if (id === "insuranceValidity") {
      setInsuranceValidity(value);
    }
  };

  const addPatientToLocalStorage = () => {
    console.log(
      "Aqui será desenvolvida a lógica para adicionar o paciente no localStorage"
    );
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
  
    const validationSchema = yup.object().shape({
          name: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 5 caracteres")
        .max(50, "Este campo deve ter no máximo 50 caracteres"),
      gender: yup
        .string()
        .oneOf(["Masculino", "Feminino"], "Selecione uma opção válida"),
      birthdate: yup.date().required("Este campo é obrigatório").nullable(),
      cpf: yup
        .string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Digite um CPF válido")
        .required("Este campo é obrigatório"),
      rg: yup
        .string()
        .max(20, "Este campo deve ter no máximo 20 caracteres")
        .required("Este campo é obrigatório"),
      maritalStatus: yup
        .string()
        .oneOf(
          [
            "Solteiro(a)",
            "Casado(a)/ União Estável",
            "Viúvo(a)",
            "Separado(a)",
            "Divorciado(a)",
          ],
          "Selecione uma opção válida"
        ),
      phone: yup
        .string()
        .matches(
          /^\(\d{2}\) \d \d{4}-\d{5}$/,
          "Digite um número de telefone válido"
        )
        .required("Este campo é obrigatório"),
      email: yup.string().email("Digite um e-mail válido"),
      naturalness: yup
        .string()
        .min(5, "Este campo deve ter pelo menos 5 caracteres")
        .max(50, "Este campo deve ter no máximo 50 caracteres")
        .required("Este campo é obrigatório"),
      emergencyContact: yup
        .string()
        .matches(
          /^\(\d{2}\) \d \d{4}-\d{5}$/,
          "Digite um número de telefone válido"
        )
        .required("Este campo é obrigatório"),
      allergies: yup
        .string()
        .max(200, "Este campo deve ter no máximo 200 caracteres"),
      specialCare: yup
        .string()
        .max(200, "Este campo deve ter no máximo 200 caracteres"),
      insurance: yup.string(),
      insuranceNumber: yup.string(),
      insuranceValidity: yup.string(),
    });
    
  
    validationSchema
      .validate(
        {
          name,
          gender,
          birthdate,
          cpf,
          rg,
          maritalStatus,
          phone,
          email,
          naturalness,
          emergencyContact,
          allergies,
          specialCare,
          insurance,
          insuranceNumber,
          insuranceValidity,
        },
        { abortEarly: false } // Permite exibir todas as mensagens de erro de uma vez
      )
      .then(() => {
        addPatientToLocalStorage();
        alert("Novo paciente cadastrado com sucesso");
      })
      .catch((error) => {
        if (error.inner) {
          error.inner.forEach((err) => {
            const { path, message } = err;
            if (path === "name") {
              setNameError(message);
            } else if (path === "gender") {
              setGenderError(message);
            } else if (path === "birthdate") {
              setBirthdateError(message);
            } else if (path === "cpf") {
              setCpfError(message);
            } else if (path === "rg") {
              setRgError(message);
            } else if (path === "maritalStatus") {
              setMaritalStatusError(message);
            } else if (path === "phone") {
              setPhoneError(message);
            } else if (path === "email") {
              setEmailError(message);
            } else if (path === "naturalness") {
              setNaturalnessError(message);
            } else if (path === "emergencyContact") {
              setEmergencyContactError(message);
            }
          });
        }
      });
  };
  
  // const handleFormSubmission = (e) => {
  //   e.preventDefault();

  //   const validationSchema = yup.object().shape({
  //     name: yup
  //       .string()
  //       .min(5, "Este campo deve ter pelo menos 5 caracteres")
  //       .max(50, "Este campo deve ter no máximo 50 caracteres"),
  //     gender: yup
  //       .string()
  //       .oneOf(["Masculino", "Feminino"], "Selecione uma opção válida"),
  //     birthdate: yup.date().required("Este campo é obrigatório").nullable(),
  //     cpf: yup
  //       .string()
  //       .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Digite um CPF válido")
  //       .required("Este campo é obrigatório"),
  //     rg: yup
  //       .string()
  //       .max(20, "Este campo deve ter no máximo 20 caracteres")
  //       .required("Este campo é obrigatório"),
  //     maritalStatus: yup
  //       .string()
  //       .oneOf(
  //         [
  //           "Solteiro(a)",
  //           "Casado(a)/ União Estável",
  //           "Viúvo(a)",
  //           "Separado(a)",
  //           "Divorciado(a)",
  //         ],
  //         "Selecione uma opção válida"
  //       ),
  //     phone: yup
  //       .string()
  //       .matches(
  //         /^\(\d{2}\) \d \d{4}-\d{5}$/,
  //         "Digite um número de telefone válido"
  //       )
  //       .required("Este campo é obrigatório"),
  //     email: yup.string().email("Digite um e-mail válido"),
  //     naturalness: yup
  //       .string()
  //       .min(5, "Este campo deve ter pelo menos 5 caracteres")
  //       .max(50, "Este campo deve ter no máximo 50 caracteres")
  //       .required("Este campo é obrigatório"),
  //     emergencyContact: yup
  //       .string()
  //       .matches(
  //         /^\(\d{2}\) \d \d{4}-\d{5}$/,
  //         "Digite um número de telefone válido"
  //       )
  //       .required("Este campo é obrigatório"),
  //     allergies: yup
  //       .string()
  //       .max(200, "Este campo deve ter no máximo 200 caracteres"),
  //     specialCare: yup
  //       .string()
  //       .max(200, "Este campo deve ter no máximo 200 caracteres"),
  //     insurance: yup.string(),
  //     insuranceNumber: yup.string(),
  //     insuranceValidity: yup.string(),
  //   });

  //   validationSchema
  //     .validate(
  //       {
  //         name,
  //         gender,
  //         birthdate,
  //         cpf,
  //         rg,
  //         maritalStatus,
  //         phone,
  //         email,
  //         naturalness,
  //         emergencyContact,
  //         allergies,
  //         specialCare,
  //         insurance,
  //         insuranceNumber,
  //         insuranceValidity,
  //       }
  //     )
  //     .then(() => {
  //       addPatientToLocalStorage();
  //       alert("Novo paciente cadastrado com sucesso");
  //     })
  //     .catch((error) => {
  //       if (error.inner) {
  //         error.inner.forEach((err) => {
  //           const { path, message } = err;
  //           if (path === "name") {
  //             setNameError(message);
  //           } else if (path === "gender") {
  //             setGenderError(message);
  //           } else if (path === "birthdate") {
  //             setBirthdateError(message);
  //           } else if (path === "cpf") {
  //             setCpfError(message);
  //           } else if (path === "rg") {
  //             setRgError(message);
  //           } else if (path === "maritalStatus") {
  //             setMaritalStatusError(message);
  //           } else if (path === "phone") {
  //             setPhoneError(message);
  //           } else if (path === "email") {
  //             setEmailError(message);
  //           } else if (path === "naturalness") {
  //             setNaturalnessError(message);
  //           } else if (path === "emergencyContact") {
  //             setEmergencyContactError(message);
  //           }
  //         });
  //       }
  //     });
  // };

  return (
    <>
      <Styled.PatientRegister>
        <form onSubmit={handleFormSubmission} noValidate>
          <ButtonComponent id="save" type="submit" label="Salvar" />

          <InputComponent
            id="name"
            type="text"
            placeholder="Digite seu nome completo"
            label="Nome Completo"
            value={name}
            onInput={handleInput}
            error={nameError}
          />
          {nameError && <div>{nameError}</div>}

          <InputComponent
            id="gender"
            type="text"
            placeholder="Digite o gênero"
            label="Gênero"
            value={gender}
            onInput={handleInput}
            error={genderError}
          />
          {genderError && <div>{genderError}</div>}

          <InputComponent
            id="birthdate"
            type="date"
            placeholder="Selecione a data de nascimento"
            label="Data de Nascimento"
            value={birthdate}
            onInput={handleInput}
            error={birthdateError}
          />
          {birthdateError && <div>{birthdateError}</div>}

          <InputComponent
            id="cpf"
            type="text"
            placeholder="Digite o CPF"
            label="CPF"
            value={cpf}
            onInput={handleInput}
            error={cpfError}
          />
          {cpfError && <div>{cpfError}</div>}

          <InputComponent
            id="rg"
            type="text"
            placeholder="Digite o RG"
            label="RG"
            value={rg}
            onInput={handleInput}
            error={rgError}
          />
          {rgError && <div>{rgError}</div>}

          <InputComponent
            id="maritalStatus"
            type="text"
            placeholder="Digite o estado civil"
            label="Estado Civil"
            value={maritalStatus}
            onInput={handleInput}
            error={maritalStatusError}
          />
          {maritalStatusError && <div>{maritalStatusError}</div>}

          <InputComponent
            id="phone"
            type="text"
            placeholder="Digite o telefone"
            label="Telefone"
            value={phone}
            onInput={handleInput}
            error={phoneError}
          />
          {phoneError && <div>{phoneError}</div>}

          <InputComponent
            id="email"
            type="email"
            placeholder="Digite o email"
            label="E-mail"
            value={email}
            onInput={handleInput}
            error={emailError}
          />
          {emailError && <div>{emailError}</div>}

          <InputComponent
            id="naturalness"
            type="text"
            placeholder="Digite a naturalidade"
            label="Naturalidade"
            value={naturalness}
            onInput={handleInput}
            error={naturalnessError}
          />
          {naturalnessError && <div>{naturalnessError}</div>}

          <InputComponent
            id="emergencyContact"
            type="text"
            placeholder="Digite o contato de emergência"
            label="Contato de Emergência"
            value={emergencyContact}
            onInput={handleInput}
            error={emergencyContactError}
          />
          {emergencyContactError && <div>{emergencyContactError}</div>}

          <InputComponent
            id="allergies"
            type="text"
            placeholder="Digite as alergias"
            label="Alergias"
            value={allergies}
            onInput={handleInput}
          />

          <InputComponent
            id="specialCare"
            type="text"
            placeholder="Digite os cuidados especiais"
            label="Cuidados Específicos"
            value={specialCare}
            onInput={handleInput}
          />

          <InputComponent
            id="insurance"
            type="text"
            placeholder="Digite o convênio"
            label="Convênio"
            value={insurance}
            onInput={handleInput}
          />

          <InputComponent
            id="insuranceNumber"
            type="text"
            placeholder="Digite o número do convênio"
            label="Número do Convênio"
            value={insuranceNumber}
            onInput={handleInput}
          />

          <InputComponent
            id="insuranceValidity"
            type="text"
            placeholder="Digite a validade do convênio"
            label="Validade do Convênio"
            value={insuranceValidity}
            onInput={handleInput}
          />

        </form>
      </Styled.PatientRegister>
    </>
  );
};