import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localstorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer, loadState())

export type AppRootStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})


//@ts-ignore
window.store=store

