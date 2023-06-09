// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LivroLista from './LivroLista';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import LivroDados from './LivroDados';

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/novo">Novo</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" Component={LivroLista} />
          <Route path="/novo" Component={LivroDados} />
        </Routes>
      </div>
    </Router>
  );
}
