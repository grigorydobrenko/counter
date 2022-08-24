import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter";
import {CounterSetValues} from "./Components/CounterSetValues";

export type StatusType = 'Enter values and press "set"' | 'Incorrect value!' | ''


function App() {

    let minVal = localStorage.getItem('minVal')
    let maxVal = localStorage.getItem('maxVal')
    const [startValue, setStartValue] = useState<number>(minVal ? JSON.parse(minVal) : 0)
    const [endValue, setEndValue] = useState<number>(maxVal ? JSON.parse(maxVal) : 5)


    const [value, setValue] = useState<number>(startValue)


    const [status, setStatus] = useState<StatusType>('Enter values and press "set"')

    const getFromLocalStorage = () => {
        let minVal = localStorage.getItem('minVal')
        let maxVal = localStorage.getItem('maxVal')

        if (minVal && maxVal) {
            let newStartVal = JSON.parse(minVal)
            let newEndVal = JSON.parse(maxVal)
            console.log('min', minVal)
            console.log('max', maxVal)
            setStartValue(newStartVal)
            setEndValue(newEndVal)
        }
    }

    useEffect(() => {
        getFromLocalStorage()
    }, [])


    const incValue = () => {
        setValue(value => value + 1)
    }

    const resetValue = () => {
        if (value !== startValue) {
            setValue(startValue)
        }

    }


    const SetMaxVal = (maxVal: number) => {
        setEndValue(maxVal)
        if (maxVal < 0 || maxVal <= startValue) {
            setStatus('Incorrect value!')
        } else setStatus('Enter values and press "set"')


    }
    const SetMinVal = (minVal: number) => {

        setStartValue(minVal)
        if (minVal < 0 || minVal >= endValue) {
            setStatus('Incorrect value!')
        } else setStatus('Enter values and press "set"')
    }


    return (
        <div className="App">
            <CounterSetValues
                startValue={startValue}
                endValue={endValue}
                SetMaxVal={SetMaxVal}
                SetMinVal={SetMinVal}
                setStatus={setStatus}
                setValue={setValue}
                status={status}
            />

            <Counter
                incValue={incValue}
                resetValue={resetValue}
                value={value}
                startValue={startValue}
                endValue={endValue}
                status={status}
            />
        </div>
    );
}


export default App;
