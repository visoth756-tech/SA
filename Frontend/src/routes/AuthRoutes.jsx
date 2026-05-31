import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginAccount from '../pages/auth/LoginAccount';
import CreateAccount from '../pages/auth/CreateAccount';

function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element=
        {<LoginAccount
        />}
      />
      <Route path="register" element=
        {<CreateAccount

        />}
      />
    </Routes>
  )
}

export default AuthRoutes