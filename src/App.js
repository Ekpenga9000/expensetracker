import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import tableData from "./components/data/MOCK_DATA";
import AddEmployee from "./components/forms/AddEmployee";
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheet.css'

function App() {
  console.log(tableData)
  return (
    <>   
    <Routes>
      <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addemployee' element={<AddEmployee />}/>
    </Routes>
    </>
  );
}

export default App;
