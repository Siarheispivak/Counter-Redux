import React, {useState} from 'react';
import s from './Counter.module.css'

type CounterPropsType = {
    value:number
    maxValue:number
}

const Counter = (props:CounterPropsType) => {
    return (
        <div className={s.counter}>
            {props.value !== props.maxValue ? <span>{props.value}</span> : <span className={s.red}>{props.value}</span>}
        </div>
    );
};

export default Counter;