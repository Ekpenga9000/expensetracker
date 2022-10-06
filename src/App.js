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

function App() {
  const [data, setData] = useState(tableData);
  const [value, setValue] = useState([]);
  const [state, setState] = useState({
    data: tableData,
    filters: new Set(),
  });

  const checkParam = status.map((item) => item.label)

 
  const [filteredArray, setFilteredArray] = useState([]);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    let hasValue = [];
    let tableFill;



    if (isChecked) {
      hasValue.push(e.target.value);
    } else {
      hasValue.pop(e.target.value)
    }

    if (isChecked) {
      tableFill = data.filter((item) => item.Status.includes(hasValue));
      setData(tableFill);
    } else if (!isChecked) {
      tableFill = data.filter((item) => item.Status !== hasValue);
      setData(tableFill);
    }

    const tableFilter = tableFill.length > 0 ? tableFill : tableData;

    setData(tableFilter);

    console.log(hasValue)
  };

  const handleFilterChange = useCallback(
    (event) => {
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let data = tableData;

        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }

        if (filters.size) {
          data = data.filter((item) => {
            return filters.has(data.status);
          });
        }

        return {
          filters,
          data,
        };
      });
    },
    [setState]
  );


  useEffect(() => {
    // onFilter();
  }, [value]);

  return (
    <>
      <input type="search" onChange={(e) => setValue(e.target.value)} />

      <Checkbox status={status} handleChange={handleChange} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard" element={<Home data={data} />}
        />
        <Route path="/addemployee" element={<AddEmployee />} />
      </Routes>
    </>
  );
}

export default App;
