import React, { useState, useEffect } from "react";
import * as Styled from "./PatientRegister.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";

export const PatientRegister = () => {
  
  //UseState dos campos do Form
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
  const [cep, setCep] = useState("");
  const [cepError, setCepError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [uf, setUf] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [houseNumberError, setHouseNumberError] = useState("");
  const [complement, setComplement] = useState("");
  const [nextTo, setNextTo] = useState("");
  // Valida se é um input válid, se sim daum set, se não retorna um erro
  
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
    } else if (id === "cep") {
      setCep(value);
      setCepError("");
    } else if (id === "city") {
      setCity(value);
      setCityError("");
    } else if (id === "houseNumber") {
      setHouseNumber(value);
      setHouseNumberError("");
    } else if (id === "complement") {
      setComplement(value);
    } else if (id === "nextTo") {
      setNextTo(value);
    }
  };

  const handleCep = async (event) => {
    event.preventDefault();
    const { value } = event.target;
    setCepError("");
    setCep("");
    setCity("");
    setUf("");
    setNeighborhood("");
    setStreet("");
    setCityError("");

    if (value.length === 8) {
      try {
        console.log("Iniciar consulta à API de CEP");
        await requestCep(value);
        console.log("Consulta concluída");
        handleInput(event);
      } catch (error) {
        console.error("Ocorreu um erro na consulta do CEP:", error);
      }
    }
  };

  useEffect(() => {
    if (cep.length === 8) {
      console.log("API request for CEP:", cep);
      requestCep(cep);
    }
  }, [cep]);

  const API_VIACEP = "https://viacep.com.br/ws/CEP/json/";

  async function requestCep(cep) {
    const response = await fetch(API_VIACEP.replace("CEP", cep));
    const data = await response.json();
    if (data.erro) {
      setCepError("CEP inválido");
    } else {
      console.log(data);
      setCity(data.localidade);
      setUf(data.uf);
      setNeighborhood(data.bairro);
      setStreet(data.logradouro);
    }
  }

  const addPatientToLocalStorage = () => {
    console.log(
      "Aqui será desenvolvida a lógica para adicionar o paciente no localStorage"
    );
    const newPatientRegister ={
      "name": name,
      "gender": gender,
      "bithdate": birthdate,
      "cpf":cpf,
      "rg":rg,
      "maritalStatus":maritalStatus,
      "phone":phone,
      "email": email,
      "naturalness": naturalness,
      "emergencyContact": emergencyContact,
      "allergies": allergies,
      "specialCare": specialCare,
      "insurance": insurance,
      "insuranceNumber": insuranceNumber,
      "insuranceVality": insuranceValidity,
      "cep":cep,
      "city": city,
    }
    console.log(newPatientRegister)
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();


    const validationSchema = yup.object().shape({
      // name: yup
      //   .string()
      //   .min(5, "Este campo deve ter pelo menos 5 caracteres")
      //   .max(50, "Este campo deve ter no máximo 50 caracteres"),
      // gender: yup
      //   .string()
      //   .oneOf(["Masculino", "Feminino"], "Selecione uma opção válida"),
      // birthdate: yup
      //   .date("Este campo é obrigatório")
      //   .required("Este campo é obrigatório")
      //   .nullable("Este campo é obrigatório")
      //   .typeError("Data de nascimento inválida"),
      // cpf: yup
      //   .string()
      //   .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Digite um CPF válido, no formato 999.999.999-99")
      //   .required("Este campo é obrigatório"),
      // rg: yup
      //   .string()
      //   .max(20, "Este campo deve ter no máximo 20 caracteres")
      //   .required("Este campo é obrigatório"),
      // maritalStatus: yup
      //   .string()
      //   .oneOf(
      //     [
      //       "Solteiro(a)",
      //       "Casado(a)/ União Estável",
      //       "Viúvo(a)",
      //       "Separado(a)",
      //       "Divorciado(a)",
      //     ],
      //     "Selecione uma opção válida"
      //   ),
      // phone: yup
      //   .string()
      //   .matches(
      //     /^\(\d{2}\) \d \d{4}-\d{5}$/,
      //     "Digite um número de telefone no formato (99) 9 9999-99999"
      //   )
      //   .required("Este campo é obrigatório"),
      // email: yup.string().email("Digite um e-mail válido"),
      // naturalness: yup
      //   .string()
      //   .min(5, "Este campo deve ter pelo menos 5 caracteres")
      //   .max(50, "Este campo deve ter no máximo 50 caracteres")
      //   .required("Este campo é obrigatório"),
      // emergencyContact: yup
      //   .string()
      //   .matches(
      //     /^\(\d{2}\) \d \d{4}-\d{5}$/,
      //     "Digite um número de telefone no formato (99) 9 9999-99999"
      //   )
      //   .required("Este campo é obrigatório"),
      // allergies: yup
      //   .string()
      //   .max(200, "Este campo deve ter no máximo 200 caracteres"),
      // specialCare: yup
      //   .string()
      //   .max(200, "Este campo deve ter no máximo 200 caracteres"),
      // insurance: yup.string(),
      // insuranceNumber: yup.string(),
      // insuranceValidity: yup.string(),
      cep: yup
      .string()
      .length(8, "CEP Inválido")
      .required("Este campo é obrigatório"),
      city: yup
      .string()
      .required("Este campo é obrigatório")
    //   houseNumber: yup.number().required("Esta campo é obrigatório"),
    });

    validationSchema
      .validate(
        {
          // name,
          // gender,
          // birthdate,
          // cpf,
          // rg,
          // maritalStatus,
          // phone,
          // email,
          // naturalness,
          // emergencyContact,
          // allergies,
          // specialCare,
          // insurance,
          // insuranceNumber,
          // insuranceValidity,
          cep,
          city,
    //       houseNumber,
        },
        { abortEarly: false }
      )
      .then(() => {
        addPatientToLocalStorage();
        alert("Novo paciente cadastrado com sucesso");
      })
      .catch((error) => {
        if (error.inner) {
          error.inner.forEach((err) => {
            const { path, message } = err;
            // if (path === "name") {
            //   setNameError(message);}
            //  else if (path === "gender") {
            //   setGenderError(message);
            // } else if (path === "birthdate") {
            //   setBirthdateError(message);
            // } else if (path === "cpf") {
            //   setCpfError(message);
            // } else if (path === "rg") {
            //   setRgError(message);
            // } else if (path === "maritalStatus") {
            //   setMaritalStatusError(message);
            // } else if (path === "phone") {
            //   setPhoneError(message);
            // } else if (path === "email") {
            //   setEmailError(message);
            // } else if (path === "naturalness") {
            //   setNaturalnessError(message);
            // } else if (path === "emergencyContact") {
            //   setEmergencyContactError(message);}else
             if (path === "cep") {
              setCepError(message);}
              if (path === "city") {
                setCityError(message);
      //       } else if (path === "houseNumber") {
      //         setHouseNumberError(message);
             }
          });
        }
      })
      
  };

  return (
    <>
      <Styled.PatientRegister>
        <form onSubmit={handleFormSubmission} noValidate>
          <ButtonComponent
            id="editButton"
            type="button"
            label="Editar"
            onClick={() => {
              alert("função ainda não desenvolvida");
            }}
          />
          <ButtonComponent
            id="deletButton"
            type="button"
            label="Apagar"
            onClick={() => {
              alert("função ainda não desenvolvida");
            }}
          />
          <ButtonComponent 
          id="save" 
          type="submit" 
          label="Salvar" 
          onClick ={handleFormSubmission}/>

          <h3>Informações do Paciente</h3>

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

          <div>
            <label htmlFor="gender">Gênero</label>
            <div>
              <select
                id="gender"
                value={gender}
                onChange={handleInput}
                onBlur={handleInput}
                className={genderError ? "error" : ""}
              >
                <option value="" disabled hidden>
                  Selecione o gênero
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </select>
            </div>
          </div>
          {genderError && <div>{genderError}</div>}

          <InputComponent
            id="birthdate"
            type="date"
            placeholder="01/01/2001"
            label="Data de Nascimento"
            value={birthdate}
            onInput={handleInput}
            error={birthdateError}
          />
          {birthdateError && <div>{birthdateError}</div>}

          <InputComponent
            id="cpf"
            type="text"
            placeholder="Digite o CPF no formato 99.999.999-99"
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
          <div>
            <label htmlFor="Estado Civil">Estado Civil</label>
            <div>
              <select
                id="maritalStatus"
                value={maritalStatus}
                onChange={handleInput}
                onBlur={handleInput}
                className={maritalStatusError ? "error" : ""}
              >
                <option disabled hidden>
                  Selecione o estado civil
                </option>
                <option value="Solteiro(a)">Solteiro(a)</option>
                <option value="Casado(a)/ União Estável">
                  Casado(a)/ União Estável
                </option>
                <option value="Viúvo(a)">Viúvo(a)</option>
                <option value="Separado(a)">Separado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
              </select>
            </div>
          </div>
          {maritalStatusError && <div>{maritalStatusError}</div>}

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
          <h3>Contato</h3>

          <InputComponent
            id="phone"
            type="text"
            placeholder="Digite o telefone no formato (99) 9 9999-99999"
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
            id="emergencyContact"
            type="text"
            placeholder="Digite o contato de emergência no formato (99) 9 9999-99999"
            label="Contato de Emergência"
            value={emergencyContact}
            onInput={handleInput}
            error={emergencyContactError}
          />
          {emergencyContactError && <div>{emergencyContactError}</div>}

          <p>Endereço</p>
          <InputComponent
            id="cep"
            type="text"
            placeholder="Digite seu CEP"
            label="CEP"
            onChange={handleCep}
            error={cepError}
          />
          {cepError && <div>{cepError}</div>}
          <InputComponent
            id="city"
            type="text"
            placeholder="Cidade"
            label="Cidade"
            onInput={handleInput}
            value={city}
            readOnly={true}
          />
          {cityError && <div>{cityError}</div>}
          <InputComponent
            id="city"
            type="text"
            placeholder="Cidade"
            label="Cidade"
            value={city}
            readOnly={true}
          />
          <InputComponent
            id="uf"
            type="text"
            placeholder="Digite o estado (UF)"
            label="Estado (UF)"
            value={uf}
            readOnly={true}
          />
          <InputComponent
            id="neighborhood"
            type="text"
            placeholder="Digite o bairro"
            label="Bairro"
            value={neighborhood}
            readOnly={true}
          />
          <InputComponent
            id="street"
            type="text"
            placeholder="Digite o logradouro"
            label="Logradouro"
            value={street}
            readOnly={true}
          />

          <InputComponent
            id="houseNumber"
            type="text"
            placeholder="Digite o número da casa"
            label="Número"
            value={houseNumber}
            onInput={handleInput}
            error={houseNumberError}
          />
          {houseNumberError && <div>{houseNumberError}</div>}

          <InputComponent
            id="complement"
            type="text"
            placeholder="Digite o complemento (apartamento, casa, etc.)"
            label="Complemento"
            value={complement}
            onInput={handleInput}
          />
          <InputComponent
            id="nextTo"
            type="text"
            placeholder="Informe um local próximo"
            label="Próximo à:"
            value={nextTo}
            onInput={handleInput}
          />
        </form>
      </Styled.PatientRegister>
    </>
  );
};
