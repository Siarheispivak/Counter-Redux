import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import Button from "./Components/Button/Button";
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings";
import {useDispatch, useSelector} from "react-redux";
import {CounterType, countReducer, setErrorAC, setMaxValueAC} from "./Reducers/counter-reducer";
import {storeType} from "./Store/Store";


function App() {
    // const state = useSelector<>()
    const [counter, setCounter] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [minValue, setMinValue] = useState(0)
    const [announcement, setAnnouncement] = useState('Choose amount')
    const [error, setError] = useState(false)

    useEffect(() => {
        let localStorageMaxValue = Number(localStorage.getItem('maxValue'))
        let localStorageMinValue = Number(localStorage.getItem('minValue'))
        setMaxValue(localStorageMaxValue)
        setMinValue(localStorageMinValue)
        setCounter(localStorageMaxValue)
    }, [])

    // let [counts, Dispatch] = useReducer<CounterType>(countReducer, {
    //     counter: 0,
    //     maxValue: 0,
    //     minValue: 0,
    //     errorStart: '',
    //     error: "",
    //     disable: false
    // })

  const counts = useSelector<storeType,CounterType>(state =>state.count)
const dispatch = useDispatch()

    console.log(counts.error)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }
    const resetCounter = () => {
        setCounter(minValue)
    }

    const newMaxValue = (value: number) => {
        // if(value === 34){
        //     dispatch(setErrorAC())
        // }
        dispatch(setErrorAC('max',value))
        dispatch(setMaxValueAC(value))
        setMaxValue(value)
        // setError(true)
        // if (value < 0) {
        //     setAnnouncement('Incorrect value')
        //     setError(true)
        // } else if (value <= minValue) {
        //     setAnnouncement('Incorrect value')
        //     setError(true)
        // } else {
        //     setAnnouncement('Save your amount')
        //     setMaxValue(value)
        //     // setError(false)
        // }

    }
    const newMinValue = (value: number) => {
        setError(true)
        if (value < maxValue && value >= 0) {
            setAnnouncement('Save your amount')
            // setError(false)
            setMinValue(value)
        } else if (value < 0) {

            setAnnouncement('Incorrect value')
            setError(true)
        } else {
            setAnnouncement('Incorrect value')
            setError(true)
        }
    }
    const setToLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('minValue', JSON.stringify(minValue))
    }
    const getFromLocalStorage = () => {
        let localStorageMaxValue = Number(localStorage.getItem('maxValue'))
        let localStorageMinValue = Number(localStorage.getItem('minValue'))

        setMaxValue(localStorageMaxValue)
        setMinValue(localStorageMinValue)
        setCounter(localStorageMaxValue)
    }

    const disabled = counter === maxValue
    const disabled2 = counter === minValue
    const disabled3 = minValue === Number(localStorage.getItem('minValue')) && maxValue === Number(localStorage.getItem('maxValue'))
    return (
        <>
            {/*<div className="snow"></div>*/}
            <div className={'App'}>
                <div className={'container'}>
                    <div className={'counterApp'}>
                        <Counter value={counter} maxValue={maxValue}/>
                        <div className={'buttonWrapper'}>
                            <Button disabled={error || counter === maxValue} title={'inc'} callBack={increaseCounter}/>
                            <Button disabled={error} title={'reset'} callBack={resetCounter}/>
                        </div>
                    </div>
                </div>
                <Settings
                    maxValue={maxValue}
                    minValue={minValue}
                    newMaxValue={newMaxValue}
                    newMinValue={newMinValue}
                    announcement={announcement}
                    error={error}
                    disabled={disabled3}
                    getFromLocalStorage={getFromLocalStorage}
                    setToLocalStorage={setToLocalStorage}
                />
            </div>
        </>


    );
}

export default App;
