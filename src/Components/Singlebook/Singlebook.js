import React from 'react'
import "./Singlebook.css";
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useCollapse from 'react-collapsed';
import Footer from "../Footer/Footer"

//icons
import { FaBookOpen } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaRegGrinHearts } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";


function Singlebook() {

    const [booksbook,setbooksbook] = useState({})
    const{bookID} = useParams();

    //read more
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

    useEffect(() => {

        async function fetchData() {
            
            try {
                
                const data = (
                    await axios.get(`https://busy-gray-dibbler-wear.cyclic.app/api/books/findbook/${bookID}`,{})
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
    <div className='onebook'>

       <div className='onebook_main'>

            <div className='onebook_img_div'> 
                  <img src={booksbook.bookImg} alt="" className='onebook_img'/>
                  <button className='onebook_btn'>Add to cart</button>
            </div>

            <div className='onebook_content_div'>
                 <h1 className='onebook_content_h1'> <FaBookOpen size={56} color="gray"/>&nbsp;&nbsp;{booksbook.bookTitle}</h1>
                 <h3 className='onebook_content_h3'><FaPenNib size={36} color="gray"/>&nbsp;&nbsp;{booksbook.bookAuthor}</h3>
                 <h3 className='onebook_content_h3'><FaRegGrinHearts size={36} color="gray"/>&nbsp;&nbsp;{booksbook.genres}</h3>
                 <h3 className='onebook_content_h3'><FaLanguage size={36} color="gray"/>&nbsp;&nbsp;{booksbook.language}</h3>
                 <h3 className='onebook_content_h3'><FaRegThumbsUp size={36} color="gray"/>&nbsp;&nbsp;{booksbook.type}</h3>
                 <h3 className='onebook_content_h3'><FaRupeeSign size={26} color="gray"/>&nbsp;{booksbook.price}</h3>
            </div>

       </div>

       <div className='onebook_main1'>

            <div className='onebook_main1_desc'>
              <p className='onebook_main1_desc_p'><FaScroll size={26} color="darkgrey"/>&nbsp;Book Description</p>
              <p className='onebook_main1_desc_p1'>{booksbook.bookDescription}</p>
              <p className='onebook_main1_desc_p1' {...getCollapseProps()}>{booksbook.bookDesmore}</p>
              <button className='onebook_main1_btn' {...getToggleProps({ onClick: () => 
                setExpanded((prevExpanded) => !prevExpanded),})}>{isExpanded ? 'Read less' : 'Read more'}&nbsp;🙈</button>
            </div>
            
            

            <div className='onebook_main1_author'>
              <p className='onebook_main1_author_p'><FaUserEdit size={26} color="darkgrey"/>&nbsp;About Author</p>
              <div className='author_div'>
                  <img src={booksbook.authorImg} alt="" className='author_img'/>
                  <p className='onebook_main1_author_p1'>{booksbook.authorDescription}</p>
              </div>
            </div>

       </div>

       <Footer />

    </div>
  )
}

export default Singlebook