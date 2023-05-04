import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';
import { Row } from 'react-bootstrap';

const Chef = () => {
    const chef = useLoaderData();
    // console.log(chef);
    return (
        <div>
            <h1 className='text-success'>The best we can offer</h1>
            <div className='row'>
            <Row xs={1} md={2} className="">
                {
                    chef.map(oneChef =>
                        <SingleChef
                        key={oneChef.id}
                        oneChef={oneChef}
                        ></SingleChef>
                    )
                }
            </Row>
            </div>

        </div>
    );
};

export default Chef;