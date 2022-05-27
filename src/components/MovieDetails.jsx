import React, { Component } from 'react';
import { withRoter } from 'react-router-dom';

class MovieDetails extends Component {
    state = {
        id: 5
    }



    render() {
        console.log(this.props);
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Movie Details - {this.id}</h1>
                </div>

                <button onClick={this.saveMovie} className="btn btn-primary">Save</button>
            </div>
        );
    }
}

export default MovieDetails;