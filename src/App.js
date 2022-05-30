import React from 'react';
import {
  MyThemeComponent,
  MyThemeComponent1
} from './components/MyThemeComponent';
import Dashboard from './components/Dashboard/Dashboard';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Dashboard />
        <Blogs />
      </ThemeProvider>
    </>
  );
}

export default App;
