import s from "./Counter.module.css";
import Button from "./Button";
import React, {ChangeEvent} from "react";
import {StatusType} from "../App";


type CounterSetValuesProps = {
    startValue: number,
    endValue: number,
    SetMinVal: (minVal: number) => void,
    SetMaxVal: (maxVal: number) => void,
    setValue: (value: number) => void
    setStatus: (val: StatusType) => void
    status: StatusType
}


export const CounterSetValues: React.FC<CounterSetValuesProps> = (props) => {

    const {startValue, endValue, SetMinVal, SetMaxVal, setStatus, status, setValue} = props

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        let val = +e.currentTarget.value
        SetMinVal(val)

    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let val = +e.currentTarget.value
        SetMaxVal(val)

    }

    const onClickHandler = () => {
        localStorage.setItem('minVal', JSON.stringify(startValue))
        localStorage.setItem('maxVal', JSON.stringify(endValue))
        setStatus('')
        setValue(startValue)
    }


    return (
        <div className={s.container}>
            <div className={s.inputs}>
                <div className={s.flex}><span>min value:</span> <input type="number" value={startValue}
                                                                       onChange={onChangeHandlerMin}/></div>
                <div className={s.flex}><span>max value:</span> <input type="number" value={endValue}
                                                                       onChange={onChangeHandlerMax}/></div>
            </div>
            <div className={s.buttons}>
                <Button onClick={onClickHandler} disabled={status !== 'Enter values and press "set"'} value={'set'}/>
            </div>
        </div>
    );
}

