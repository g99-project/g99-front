import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import GlobalFont from './styles/GlobalFont';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// component
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { Wrap } from './styles/Layout';
import Router from './Router';


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
          <FooterComponent />
        </ThemeProvider>
      </Wrap>
    </>
  );
}

export default App;
