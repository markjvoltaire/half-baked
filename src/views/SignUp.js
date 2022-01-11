import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signupUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      resp = await signupUser(email, password);
      console.log(resp);
    } catch (error) {
      console.log(error);
      setErrorMessage('Sorry Try Again');
    }
  };

  return (
    <div>
      <h1>Sign up</h1>

      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
