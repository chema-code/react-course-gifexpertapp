import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({defaultCategories=[]}) => {      

    const [categories, setCategories] = useState(defaultCategories);
    
    // const handleAdd = () =>{
    //     //setCategories([...categories,'Samurai X']);
    //     setCategories(cats => [...cats, 'Samuray X']);
    // }
    
    return (
        <>
            
            <h2>GifExpertApp</h2>
            <AddCategory setCategory = {setCategories}/>
            <hr/> 
            
            <ol>
               {
                    categories.map((category)=> {
                        return <GifGrid 
                        key = {category}
                        category={category}/> //<li key={category}>{category}</li>
                    })
               }
            </ol> 
       
        </>
    )
};

export default GifExpertApp;

