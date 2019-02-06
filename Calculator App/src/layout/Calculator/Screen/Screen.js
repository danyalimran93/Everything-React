import React from 'react';

import ResultScreen from './ResultScreen/ResultScreen';
import ComputationScreen from './ComputationScreen/ComputationScreen';

const screen = (props) => (
    <section className="screen">
        <ResultScreen result={props.result} />
        <ComputationScreen equation={props.equation} />
    </section>
);

export default screen;