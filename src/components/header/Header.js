import React, { useContext } from 'react';
import { CatagoriesContext } from '../../App';
import Catagories from '../catagories/Catagories';
import "./Header.css"
const Header = (props) => {
    const [catagorie, setCatagorie]=useContext(CatagoriesContext)
    return (
        <div className="headerBox">
            <h1>This is Header {catagorie}</h1>
            <button onClick={()=>setCatagorie('laptop')}>laptop</button>
            <button onClick={()=>setCatagorie("Mobile")}>mobile</button>
            <button onClick={()=>setCatagorie("camera")}>camera</button>
            <Catagories></Catagories>
         </div>
    );
};

export default Header;