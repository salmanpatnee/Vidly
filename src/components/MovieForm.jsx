import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form/Form';
import { useNavigate, useParams } from 'react-router-dom';

import { getGenres } from './../services/fakeGenreService';
import { getMovie, saveMovie } from './../services/fakeMovieService';

class MovieForm extends Form {

    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        genres: [],
        errors: {}
    };

    rules = {
        _id: Joi.string(),
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
    };

    schema = Joi.object(this.rules);

    componentDidMount() {
        const genres = [{ _id: "", name: "Select Genres" }, ...getGenres()];
        this.setState({ genres });

        const {id: movieID} = this.props.params;  
        if(movieID === "new") return;
        
        const movie = getMovie(movieID);

        if(!movie ) return //not-found

    }

    

    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.history.push('/movies');
    };

    render() {

        return (
            <div className="row justify-content-center" >
                <div className='col-6'>
                    <h1 className="display-4">Movie Form</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('title', 'Title')}
                        {this.renderSelect('genreId', 'Genre', this.state.genres)}
                        {this.renderInput('numberInStock', 'Number in Stock', 'number')}
                        {this.renderInput('dailyRentalRate', 'Rate')}
                        {this.renderButton('Add Movie')}
                    </form>
                </div>
            </div>
        );
    }
}

// export default MovieForm;
export default (props) => (
    <MovieForm
        {...props}
        params={useParams()}
    />
);