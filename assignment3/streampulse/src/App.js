  import React from 'react';
  import { BrowserRouter, Route, Routes } from 'react-router-dom';
  import Nav from './components/nav';
  import MainContent from './components/main-content';
  import Footer from './components/footer';
  import LoginForm from './components/login';
  import SignupForm from './components/signup';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />

          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/" element={<MainContent />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
