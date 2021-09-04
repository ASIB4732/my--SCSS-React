import React from 'react';


const CatagoriesDetail = (props) => {
    const {name}=props.product

    return (
        <div>
            <h3>This is Catagories detail</h3>
            <p>tnis is contest:- {name}</p>
        </div>
    );
};

export default CatagoriesDetail;