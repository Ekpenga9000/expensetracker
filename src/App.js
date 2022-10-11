import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
// import Dashboard from './components/Dashboard';
import tableData from "./components/data/MOCK_DATA";
import AddEmployee from "./components/forms/AddEmployee";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import Checkbox from "./components/checkbox/Checkbox.jsx";
import status from "./components/data/status";
import { useMemo } from "react";

function App() {
  const data = [...tableData]
const [filter, setFilter] = useState({})
  const [query, setQuery] = useState("");

  const checkParam = status.map((item) => item.label)

 
  const [filteredArray, setFilteredArray] = useState([]);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setFilter({...filter, [`${e.target.value}`]: isChecked})
  };

  console.log(filter);

  const filteredData = useMemo(() => {
  //filter data by query or filtervalue
    console.log('firing!!!',)
    const filterLength = Object.values(filter).filter((value) => !!value).length;
    if (filterLength) {
      console.log('firing condition!!!', filter)
      return data.reduce((prev, current) => {
        //check if current value status is part of filter
        if (filter[current.Status]) {
          prev.push(current)
        }
        return prev;
      }, []);
    }
    
    return data
  }, [query, filter, data])
  
  return (
    <>
      <input type="search" onChange={(e) => setQuery(e.target.value)} />

      <Checkbox status={status} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard" element={<Home data={filteredData} />}
        />
        <Route path="/addemployee" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
