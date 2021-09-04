import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Shipment from './components/Shipment/Shipment';
import React, { createContext, useState } from 'react';
export const CatagoriesContext= createContext();
function App() {
const [catagorie, setCatagorie]=useState('laptop')
  return (
    <CatagoriesContext.Provider value={[catagorie, setCatagorie]}>
     <div className="appBox">
       <p>number of Product:- {catagorie}</p>
       <Header></Header>
       <Home></Home>
       <Shipment></Shipment>
     </div>
     </CatagoriesContext.Provider>
  );
}

export default App;
