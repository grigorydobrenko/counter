import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";

type CounterPropsType = {
    incValue: () => void,
    resetValue: () => void,
    value: number,
    startValue: number
    endValue: number
    error: boolean
    isEditing: boolean
    currentValue: number
    isCounting: boolean

}

const Counter: React.FC<CounterPropsType> = (props: CounterPropsType) => {
    const {
        incValue,
        resetValue,
        error,
        isEditing,
        currentValue,
        isCounting,
        startValue,
        endValue
    } = props

    // const statusClassName = status === 'Enter values and press "set"' ? s.set : s.error
    // const valueClassName = !!status || value === endValue ? s.numError : s.counter

    return (
        <div className={s.container}>

            <div className={s.screen}>
                {error ? <div className={s.error}>Incorrect range! </div>
                    : !isEditing ?
                        <div className={s.numSize}>{isCounting ? currentValue : <div className={s.numError}>{currentValue}</div>} </div>
                        : <div>Enter values and press 'set'</div>}
                {/*{status ? <div className={statusClassName}>{status}</div> :*/}
                {/*<div className={valueClassName}  >*/}
                {/*    {value}*/}
                {/*</div>}*/}
            </div>

            <div className={s.buttons}>

                <Button
                    onClick={incValue}
                    disabled={currentValue === endValue || isEditing}

                    value={'inc'}></Button>
                <Button
                    onClick={resetValue}
                    disabled={currentValue === startValue || isEditing}

                    value={'reset'}></Button>
            </div>
        </div>
    );
};


export default Counter;