import React from 'react';

import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }

    onButtonPress = event => {
        let equation = this.state.equation;
        const pressedButton = event.target.innerHTML;

        if (pressedButton === 'C') return this.clear();
        else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') equation += pressedButton;
        else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) equation += ' ' + pressedButton + ' ';
        else if (pressedButton === '=') {
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                this.setState({result});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }
                
        this.setState({equation: equation});
    }

    clear() {
        this.setState({equation: '', result: 0});
    }

    render() {
        return (
            <main className="calculator">
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </main>
        );
    }
}

export default Calculator;