import React from 'react';
import { useState } from 'react';
import { DateValue, IsFreeDate, GetDayName, PrevDates } from '../../../items/state';

export function RenderDate({ id, type, year, month, day, setDate }) {

    const [pick, setPick] = useState("cl_sp_wrap");

    const picked = () => {
        setPick("cl_picked")
    }
    const unPicked = () => {
        setPick("cl_sp_wrap")
    }

    const HandleClick = (id, type, year, month, day) => {
        if ((IsFreeDate(id, type, year, month, day) === false) || (PrevDates(year, month, day) === true))  {
            setDate(undefined);
        };
        if ((IsFreeDate(id, type, year, month, day) === true) &&  (PrevDates(year, month, day) === false))  {
            setDate({ year, month, day });
        };
    };

    return <td
        className={`${DateValue(id, type, year, month, day)}`}
        key={day}
        onClick={() => HandleClick(id, type, year, month, day)}
    >


        <span className={pick}
            onMouseUp={unPicked}
            onMouseDown={picked}
        >
            <span className="cl_day">
                {day}
            </span>
            <span className="cl_dayname">
                {GetDayName(year, month, day)}
            </span>

        </span>

    </td>

}