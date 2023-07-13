import React, { Component } from 'react';

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        input: '',
        newValue: '',
        display: [],
        operator: '',
        historyOne: '',
        historyTwo: '',
        previews: '',
        equals: false,
        value: '',
        hiddenValue: '',
    }

    handleHistoryTwo = () => {
        this.setState({ historyTwo: this.state.historyOne })
    }

    handleHistoryOne = () => {
        this.setState({ historyOne: this.state.input })
    }

    handleDisplay = () => {
        // const equals = this.state.equals;
        // const display = this.state.display;
        // const input = this.state.input;
        this.setState({ display: this.state.input })
    }

    handleButtons = (e) => {

        // const equals = this.state.equals
        const value = this.state.value;

        if (this.state.equals === true) {
            this.setState({
                value: '',
                equals: false
            });
        }


        if (e.target.name === '0' && value === '0') {
            return value;
        }
        if (e.target.name === '.' && value.includes('.')) {
            return value;
        }
        this.setState({ value: value + e.target.name });
        console.log(e.target.name);
    }

    handleOperators = (e) => {
        const value = this.state.value
        this.setState({
            // historyTwo: value,
            // operator: e.target.name,
            value: value + e.target.name
            // value: '',
        })
        console.log(e.target.name);
        // this.setState({ value: value + e.target.name });
    }

    handleAllClear = (e) => {
        this.setState({
            historyOne: '',
            historyTwo: '',
            operator: '',
            previews: '',
            value: '',
        });
        console.log(e.target.name);;
    }

    handleDelete = (e) => {
        if (this.state.equals === true) {
            this.setState({
                value: '',
                equals: false
            });
        }
        this.setState({ value: this.state.value.slice(0, -1) });
        console.log(e.target.name);
    }

    // handleEquals = (e) => {
    //     const value = this.state.value;
    //     const historyOne = parseInt(this.state.historyOne);
    //     const historyTwo = parseInt(this.state.historyTwo);
    //     const operator = this.state.operator;
    //     var newValue = ''

    //     this.setState({
    //         historyOne: value,
    //         equals: true,
    //     });

    //     if (operator === '+') {
    //         newValue = (historyTwo + historyOne);
    //         console.log('add', newValue);
    //     }
    //     if (operator === '-') {
    //         newValue = (historyTwo - historyOne);
    //         console.log('minus')
    //     }
    //     if (operator === '*') {
    //         newValue = (historyTwo * historyOne);
    //         console.log('times')
    //     }
    //     if (operator === '/') {
    //         if (historyOne <= '0') {
    //             console.log('Math Error')
    //             this.setState({
    //                 historyOne: '',
    //                 historyTwo: '',
    //                 operator: '',
    //                 value: 'Math Error',
    //             });
    //         }
    //         else {
    //             newValue = historyTwo / historyOne;
    //             console.log('divide')
    //             return newValue;
    //         }
    //     }
    //     this.setState({ value: newValue });
    // }

    handleEquals = () => {
        const value = this.state.value;
        this.setState({
            historyOne: value,
            // equals: true,
        });

        this.setState({
            previews: eval(value),
            equals: true
        });
    }

    render() {

        if (this.state.value === 'Infinity') {
            this.setState({ equals: true });
        }
        if (this.state.equals === true) {
            this.setState({
                historyOne: this.state.value,
                value: '',
                equals: false
            });
        }

        console.table(this.state.value);

        const { state,
            handleAllClear, handleDisplay, handleHistoryOne, handleHistoryTwo,
            handleDelete, handleEquals, handleButtons,
            handleOperators, } = this;
        const { display, } = this.state;
        return (
            <MyContext.Provider value={{
                state, display,
                handleAllClear, handleDisplay, handleHistoryOne, handleHistoryTwo,
                handleDelete, handleEquals, handleButtons,
                handleOperators,
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export { MyContext, MyProvider };