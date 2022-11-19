import React, { useState, useEffect } from 'react';
import fire from './firebase';

import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Notes from './Notes';
import Login from './Login';

export interface Note {
  title: string;
  text: string;
  id: string;
  tags: string[];
}
const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <Box
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}>
    <Link to={to}>{children}</Link>
  </Box>
);

function App() {
  const [user, setUser] = useState<any | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    navigate('/notes');
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = () => {
    navigate('/notes');
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-user':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    navigate('/');
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const links = hasAccount
    ? [
        { text: 'Notes', path: 'notes' },
        // { text: 'Synthesis', path: 'synthesis' },
      ]
    : [{ text: 'Log In', path: 'login' }];

  return (
    <>
      <Box bg='purple.400' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box pl={5}>
              <Link to='/'>
                <img src='logo.png' alt='logo' height='40px' width='40px' />
              </Link>
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {links.map(link => (
                <NavLink key={link.path} to={link.path}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                {hasAccount ? <Avatar size={'sm'} src='profile.png' /> : <InfoIcon />}
              </MenuButton>
              {hasAccount && (
                <MenuList>
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </MenuList>
              )}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {links.map(link => (
                <NavLink key={link.path} to={link.path}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Notes />} />
          {/* <Route path='/synthesis' element={<Synthesis />} /> */}
          <Route
            path='/login'
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
              />
            }
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
