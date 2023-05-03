import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleChef from './SingleChef';
import { Row } from 'react-bootstrap';

const Chef = () => {
    const chef = useLoaderData();
    // console.log(chef);
    return (
        <div>
            <h1>All chef</h1>
            <div className='row'>
            <Row xs={1} md={3} className="g-4">
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