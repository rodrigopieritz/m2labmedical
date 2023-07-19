const get = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }
  
  const set = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
  }
  
  export const LocalStorageService = {
    get,
    set,
  }

  // fazendo no component
  // const patient = PatientService.Show(id)

  // colocar no app.jsx (após o import e antes da function)
  // if(!LocalStorageService.getItem('users')) {LocalStorageService.set('users',[
  //  id:1, email:email@jakjs.com,
   // paswword:123
 // ])} 