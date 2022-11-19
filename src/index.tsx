import { ChakraProvider, ColorModeScript, extendTheme, type ThemeConfig } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme({
  colors: {
    brand: {
      black: '#1E1E1E',
      darkpurple: '#8E46A0',
      lightpurple: '#9A8AA6',
      verylightpurple: '#DBD0E3',
      white: '#FFFFFF',
      darkyellow: '#B19F5D',
      darkcyan: '#B19F5D',
      darkgreen: '#599369',
    },
  },
  config,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
