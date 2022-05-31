import React from 'react';
import Joi from 'joi-browser';
import Form from './Form/Form';

class RegisterForm extends Form {

    state = {
        data: { username: "", password: "", name: "" },
        errors: {}
    };

    rules = {
        username: Joi.string().required().email().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().min(3).label("Name"),
    };

    schema = Joi.object(this.rules);

    doSubmit = () => {
        console.log('Registered.');
    };

    render() {

        return (
            <div className="row justify-content-center" >
                <div className='col-6'>
                    <h1 className="display-4">Register</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('name', 'Name')}
                        {this.renderButton('Register')}
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterForm;