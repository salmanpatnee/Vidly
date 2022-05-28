import React, { Component } from 'react';
import Input from './Form/Input';

class LoginForm extends Component {

    state = {
        account: { username: "", password: "" },
        errors: {}
    };

    validate = () => {
        return { username: "Username is required." };
    }

    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate();

        this.setState({ errors });

        if (errors) return;
    }

    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };

        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { username, password } = this.state.account;
        return (
            <div className="row justify-content-center">
                <div className='col-6'>
                    <h1 className="display-4">Login</h1>
                    <hr />
                    <form onSubmit={this.handleSubmit}>
                        <Input name="username" label="Username" value={username} onChange={this.handleChange} />
                        <Input name="password" label="Password" value={password} onChange={this.handleChange} />
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;