import React, { Component } from 'react';

import Input from './Input';
import Label from './Label';
import Icon from './Icon';

export default class FormControl extends Component {
    state = { value: '' };

    handleInputChange = e => {
        this.setState({ value: e.target.value });
    }

    render() {
        const className = this.state.value === ''? 'label' : 'label-clipped';

        return (
            <div className="form-control">
                <Input id={this.props.id} type={this.props.type} value={this.state.value} onChange={this.handleInputChange} />
                <Label className={className} id={this.props.id}>{this.props.label}</Label>
                <Icon name={this.props.icon} />
                <span></span>
            </div>
        );
    }
}