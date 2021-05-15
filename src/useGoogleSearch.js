import {useState,useEffect} from 'react';
import API_KEY from './Key';

const CONTEXT_KEY = 'db6185ce6a4e4af25';

const useGoogleSearch = (term) =>{

    const [data,setData]=useState('');
     useEffect(()=>{
        const fetchData = async() =>{
        fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response=>response.json())
            .then(result=>{
                setData(result)
            })
        }
        fetchData();
     },[term])

     return {data};
};

export default useGoogleSearch;