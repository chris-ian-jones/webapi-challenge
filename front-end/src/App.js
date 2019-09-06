import React from 'react';
import './App.css';
import AddForms from './components/addForms'
import ProjectsList from './components/projectsList'

function App() {
  return (
    <div className="App">
      <ProjectsList />
      <AddForms />
    </div>
  );
}

export default App;
