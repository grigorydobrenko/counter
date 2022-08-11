import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter";
import s from "./Components/Counter.module.css";


function App() {
    const startValue = 0;
    const endValue = 5;

    const [value, setValue] = useState<number>(startValue)

    const [incDisabled, setIncDisabled] = useState<boolean>(false)
    const [resetDisabled, setResetDisabled] = useState<boolean>(true)

    const incSetValue = () => setValue(value => value + 1)

    const incValue = () => {
        if (value < endValue && value !== endValue - 1) {
            setResetDisabled(false)
        } else {
            setIncDisabled(true)
        }
        incSetValue()
    }

    const resetValue = () => {
        if (value !== startValue) {
            setValue(startValue)
            setResetDisabled(true)
            incDisabled && setIncDisabled(false)
        }

    }


    return (
        <div className="App">

            <Counter
                incValue={incValue}
                resetValue={resetValue}
                value={value}
                incDisabled={incDisabled}
                resetDisabled={resetDisabled}
            />
        </div>
    );
}


const CounterSetValues = () => {
    return (
        <div className={s.container}>
            <div>
                <div>max value: <input type="number"/></div>
                <div>min value: <input type="number"/></div>
            </div>
            <div className={s.buttons}>

            </div>
        </div>
    );
}

export default App;
