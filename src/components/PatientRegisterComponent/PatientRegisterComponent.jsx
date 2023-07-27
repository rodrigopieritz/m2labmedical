import React, { useState, useEffect } from "react";
import * as Styled from "./PatientRegisterComponent.style";
import { ButtonComponent } from "../Button/buttonComponent";
import { InputComponent } from "../Input/inputComponent";
import * as yup from "yup";
import { addPatient, getPatientById, getPatients } from "../../service/patients.service";
import { Spinner } from 'react-bootstrap';
import PropTypes from "prop-types";

import { Navigate, useNavigate } from "react-router";


export const PatientRegisterComponent = ({id}) => {
  //Variáveis dos Campos do Formulário
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
  const [ufError, setUfError] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [neighborhoodError, setNeighborhoodError] = useState("");
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [houseNumberError, setHouseNumberError] = useState("");
  const [complement, setComplement] = useState("");
  const [nextTo, setNextTo] = useState("");
  
  
  //Variáveis dos botões
  const [editButtonDisabled, setEditButtonDisabled] = useState(false);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false);

   //Variáveis Barra de Pesquisa
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPatientData, setFoundPatientData] = useState(null);
  const [foundPatientDataError, setFoundPatientDataError] = useState(null);
  const [foundPatientId, setFoundPatientId] = useState(null);
  const [foundPatientIdError, setFoundPatientIdError] = useState(null);

  //Auxiliares renderização e assist LEC
const [saveAnimationRender, setSaveAnimationRender] = useState(false);
const [searchPatientRender, setSearchPatientRender] = useState(false);
const [formMode, setFormMode] = useState(null);
const [readMode, setReadMode] = useState(true);
//const [examRender, setExamRender] = useState(null);

  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);}

    useEffect(() => {
      switch (id) {
        case "newPatient":
          setFormMode("register");
          break;
        default:
          setFormMode("read");
      }
    }, [id]);

    useEffect(() => {
      const newPatientData = getPatientById(foundPatientId);
      setFoundPatientData(newPatientData);
    }, [foundPatientId]);

    useEffect(() => {
      if (formMode === "register") {
        setReadMode(false);
        setEditButtonDisabled(true);
        setDeleteButtonDisabled(true);
        setSaveButtonDisabled(false);
        setSearchPatientRender(true);
        setFoundPatientData("");
        setFoundPatientId("");
        setSearchQuery("");
  setName("");
setGender("");
  setBirthdate("");
  setCpf("");
  setRg("");
  setMaritalStatus("");
  setPhone("");
  setEmail("");
  setNaturalness("");
  setEmergencyContact("");
  setAllergies("");
  setSpecialCare("");
  setInsurance("");
  setInsuranceNumber("");
  setInsuranceValidity("");
  setCep("");
  setCity("");
  setUf("");
setNeighborhood("");
setStreet("");
   setHouseNumber("");
   setComplement("");
  setNextTo("");

      }
      if (formMode === "read") {
        setReadMode(true);
        setEditButtonDisabled(false);
        setDeleteButtonDisabled(false);
        setSaveButtonDisabled(false);
        setSearchPatientRender(false);
        //setExamRender(getExamRenderData());
      }
      if (formMode === "edit") {
        setReadMode(false);
        setEditButtonDisabled(true);
        setDeleteButtonDisabled(false);
        setSaveButtonDisabled(false);
        setSearchPatientRender(false);
        //setExamRender(getExamRenderData());
      }
    }, [formMode]);

    // const getExamRenderData = () => {
    //   const exam = getExamById(id);
    //   if (exam) {
    //     setFoundPatientId(exam.patient);
    //     setExamName(exam.examName);
    //     setExamDate(exam.examDate);
    //     setExamTime(exam.examTime);
    //     setExamType(exam.examType);
    //     setUrlDoc(exam.urlDoc);
    //     setLaboratory(exam.laboratory);
    //     setResults(exam.results);
    //   } else {
    //     setExamRender(false);
    //     alert("Exame não encontrado.");
    //   }
    // };

    const handleSearchPatient = () => {
      if (searchQuery.trim() === "") {
        setFoundPatientData(null);
        setFoundPatientId(null);
        return;
      }
      const patientsList = getPatients();
  
      const patient = patientsList.find((patient) =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      if (patient) {
        setFoundPatientData(patient);
        setFoundPatientId(patient.id);
      } else {
        setFoundPatientData(null);
        setFoundPatientId(patient.id);
        alert("Paciente não encontrado.");
      }
    };

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
    } else if (id === "uf") {
      setUf(value);
      setUfError("");
    } else if (id === "neighborhood") {
      setNeighborhood(value);
      setNeighborhoodError("");
    } else if (id === "street") {
      setStreet(value);
      setStreetError("");
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
    setUfError("");
    setNeighborhoodError("");
    setStreetError("");

    if (value.length === 8) {
      try {
        console.log("Iniciar consulta à API de CEP", value);
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
      requestCep(cep);
    }
  }, [cep]);

  // função para busca do CEP
  
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

  //Funções CRUD

  // const updateExamRegisterToLocalStorage = () => {
  //   const idFromLocalStorage = +id;
  //   const setExamRegister = {
  //     patient: foundPatientId,
  //     examName: examName,
  //     examDate: examDate,
  //     examTime: examTime,
  //     examType: examType,
  //     urlDoc: urlDoc,
  //     laboratory: laboratory,
  //     results: results,
  //   };
  //   updateExamRegister(idFromLocalStorage, setExamRegister);
  //   setSaveAnimationRender(false);
  //   setFormMode("read");
  //   handleRedirect("/medical-record-list");

  const addPatientToLocalStorage = () => {
    const newPatientRegister = {
      name: name,
      gender: gender,
      birthdate: birthdate,
      cpf: cpf,
      rg: rg,
      maritalStatus: maritalStatus,
      phone: phone,
      email: email,
      naturalness: naturalness,
      emergencyContact: emergencyContact,
      allergies: allergies,
      specialCare: specialCare,
      insurance: insurance,
      insuranceNumber: insuranceNumber,
      insuranceVality: insuranceValidity,
      cep: cep,
      city: city,
      uf: uf,
      neighborhood: neighborhood,
      street: street,
      houseNumber: houseNumber,
      complement: complement,
      nextTo: nextTo,
    };
    addPatient(newPatientRegister);
    setSaveAnimationRender(false);
    setName("");
    setGender("");
      setBirthdate("");
      setCpf("");
      setRg("");
      setMaritalStatus("");
      setPhone("");
      setEmail("");
      setNaturalness("");
      setEmergencyContact("");
      setAllergies("");
      setSpecialCare("");
      setInsurance("");
      setInsuranceNumber("");
      setInsuranceValidity("");
      setCep("");
      setCity("");
      setUf("");
    setNeighborhood("");
    setStreet("");
       setHouseNumber("");
       setComplement("");
      setNextTo("");
    setFoundPatientData("");
    setFoundPatientId("");
    setSearchQuery("");
    alert("Paciente cadastrado com sucesso")
  };

  // const deletExamRegisterToLocalStorage = () => {
  //   const idFromLocalStorage = +id;
  //   deleteExam(idFromLocalStorage);
  //   alert("Exame deletado com sucesso!");
  //   handleRedirect("/medical-record-list");
  // };

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
      birthdate: yup
        .date("Este campo é obrigatório")
        .required("Este campo é obrigatório")
        .nullable("Este campo é obrigatório")
        .typeError("Data de nascimento inválida"),
      cpf: yup
        .string()
        .matches(
          /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
          "Digite um CPF válido, no formato 999.999.999-99"
        )
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
          "Digite um número de telefone no formato (99) 9 9999-99999"
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
          "Digite um número de telefone no formato (99) 9 9999-99999"
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
      cep: yup
        .string()
        .length(8, "CEP Inválido")
        .required("Este campo é obrigatório"),
      city: yup.string().required("Este campo é obrigatório"),
      uf: yup.string().required("Este campo é obrigatório"),
      neighborhood: yup.string().required("Este campo é obrigatório"),
      street: yup.string().required("Este campo é obrigatório"),
      houseNumber: yup.string().required("Este campo é obrigatório"),
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
          cep,
          city,
          uf,
          neighborhood,
          street,
          houseNumber,
        },
        { abortEarly: false }
      )
      .then(() => {
        setSaveAnimationRender(true);
        if (formMode === "register") {
          setTimeout(() => {
            addPatientToLocalStorage();
            alert("Paciente cadastrado com sucesso");
          }, 2000);
        } else {
          setTimeout(() => {
           // updateExamRegisterToLocalStorage();
            alert("Paciente atualizado com sucesso");
          }, 1500);
        }
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
            } else if (path === "cep") {
              setCepError(message);
            }
            if (path === "city") {
              setCityError(message);
            }
            if (path === "uf") {
              setUfError(message);
            }
            if (path === "neighborhood") {
              setNeighborhoodError(message);
            }
            if (path === "street") {
              setStreetError(message);
            }
            if (path === "houseNumber") {
              setHouseNumberError(message);
            } else if (path === "houseNumber") {
              setHouseNumberError(message);
            }
          });
        }
      });
  };
  console.log(id);
  return (
    <>
<p> {formMode} </p>

{formMode === "register" ? (
  <div>
    <InputComponent
      id="searchPatientInp"
      type="text"
      placeholder="Digite o nome do paciente"
      label="Buscar Paciente"
      value={searchQuery}
      onInput={(event) => setSearchQuery(event.target.value)}
    />
    <ButtonComponent
      id="searchPatientBtn"
      type="button"
      label="Buscar Paciente"
      onClick={handleSearchPatient}
    />
  </div>
) : (
  <></>
)}
{!foundPatientData ? (
  <h5>Para começar, escolha um paciente</h5>
) : (
  <h5>
    Paciente Selecionado: {foundPatientData.name}
  </h5>
)}
{foundPatientDataError && <div>{foundPatientDataError}</div>}

<form onSubmit={handleFormSubmission} noValidate>
  <ButtonComponent
    id="editButton"
    type="button"
    label="Editar"
    disabled={editButtonDisabled}
    onClick={() => {
      setFormMode("edit");
    }}
  />
  <ButtonComponent
    id="deletButton"
    type="button"
    label="Apagar"
    disabled={deleteButtonDisabled}
    onClick={() => alert("ainda precisa ser desenvolvido")}
  />
  <ButtonComponent
    id="save"
    type="submit"
    label="Salvar"
    onClick={handleFormSubmission}
    disabled={saveButtonDisabled}
  />
  {saveAnimationRender && (
    <div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
    </div>
  )}
         

          <h3>Informações do Paciente</h3>

         

          <InputComponent
            id="name"
            type="text"
            placeholder="Digite seu nome completo"
            label="Nome Completo"
            value={name}
            onInput={handleInput}
            error={nameError}
            readOnly={readMode}
          />
          {nameError && <div>{nameError}</div>}

          <div>
            <label htmlFor="gender">Gênero</label>
            <div>
              <select
                id="gender"
                value={gender}
                readOnly={readMode}
                onChange={handleInput}
                onBlur={handleInput}
                className={genderError ? "error" : ""}
              >
                <option disabled hidden value="">
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
            readOnly={readMode}
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
            readOnly={readMode}
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
            readOnly={readMode}
          />
          {rgError && <div>{rgError}</div>}
          <div>
            <label htmlFor="Estado Civil">Estado Civil</label>
            <div>
              <select
                id="maritalStatus"
                value={maritalStatus}
                readOnly={readMode}
                onChange={handleInput}
                onBlur={handleInput}
                className={maritalStatusError ? "error" : ""}
              >
                <option disabled hidden value="">
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
            readOnly={readMode}
          />
          {naturalnessError && <div>{naturalnessError}</div>}

          <InputComponent
            id="allergies"
            type="text"
            placeholder="Digite as alergias"
            label="Alergias"
            value={allergies}
            onInput={handleInput}
            readOnly={readMode}
          />

          <InputComponent
            id="specialCare"
            type="text"
            placeholder="Digite os cuidados especiais"
            label="Cuidados Específicos"
            value={specialCare}
            onInput={handleInput}
            readOnly={readMode}
          />

          <InputComponent
            id="insurance"
            type="text"
            placeholder="Digite o convênio"
            label="Convênio"
            value={insurance}
            onInput={handleInput}
            readOnly={readMode}
          />

          <InputComponent
            id="insuranceNumber"
            type="text"
            placeholder="Digite o número do convênio"
            label="Número do Convênio"
            value={insuranceNumber}
            onInput={handleInput}
            readOnly={readMode}
          />

          <InputComponent
            id="insuranceValidity"
            type="text"
            placeholder="Digite a validade do convênio"
            label="Validade do Convênio"
            value={insuranceValidity}
            onInput={handleInput}
            readOnly={readMode}
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
            readOnly={readMode}
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
            readOnly={readMode}
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
            readOnly={readMode}
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
            readOnly={readMode}
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
            id="uf"
            type="text"
            placeholder="Digite o estado (UF)"
            label="Estado (UF)"
            onInput={handleInput}
            value={uf}
            readOnly={true}
          />
          {ufError && <div>{ufError}</div>}
          <InputComponent
            id="neighborhood"
            type="text"
            placeholder="Digite o bairro"
            label="Bairro"
            onInput={handleInput}
            value={neighborhood}
            readOnly={false}
          />
          {neighborhoodError && <div>{neighborhoodError}</div>}
          <InputComponent
            id="street"
            type="text"
            placeholder="Digite o logradouro"
            label="Logradouro"
            onInput={handleInput}
            value={street}
            readOnly={false}
          />
          {streetError && <div>{streetError}</div>}

          <InputComponent
            id="houseNumber"
            type="text"
            placeholder="Digite o número da casa"
            label="Número"
            value={houseNumber}
            onInput={handleInput}
            readOnly={false}
          />
          {houseNumberError && <div>{houseNumberError}</div>}

          <InputComponent
            id="complement"
            type="text"
            placeholder="Digite o complemento (apartamento, casa, etc.)"
            label="Complemento"
            value={complement}
            onInput={handleInput}
            readOnly={false}
          />
          <InputComponent
            id="nextTo"
            type="text"
            placeholder="Informe um local próximo"
            label="Próximo à:"
            value={nextTo}
            onInput={handleInput}
            readOnly={false}
          />
        </form>
      
    </>
  );
};


PatientRegisterComponent.propTypes = {
  id: PropTypes.number,
}