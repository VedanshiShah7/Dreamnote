import React from 'react';
import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,

} from "@chakra-ui/react";


//const CFaUserAlt = chakra(FaUserAlt);
//const CFaLock = chakra(FaLock);

const Login = (props: { email: any; setEmail: any; password: any; setPassword: any; handleLogin: any; handleSignUp: any; hasAccount: any; setHasAccount: any; emailError: any; passwordError: any; }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin, 
    handleSignUp, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError
  } = props;
  
    return (
      <section className='login'>
        <div className='loginContainer'>
          <label>Username</label>
          <Input
            type='text'
            autoFocus
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
          </Input>
          <p className="errorMsg">{emailError}</p>
          <label>Password</label>
          <Input 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}>
            </Input>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
              {hasAccount ? (
                <>
                <button onClick={handleLogin}>Log In</button>
                <p>Don't have an account? <Button onClick={() => setHasAccount(!hasAccount)}>Sign Up</Button></p>
                </>
              ) : (
                <>
                <Button onClick={handleSignUp}>Sign Up</Button>
                <p>Already have an account? <Button onClick={() => setHasAccount(!hasAccount)}>Log In</Button></p>
                </>
              )}
            </div>
        </div>
      </section>
    )
}

export default Login;
