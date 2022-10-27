export type initStateType = {
    startValue: number
    endValue: number
    currentValue: number
    isEditing: boolean
    error: boolean
    isCounting: boolean
}

export const initState:initStateType = {
    startValue: 0,
    endValue: 5,
    currentValue: 0,
    isEditing: true,
    error: false,
    isCounting: false
}


export const counterReducer = (state = initState, action: counterReducerActionsType): initStateType => {

    switch (action.type) {

        case 'change-start-value': {
            let newState = {...state, startValue: action.payload.value}
            newState.isEditing = true
            if (action.payload.value >= state.endValue || action.payload.value < 0) {
                newState.error = true
            } else {
                newState.error = false
            }
            return newState
        }
        case 'change-end-value': {
            let newState = {...state, endValue: action.payload.value}
            newState.isEditing = true
            if (action.payload.value <= state.startValue || action.payload.value < 0) {
                newState.error = true
            } else {
                newState.error = false
            }
            return newState
        }


        case 'set-value': {
            return {...state, currentValue: action.payload.startValue, isEditing: false, isCounting: true }
        }

        case 'inc-value': {

            if (state.currentValue + 1 === state.endValue) {
                return {...state, currentValue: state.currentValue + 1, isCounting: false}
            }
            else if (state.currentValue < state.endValue) {
                return {...state, currentValue: state.currentValue + 1}
            }
            else {
                return {...state, isCounting: false}
            }
        }


        default:

            return state
    }
}

type counterReducerActionsType = changeStartValueACType | changeEndValueACType | setValueACType | incValueACType | resetValueACType

type changeStartValueACType = ReturnType<typeof changeStartValueAC>
type changeEndValueACType = ReturnType<typeof changeEndValueAC>
type setValueACType = ReturnType<typeof setValueAC>
type incValueACType = ReturnType<typeof incValueAC>
type resetValueACType = ReturnType<typeof resetValueAC>


export const changeStartValueAC = (value: number) => {
    return {
        type: 'change-start-value',
        payload: {
            value
        }
    } as const
}

export const changeEndValueAC = (value: number) => {
    return {
        type: 'change-end-value',
        payload: {
            value
        }
    } as const
}

export const setValueAC = (startValue: number, maxValue: number) => {
    return {
        type: 'set-value',
        payload: {
            startValue,
            maxValue
        }
    } as const
}
export const incValueAC = () => {
    return {
        type: 'inc-value',
    } as const
}
export const resetValueAC = (startValue: number) => {
    return {
        type: 'set-value',
        payload: {
            startValue

        }
    } as const
}