import React from 'react';
// component
import Header from './components/Header';
import Router from './routes/Router';

function App() {
  return (
    <div id="wrap">
      <Header />
      <main id="container">
        <Router />
      </main>
    </div>
  );
}

export default App;
