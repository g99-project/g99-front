import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFont from './styles/GlobalFont';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// component
import HeaderComponent from './components/HeaderComponent';
import { Wrap } from './styles/Layout';
import Router from './routes/Router';


function App() {
  return (
    <>
      <Helmet><title>지구구</title></Helmet>
      <Wrap>
        <ThemeProvider theme={lightTheme}>
          <GlobalFont />
          <GlobalStyles />
          <HeaderComponent />
          <Router />
        </ThemeProvider>
      </Wrap>
    </>
  );
}

export default App;
