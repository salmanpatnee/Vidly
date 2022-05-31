import React from 'react';
import Joi from 'joi-browser';
import Form from './common/Form/Form';
import { getGenres } from './../services/fakeGenreService';

class MovieForm extends Form {

    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: "",
        },
        errors: {},
        genres: []
    };

    componentDidMount() {
        const genres = [{ _id: "", name: "Select Genres" }, ...getGenres()];
        this.setState({ genres });
    }

    rules = {
        title: Joi.string().required().label("Title"),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().required().min(0).max(100).label("Number in Stock"),
        dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
    };

    schema = Joi.object(this.rules);

    doSubmit = () => {
        console.log('Added.');
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

export default MovieForm;