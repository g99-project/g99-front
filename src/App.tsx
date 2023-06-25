import { useRecoilState } from 'recoil';
import Router from './routes/Router';
// component
import Header from './components/Header';
import TopButton from './components/TopButton';
import { spinnerState } from './recoil/atoms';
import Spinner from './components/Spinner';
import apiInstance from './api/axiosIndex';

function App() {
  const [spinner, setSpinner] = useRecoilState(spinnerState);
  const showSpinner = async () => setSpinner(true);
  const hideSpinner = async () => setSpinner(false);
  apiInstance.setShowSpinner(showSpinner);
  apiInstance.setHideSpinner(hideSpinner);

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
