import React from 'react';

const Input = ({ name, label, onChange, value, error }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}> {label}</label>
            <input
                value={value}
                type="text"
                id={name}
                name={name}
                className='form-control'
                onChange={onChange}
                autoFocus
            />
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
    );
}

export default Input;