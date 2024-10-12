import React from 'react';
import LandingPage from './components/LandingPage';
import Header from "./Header";


const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <LandingPage />
    </div>
  );
};

export default App;