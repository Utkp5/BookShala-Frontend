import React from 'react'
import "./Singlebook.css";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Singlebook() {

    const [booksbook,setbooksbook] = useState({})
    const{bookID} = useParams();

    useEffect(() => {

        async function fetchData() {
            
            try {
                
                const data = (
                    await axios.get(`http://localhost:5000/api/books/findbook/${bookID}`,{})
                    ).data
                
                setbooksbook(data);
                console.log(data);


            } catch (error) {
                console.log(error);
            }

        }

        fetchData();
    },[])



  return (
    <div>
      <div className='onebook'>
      </div>
    </div>
  )
}

export default Singlebook