import React from 'react';
import s from './Announcement.module.css'

type AnnouncementPropsType = {
    announcement:string
    error:boolean
}

const Announcement = (props:AnnouncementPropsType) => {
    return (
        <div>
            {props.error ?  <span className={s.red}>{props.announcement}</span> :  <span className={s.announcement}>{props.announcement}</span>}
             {/*<span className={s.announcement}>{props.announcement}</span>*/}
        </div>
    );
};

export default Announcement;