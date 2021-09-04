import React, { useContext } from 'react';
import { CatagoriesContext } from '../../App';

const Shipment = (props) => {
    const [catagorie, setCatagorie]=useContext(CatagoriesContext)
    return (
        <div>
            <h1>This is Shipment:- {catagorie}</h1>
            <button onClick={()=>setCatagorie(catagorie+5)}>Increment</button>
            <button>descrement</button>
        </div>
    );
};

export default Shipment;