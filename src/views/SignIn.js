import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      resp = await signInUser(email, password);
      console.log(resp);
    } catch (error) {
      console.log(error);
      setErrorMessage('Sorry Try Again');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
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
