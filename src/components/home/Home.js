import React, { useContext } from 'react';
import { CatagoriesContext } from '../../App';

const Home = (props) => {
    const count=useContext(CatagoriesContext)
    return (
        <div>
            <h1>This is Home:- {count}</h1>
        </div>
    );
};

export default Home;