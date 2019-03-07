import React, { useState } from 'react';

import Input from './Input';
import Label from './Label';
import Icon from './Icon';

const formControl = (props) => {
    const [value, setValue] = useState('');

    const handleInputChange = e => {
        setValue(e.target.value);
    }

    const className = value === ''? 'label' : 'label-clipped';

    return (
        <div className="form-control">
            <Input id={props.id} type={props.type} value={value} onChange={handleInputChange} />
            <Label className={className} id={props.id}>{props.label}</Label>
            <Icon name={props.icon} />
            <span></span>
        </div>
    );
}

export default formControl;