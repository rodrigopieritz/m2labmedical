import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { AuthProvider } from "./context/auth/auth.context.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
