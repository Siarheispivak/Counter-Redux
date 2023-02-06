import {CounterType} from "../App";
import counter from "../Components/Counter/Counter";

const initialState: CounterType =
    {counter: 0, maxValue: 0, minValue: 0, announcement: 'Choose amount', error: false}


type ActionsTypes =
    setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType
    |setAnnouncementACType;

export const countReducer = (state: CounterType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'SET-MAX-VALUE': {
            return {...state,maxValue: action.payload.newMaxValue}
        }
        case 'SET-MIN-VALUE':{
           return  {...state,minValue: action.payload.newMinValue}
        }
        case 'INCREASE-COUNTER':{
            return  {...state,counter:state.counter + 1}
        }
        case 'RESET-COUNTER':{
            return {...state,counter:0}
        }
        case 'CHANGE-ANNOUNCEMENT':{
            let counter =  state.counter;
            let min = state.minValue
            let max = state.maxValue
            let result = ''
            if(max < 0) result = 'Incorrect value'
            if(max <= min) result = 'Incorrect value'
            if(max <= counter) result = 'Incorrect value'

            if(counter < max && counter >= 0) result = 'Save your amount'
            if(min < 0) result = 'Incorrect value'
            // max < 0 | max <= min | max <= counter | min < 0 ? true : false
            return {...state,announcement:result}
        }
    }
}


type  setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value:number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload:{
           newMaxValue: value
        }
    } as const
}
type  setMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (value:number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload:{
           newMinValue: value
        }
    } as const
}
type  increaseCounterACType = ReturnType<typeof increaseCounterAC>
export const increaseCounterAC = () => {
    return {
        type: 'INCREASE-COUNTER',
    } as const
}

type  resetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = () => {
    return {
        type: 'RESET-COUNTER',
    } as const
}
type setAnnouncementACType = ReturnType<typeof setAnnouncementAC>
export const setAnnouncementAC = () => {
    return {
        type: 'CHANGE-ANNOUNCEMENT',
    } as const
}