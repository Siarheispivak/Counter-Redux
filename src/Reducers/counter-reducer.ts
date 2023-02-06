export type CounterType = {
    counter: number,
    maxValue: number,
    minValue: number,
    error: string,
    disable: boolean
}
const initialState: CounterType = {
    counter: 0,
    maxValue: 1,
    minValue: 0,
    error: "",
    disable: false
}


type ActionsTypes =
    setMaxValueACType
    | setMinValueACType
    | increaseCounterACType
    | resetCounterACType
    | setErrorACType;

export const countReducer = (state: CounterType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'INCREASE-COUNTER': {
            return {...state, counter: state.counter + 1}
        }
        case 'RESET-COUNTER': {
            return {...state, counter: 0}
        }
        case 'SET-MAX-VALUE': {
            let max = action.payload.value;
            let min = state.minValue
            if (max < 0 || max <= min) {
                return {...state, maxValue: action.payload.value, disable: true}
            }
            return {...state, maxValue: action.payload.value}
        }
        case 'SET-MIN-VALUE': {
            let max = state.maxValue;
            let min = action.payload.value
            return !(min < max && min >= 0)
                ? {...state, error: 'error', errorStart: 'errorMin', minValue: action.payload.value, disable: true}
                : {...state, error: '', errorStart: '', minValue: action.payload.value, disable: false}
        }
        case 'SET-ERROR': {
            let max = action.payload.count;
            let min = state.minValue;

            return (min < 0 || max <= min) ? {...state, error: action.payload.value} : state
        }
        default:
            return state
    }
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

type  setMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (value: number) => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {
            value
        }
    } as const
}

type  setMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (value: number) => {
    return {
        type: 'SET-MIN-VALUE',
        payload: {
            value
        }
    } as const
}

type setErrorACType = ReturnType<typeof setErrorAC>
export const setErrorAC = (value: string, count: number) => {
    return {
        type: 'SET-ERROR',
        payload: {
            value,
            count
        }
    } as const
}

