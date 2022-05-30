import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './Form/Input';
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


    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();

        this.setState({ errors: errors || {} });

        if (errors) return;
    }



    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateField(input);
        const data = { ...this.state.data };

        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        data[input.name] = input.value;
        this.setState({ data, errors });
    };

    render() {
        const { username, password } = this.state.data;
        const { errors } = this.state;
        return (
            <div className="row justify-content-center">
                <div className='col-6'>
                    <h1 className="display-4">Login</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <Input name="username" label="Username" value={username} onChange={this.handleChange} error={errors.username} />
                        <Input name="password" label="Password" value={password} onChange={this.handleChange} error={errors.password} />
                        <button disabled={this.validate} className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;