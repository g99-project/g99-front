import { useRecoilState } from 'recoil';
import Router from './routes/Router';
// component
import Header from './components/Header';
import TopButton from './components/TopButton';
import { spinnerState } from './recoil/atoms';
import Spinner from './components/Spinner';

function App() {
  const [spinner, setSpinner] = useRecoilState(spinnerState); // eslint-disable-line no-unused-vars

  return (
    <div id="wrap">
      <Header />
      <main id="container">
        <Router />
        <TopButton />
      </main>
      {spinner ? <Spinner /> : null}
    </div>
  );
}

export default App;
