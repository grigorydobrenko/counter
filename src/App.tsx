import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import {CounterSetValues} from "./components/CounterSetValues";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {changeEndValueAC, changeStartValueAC, incValueAC, resetValueAC} from "./store/counter-reducer";


function App() {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const endValue = useSelector<AppRootStateType, number>(state => state.counter.endValue)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)
    const isEditing = useSelector<AppRootStateType, boolean>(state => state.counter.isEditing)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const isCounting = useSelector<AppRootStateType, boolean>(state => state.counter.isCounting)


    const dispatch = useDispatch()

    const incValue = () => {
        dispatch(incValueAC())
    }

    const resetValue = () => {
        dispatch(resetValueAC(startValue))

    }

    const SetMaxVal = (maxVal: number) => {
        dispatch(changeEndValueAC(maxVal))
    }
    const SetMinVal = (minVal: number) => {
        dispatch(changeStartValueAC(minVal))
    }

    return (
        <div className="App">
            <CounterSetValues
                startValue={startValue}
                endValue={endValue}
                SetMaxVal={SetMaxVal}
                SetMinVal={SetMinVal}
                dispatch={dispatch}
                error={error}
                isEditing={isEditing}
            />

            <Counter
                incValue={incValue}
                resetValue={resetValue}
                value={startValue}
                startValue={startValue}
                endValue={endValue}
                error={error}
                isEditing={isEditing}
                currentValue={currentValue}
                isCounting={isCounting}
            />
        </div>
    );
}


export default App;
