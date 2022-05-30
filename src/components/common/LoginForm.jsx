import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './Form/Form';

class LoginForm extends Form {

    state = {
        data: { username: "", password: "" },
        errors: {}
    };

    rules = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    };

    schema = Joi.object(this.rules);

    doSubmit = () => {
        console.log('Sent');
    };

    render() {
        
        return (
            <div className="row justify-content-center">
                <div className='col-6'>
                    <h1 className="display-4">Login</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username', 'Username')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Login')}
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;