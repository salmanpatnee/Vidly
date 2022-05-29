import React, { Component } from 'react';
import Input from './Form/Input';

class LoginForm extends Component {

    state = {
        account: { username: "", password: "" },
        errors: {}
    };

    validate = () => {
        const errors = {};
        const {account} = this.state;

        if(account.username.trim() === ''){
            errors.username = "Username is required";
        }

        if(account.password.trim() === ''){
            errors.password = "Password is required";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();

        this.setState({ errors: errors || {} });

        if (errors) return;
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };

        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { username, password } = this.state.account;
        const { errors } = this.state;
        return (
            <div className="row justify-content-center">
                <div className='col-6'>
                    <h1 className="display-4">Login</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <Input name="username" label="Username" value={username} onChange={this.handleChange} error={errors.username}/>
                        <Input name="password" label="Password" value={password} onChange={this.handleChange} error={errors.password}/>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;