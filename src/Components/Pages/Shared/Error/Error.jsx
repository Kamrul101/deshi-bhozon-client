import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='error'>
           <img src='https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg' alt="" />
           <div>
            <Link to='/'><Button variant='success'>Go to Home</Button></Link>
           {/* <button className=''></button> */}
           </div>
        </div>
    );
};

export default Error;