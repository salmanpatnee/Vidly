import React from 'react';
import { useParams } from 'react-router-dom';

const NoMatch = () => {

    let { id } = useParams();

    return (
        <div className="jumbotron">
            <h1 className="display-4 text-center">Opps - 404</h1>
        </div >
    );
}

export default NoMatch;