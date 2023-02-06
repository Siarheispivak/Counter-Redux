import React, {ChangeEvent} from 'react';
import Announcement from "../Announcement/Announcement";
type InputPropsType = {
    onChange:(value:number)=>void
    announcement:string
    value:number
    error:boolean
}

const Input = (props:InputPropsType) => {
     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
         props.onChange(+(e.currentTarget.value))
    }
    return (
        <div>
            <input value={props.value} type={"number"} onChange={onChangeHandler}/>
            <Announcement announcement={props.announcement} error={props.error}/>
            {/*<span>{props.announcement}</span>*/}
        </div>
    );
};

export default Input;