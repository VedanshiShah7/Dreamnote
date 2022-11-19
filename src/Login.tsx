import React from 'react';
import Hero from './Hero';

<<<<<<< Updated upstream
function Login() {
  return <div>Login Page</div>;
=======

const Login = (props: { email: any; setEmail: any; password: any; setPassword: any; handleLogin: any; handleSignUp: any; handleLogout:any; hasAccount: any; setHasAccount: any; emailError: any; passwordError: any; }) => {
  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin, 
    handleSignUp, 
    handleLogout,
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError
  } = props;
  
    return (
      <section className='login'>
        <div className='loginContainer'>
          <label>Username</label>
          <input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </input>
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <input 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}>
            </input>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              {hasAccount ? (
                <>
                <button onClick={handleLogin}>Log In</button>
                <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                </>
              ) : (
                <>
                <button onClick={handleSignUp}>Sign Up</button>
                <p>Already have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log In</span></p>
                </>
              )}
            </div>
        </div>
      </section>
    )
>>>>>>> Stashed changes
}

export default Login;
