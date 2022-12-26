import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Homeblog.css"

function Homeblog() {
  return (
    <div>
      <h3 className='hmblog_h3'>Latest Blogs</h3>

        <div className='hmblog'>
            <div className='hmblog_div1'>
                <img  className='hmblog_img' src="https://cdn.shopify.com/s/files/1/1288/2297/articles/blog_7_600x400_crop_center.jpg?v=1646452858" alt="" />
                <p className='hmblog_p1'>Significant reading has info</p>
                <p className='hmblog_p2'>04 March, 2022 \ Bookshala Team</p>
                <p className='hmblog_p3'>The summer holidays are wonderful. Dressing for them can be significantly less so: Packing light..</p>
                <NavLink to="/Blog"><button className='hmblog_btn'>Read more</button></NavLink>
            </div>    
            <div className='hmblog_div1'>
                <img  className='hmblog_img' src="https://cdn.shopify.com/s/files/1/1288/2297/articles/blog_6_600x400_crop_center.jpg?v=1646452719" alt="" />
                <p className='hmblog_p1'>Activities Book International</p>
                <p className='hmblog_p2'>14 Nov, 2022 \ Bookshala Team</p>
                <p className='hmblog_p3'>The summer holidays are wonderful. Dressing for them can be significantly less so: Packing light..</p>
                <NavLink to="/Blog"><button className='hmblog_btn'>Read more</button></NavLink>
            </div>    
            <div className='hmblog_div1'>
                <img  className='hmblog_img' src="https://cdn.shopify.com/s/files/1/1288/2297/articles/blog_5_600x400_crop_center.jpg?v=1646452601" alt="" />
                <p className='hmblog_p1'>International activities of the book</p>
                <p className='hmblog_p2'>19 Jan, 2023 \ Bookshala Team</p>
                <p className='hmblog_p3'>The summer holidays are wonderful. Dressing for them can be significantly less so: Packing light..</p>
                <NavLink to="/Blog"><button className='hmblog_btn'>Read more</button></NavLink>
            </div>    
        </div>

    </div>

  )
}

export default Homeblog
