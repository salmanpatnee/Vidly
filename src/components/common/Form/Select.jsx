import React from 'react';

const Select = ({ name, label, error, items, textProperty, valueProperty, ...rest }) => {


    return (
        <div className="form-group">
            <label htmlFor={name}> {label}</label>
            <select
                {...rest}
                id={name}
                name={name}
                className='form-control'>
                {items.map(item => <option
                    key={item[valueProperty]}
                    value={item[valueProperty]}>
                    {item[textProperty]}
                </option>)}
            </select>
            {error && <small className="form-text text-danger">{error}</small>}
        </div>
    );
}

Select.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default Select;