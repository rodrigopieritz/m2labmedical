export const addAllowedUsersToLocalStorage = (email, password) => {
    const allowedUsers = JSON.parse(localStorage.getItem("allowedUsers")) || [];
    const newUser = {
        email,
        password,
      };
  
      allowedUsers.push(newUser);
      localStorage.setItem("allowedUsers", JSON.stringify(allowedUsers));
    };