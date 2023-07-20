const API_VIACEP = "https://viacep.com.br/ws/CEP/json/";

async function Get(cep) {
  const response = await fetch(API_VIACEP.replace("CEP", cep));
  const data = await response.json();
  if (data.erro) {
    setCepError("CEP inválido");
  } else {
    console.log(data);
  }
}

export const RequestCep = {
  Get,
};
