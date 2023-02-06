import React from 'react';
import Input from "./Input/Input";
import Button from "./Button/Button";

type SettingsType = {
    maxValue:number
    minValue:number
    newMaxValue:(value:number)=>void
    newMinValue:(value:number)=>void
    announcement:string
    error:boolean
    // disabled:boolean
    // getFromLocalStorage:()=>void
    // setToLocalStorage:()=>void
}

export const Settings = (props:SettingsType) => {
    return (
        <div>
            <div className={'settingsContainer'}  >
                <div className={'counter'}>
                    <div className='maxSet'>
                        <Input value={props.maxValue} onChange={props.newMaxValue} announcement={props.announcement} error={props.error}/>
                    </div>
                    <div className='minSet'>
                        <Input value={props.minValue} onChange={props.newMinValue} announcement={props.announcement} error={props.error}/>
                    </div>
                    {/*<div className="getAndSet">*/}
                    {/*    <Button disabled={props.disabled} title={'get'} callBack={props.getFromLocalStorage}/>*/}
                    {/*    <Button disabled={props.disabled} title={'set'} callBack={props.setToLocalStorage}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};
