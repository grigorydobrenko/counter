import s from "./Counter.module.css";
import Button from "./Button";
import React, {ChangeEvent} from "react";
import {AnyAction, Dispatch} from "redux";
import {setValueAC} from "../state/counter-reducer";


type CounterSetValuesProps = {
    startValue: number,
    endValue: number,
    SetMinVal: (minVal: number) => void,
    SetMaxVal: (maxVal: number) => void,
    dispatch: Dispatch<AnyAction>
    error: boolean
    isEditing: boolean
    // setValue: (value: number) => void
    // setStatus: (val: StatusType) => void
    // status: StatusType
}


export const CounterSetValues: React.FC<CounterSetValuesProps> = (props) => {

    const {
        startValue, endValue, SetMinVal, SetMaxVal,
        dispatch, error,isEditing
        // , , setStatus, status, setValue
    } = props

    const onChangeHandlerMin = (e: ChangeEvent<HTMLInputElement>) => {
        let val = +e.currentTarget.value
        SetMinVal(val)

    }

    const onChangeHandlerMax = (e: ChangeEvent<HTMLInputElement>) => {
        let val = +e.currentTarget.value
        SetMaxVal(val)

    }


    const onClickHandler = () => {
        // localStorage.setItem('minVal', JSON.stringify(startValue))
        // localStorage.setItem('maxVal', JSON.stringify(endValue))
        // setStatus('')
        dispatch(setValueAC(startValue, endValue))
    }


    const isDisabled = error || !isEditing

    return (
        <div className={s.container}>
            <div className={s.inputs}>
                <div className={s.flex}><span>min value:</span> <input type="number" value={startValue}
                                                                       onChange={onChangeHandlerMin}/></div>
                <div className={s.flex}><span>max value:</span> <input type="number" value={endValue}
                                                                       onChange={onChangeHandlerMax}/></div>
            </div>
            <div className={s.buttons}>
                <Button
                    onClick={onClickHandler}
                    disabled={isDisabled}
                    value={'set'}
                />
            </div>
        </div>
    );
}

