import React from 'react';

const input = (props) => (
    <input
        className="input"
        id={props.id}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
    />
);

export default input;