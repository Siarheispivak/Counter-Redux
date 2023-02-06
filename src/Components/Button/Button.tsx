import React ,{MouseEvent} from 'react';
import s from './Button.module.css'


type ButtonType = {
    title:string
    callBack:()=>void
    disabled?:boolean
}

const Button = (props:ButtonType) => {

    const onClickHandler = (e:MouseEvent<HTMLButtonElement>) => {
        props.callBack()
    }
    return (
         <div className={s.button}>
             <button className={s.btn} disabled={props.disabled} onClick={onClickHandler}>
                 <span>{props.title}</span>
             </button>
        </div>

    );
};

export default Button;