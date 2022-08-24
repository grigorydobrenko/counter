import React from 'react';
import s from './Counter.module.css'
import Button from "./Button";
import {StatusType} from "../App";

type CounterPropsType = {
    incValue: () => void,
    resetValue: () => void,
    value: number,
    status: StatusType
    startValue: number
    endValue: number
}

const Counter: React.FC<CounterPropsType> = (props: CounterPropsType) => {
    const {incValue, resetValue, value, startValue, status, endValue} = props

    const statusClassName = status === 'Enter values and press "set"' ? s.set : s.error
    const valueClassName = !!status || value === endValue ? s.numError : s.counter

    return (
        <div className={s.container}>

            <div className={s.screen}>{status ? <div className={statusClassName}>{status}</div> :
                <div className={valueClassName}>{value}</div>}</div>

            <div className={s.buttons}>

                <Button onClick={incValue} disabled={!!status || value === endValue}
                        value={'inc'}></Button>
                <Button onClick={resetValue} disabled={!!status || value === startValue}
                        value={'reset'}></Button>
            </div>
        </div>
    );
};


export default Counter;