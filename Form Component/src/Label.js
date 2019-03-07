import React from 'react';

const label = (props) => <label className={props.className} htmlFor={props.id}>{props.children}</label>;

export default label;