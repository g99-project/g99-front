import { Helmet } from 'react-helmet';

// component
import Header from './components/Header';
import Router from './routes/Router';
import { Container } from 'reactstrap';

function App() {
  return (
    <>
      <Helmet><title>지구구</title></Helmet>
      <div id="wrap">
        <Header />
        <Container>
          <Router />
        </Container>
      </div>
    </>
  );
}

export default App;
