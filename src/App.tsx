import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// component
import HeaderComponent from './components/HeaderComponent';
import Router from './routes/Router';


function App() {
  return (
    <>
      <Helmet><title>지구구</title></Helmet>
      <HeaderComponent />
      <Router />
    </>
  );
}

export default App;
