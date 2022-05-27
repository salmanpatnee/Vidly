import React from 'react';
import { useParams, useNavigate  } from 'react-router-dom';

const MovieDetails = props => {
    
    const { id } = useParams();
    const navigate = useNavigate();
    
    return ( 
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Movie Details - {id}</h1>
            </div>
            <button onClick={() => navigate(-1)} className="btn btn-primary">Save</button>
        </div>
     );
}
 
export default MovieDetails;