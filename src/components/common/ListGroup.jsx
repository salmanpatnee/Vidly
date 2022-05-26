import React from 'react';

const ListGroup = ({ items, textProperty, valueProperty, selectedItem, onSelectItem }) => {

    return (
        <div className="list-group">
            {items.map(item => <a
                key={item[valueProperty]}
                onClick={() => onSelectItem(item)}
                className={(item === selectedItem ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action")}>
                {item[textProperty]}
            </a>)
            }
        </div >);
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

export default ListGroup;




