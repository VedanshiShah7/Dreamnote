import React from 'react';
import { useState } from 'react';
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
  Text,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  FormLabel,
  Checkbox,
  useColorModeValue,
} from '@chakra-ui/react';

//const CFaUserAlt = chakra(FaUserAlt);
//const CFaLock = chakra(FaLock);

const Login = (props: {
  email: any;
  setEmail: any;
  password: any;
  setPassword: any;
  handleLogin: any;
  handleSignUp: any;
  hasAccount: any;
  setHasAccount: any;
  emailError: any;
  passwordError: any;
}) => {
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
    passwordError,
  } = props;

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box rounded={'lg'} bg={'purple.200'} boxShadow={'lg'} p={8}>
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input type='email' required value={email} onChange={e => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );

  return (
    <section className='login'>
      <div className='loginContainer'>
        <label>Username</label>
        <Input type='text' autoFocus required></Input>
        <p className='errorMsg'>{emailError}</p>
        <label>Password</label>
        <Input
          type='password'
          required
          value={password}
          onChange={e => setPassword(e.target.value)}></Input>
        <p className='errorMsg'>{passwordError}</p>
        <div className='btnContainer'>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Log In</button>
              <p>
                Don't have an account?{' '}
                <Button onClick={() => setHasAccount(!hasAccount)}>Sign Up</Button>
              </p>
            </>
          ) : (
            <>
              <Button onClick={handleSignUp}>Sign Up</Button>
              <p>
                Already have an account?{' '}
                <Button onClick={() => setHasAccount(!hasAccount)}>Log In</Button>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
