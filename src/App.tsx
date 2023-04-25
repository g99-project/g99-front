import React from 'react';
import Router from './routes/Router';
// component
import Header from './components/Header';
import TopButton from './components/TopButton';

function App() {
  return (
    <div id="wrap">
      <Header />
      <main id="container">
        <Router />
        <TopButton />
      </main>
    </div>
  );
}

export default App;
