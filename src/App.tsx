import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/Application/Application';
import { Skills } from './components/skills/Skills';

function App() {
  const skills = ['TS', 'JS', 'HTML', 'PHP'];
  return (
    <div className="">
      {/* <Application /> */}
      <Skills skills={skills} />
    </div>
  );
}

export default App;
