import s from "./Counter.module.css";
import Button from "./Button";
import React, {ChangeEvent} from "react";
import {Dispatch} from "redux";
import {setValueAC} from "../store/counter-reducer";
import {Input} from "./Input";


type CounterSetValuesProps = {
    startValue: number,
    endValue: number,
    SetMinVal: (minVal: number) => void,
    SetMaxVal: (maxVal: number) => void,
    dispatch: Dispatch
    error: boolean
    isEditing: boolean
}


export const CounterSetValues: React.FC<CounterSetValuesProps> = (props) => {

    const {
        startValue, endValue, SetMinVal, SetMaxVal,
        dispatch, error, isEditing
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
        dispatch(setValueAC(startValue, endValue))
    }

    const isDisabled = error || !isEditing

    return (
        <div className={s.container}>
            <div className={s.inputs}>
                <Input value={startValue} onChangeHandler={onChangeHandlerMin} title={'min value:'}/>
                <Input value={endValue} onChangeHandler={onChangeHandlerMax} title={'max value:'}/>
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

