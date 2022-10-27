import {changeEndValueAC, changeStartValueAC, counterReducer, initStateType} from "./counter-reducer";


let startState: initStateType

beforeEach(() => {
    startState = {
        startValue: 0,
        endValue: 5,
        currentValue: 0,
        isEditing: true,
        error: false,
        isCounting: false
    }
})


test('correct set start value', () => {

    const action = changeStartValueAC(1)
    const endState = counterReducer(startState, action)

    const action2 = changeStartValueAC(6)
    const endState2 = counterReducer(startState, action2)

    expect(endState.startValue).toBe(1)
    expect(endState2.error).toBe(true)

})

test.skip('correct set end value', () => {

    const action = changeEndValueAC(4)
    const endState = counterReducer(startState, action)

    const action2 = changeEndValueAC(-2)
    const endState2 = counterReducer(startState, action2)

    expect(endState.startValue).toBe(4)
    expect(endState2.error).toBe(true)

})