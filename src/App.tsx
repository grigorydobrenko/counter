import React from 'react';
import './App.css';
import Counter from "./Components/Counter";
import {CounterSetValues} from "./Components/CounterSetValues";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeEndValueAC, changeStartValueAC, incValueAC, resetValueAC} from "./state/counter-reducer";

export type StatusType = 'Enter values and press "set"' | 'Incorrect value!' | ''


function App() {

    // let minVal = localStorage.getItem('minVal')
    // let maxVal = localStorage.getItem('maxVal')
    // const [startValue, setStartValue] = useState<number>(minVal ? JSON.parse(minVal) : 0)
    // const [endValue, setEndValue] = useState<number>(maxVal ? JSON.parse(maxVal) : 5)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const endValue = useSelector<AppRootStateType, number>(state => state.counter.endValue)
    const error = useSelector<AppRootStateType, boolean>(state => state.counter.error)
    const isEditing = useSelector<AppRootStateType, boolean>(state => state.counter.isEditing)
    const currentValue = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const isCounting = useSelector<AppRootStateType, boolean>(state => state.counter.isCounting)

    const dispatch = useDispatch()

    // const [value, setValue] = useState<number>(startValue)


    // const [status, setStatus] = useState<StatusType>('Enter values and press "set"')

    // const getFromLocalStorage = () => {
    //     let minVal = localStorage.getItem('minVal')
    //     let maxVal = localStorage.getItem('maxVal')
    //
    //     if (minVal && maxVal) {
    //         let newStartVal = JSON.parse(minVal)
    //         let newEndVal = JSON.parse(maxVal)
    //         console.log('min', minVal)
    //         console.log('max', maxVal)
    //         setStartValue(newStartVal)
    //         setEndValue(newEndVal)
    //     }
    // }

    // useEffect(() => {
    //     getFromLocalStorage()
    // }, [])


    const incValue = () => {
        dispatch(incValueAC())
    }
    //
    const resetValue = () => {
       dispatch(resetValueAC(startValue))

    }


    const SetMaxVal = (maxVal: number) => {
        dispatch(changeEndValueAC(maxVal))
        // if (maxVal < 0 || maxVal <= startValue) {
        //     setStatus('Incorrect value!')
        // } else setStatus('Enter values and press "set"')


    }
    const SetMinVal = (minVal: number) => {

        dispatch(changeStartValueAC(minVal))
        // if (minVal < 0 || minVal >= endValue) {
        //     setStatus('Incorrect value!')
        // } else setStatus('Enter values and press "set"')
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
                // setStatus={setStatus}
                // setValue={setValue}
                // status={status}
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
                // status={status}
            />
        </div>
    );
}


export default App;
