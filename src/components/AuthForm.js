import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <div>
      <h1>Auth Time</h1>
      <form>
        <div className="emailInputs">
          <input
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button onClick={handleSubmit}> Submit </button>
        </div>
      </form>
    </div>
  );
}
