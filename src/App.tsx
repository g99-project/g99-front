import Router from './routes/Router';
// component
import Header from './components/Header';
import TopButton from './components/TopButton';
import Spinner from './components/Spinner';

function App() {
  return (
    <div id="wrap">
      <Header />
      <main id="container">
        <Router />
        <TopButton />
      </main>
      <Spinner />
    </div>
  );
}

export default App;
