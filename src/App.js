import React, { useState, useEffect } from 'react';
import Header from './componets/layout/Header';
import PersonContext from './componets/PersonContext';
import PersonProfile from './componets/PersonProfile';
import API from './componets/utils/API';
import Search from './componets/Search';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.getUsers().then((response) => {
      setApiResponse(response.data.results)
    })
  }, [search])

  const handleInputChange = event => {
    event.preventDefault();
    const input = event.target.value;
    console.log(input)
    const employees = apiResponse.filter(employee => {
      //return employee.name.first;
       return employee.name.first.indexOf(input) > -1 || 
       employee.name.last.indexOf(input) > -1
    })
    setApiResponse(employees);
  
    console.log(employees)
  }
  
  return (
    
    <div className="App">
      <div className="container">
      <Header />
      <Search name="Search" onChange={handleInputChange} results={apiResponse}/>
      
      <PersonContext.Provider value = {{users: apiResponse}}>
      <PersonProfile />
      </PersonContext.Provider>

    </div>
    </div>
        
  );
}


export default App;
