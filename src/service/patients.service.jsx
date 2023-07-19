import { LocalStorageService } from "./LocalStorage.service";

const Get = () => {
  return LocalStorageService.get('patients');
}

const Create = (data) => {
  const patients = Get();

  data = {
    id: patients.length + 1,
    ...data,
  }

  LocalStorageService.set('patients', [...patients, data]);
}

const Show = (id) => {
  return Get().find(patient => user.id === id);
}



const Delete = (id) => {
  LocalStorageService.set('users', Get().filter(user => user.id !== id));
}

const Update = (id, data) => {
  const users = Get();

  users[users.find(user => user.id === id).indexOf] = data;

  LocalStorageService.set('users', users)
}


export const UserService = {
  Get,
  Create,
  Show,
  ShowByEmail,
  Delete,
  Update
}