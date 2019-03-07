import React from 'react';

import './styles.css';

import Button from './Button';
import FormControl from './FormControl';
import FormControlClass from './FormControlClass';

const app = () => (
  <form className="app">
    <FormControlClass 
      id="e" 
      type="email" 
      label="Email" 
      icon="envelope" 
    />
    <FormControl 
      id="p" 
      type="password" 
      label="Password" 
      icon="lock" 
    />
    <FormControl 
      id="cp" 
      type="password" 
      label="Confirm Password" 
      icon="unlock" 
    />

    <Button>Sign up</Button>
    <Button>Sign in?</Button>
  </form>
);

export default app;