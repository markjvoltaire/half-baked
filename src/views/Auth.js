// import classNames from 'classnames';
import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser, signupUser } from '../services/users';

export default function SignIn({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser();
      console.log(resp);
    } catch (error) {
      //   console.log(error);
      setErrorMessage('Sorry Try Again');
    }
  };

  return (
    <div>
      <div className="useState">
        <button
          onClick={() => {
            setType('signin');
          }}
        >
          {' '}
          Sign In
        </button>

        <button
          onClick={() => {
            setType('signup');
          }}
        >
          {' '}
          Sign Up
        </button>
      </div>

      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        type={type}
        setType={setType}
      />
    </div>
  );
}
