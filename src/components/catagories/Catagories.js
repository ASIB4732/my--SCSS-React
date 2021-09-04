import React, { useContext, useEffect, useState } from 'react';
import { CatagoriesContext } from '../../App';
import CatagoriesDetail from '../catagoriesDateil/CatagoriesDetail';

const allProducts=[{name:"asus",category:"laptop"},{name:"Lanevo",category:"laptop"},{name:"appele",category:"laptop"},
{name:"appele",category:"mobile"},{name:"samsung",category:"mobile"},{name:"mi",category:"mobile"},{name:"samsung",category:"camera"},{name:"sony",category:"camera"},{name:"canon",category:"camera"}]

const Catagories = () => {
      const [catagorie] =useContext(CatagoriesContext)
      const [product,setProduct]=useState([])
      useEffect(()=>{
      const matchProducts=allProducts.filter(pd=>pd.category===catagorie.toLowerCase())
      setProduct(matchProducts)
      },[catagorie])
    return (
        <div>
            <h2>This is Catagories :- {catagorie}</h2>
            {
                product.map(data=><CatagoriesDetail product={data}></CatagoriesDetail>)
            }
            
        </div>
    );
};

export default Catagories;