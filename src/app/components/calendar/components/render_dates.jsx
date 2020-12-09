import React, { useContext, useState } from 'react';
import { MyContext } from '../../../items/context';
import { Modal } from './modal';
import { GetMonthData } from '../../../items/state';
import { RenderFilter } from './filter';
import { RenderDate } from './render_date';

export function RenderDates({ id, type, year }) {

    const context = useContext(MyContext);
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(undefined);
    const [typeState, setTypeState] = useState(type);
    const [idState, setIdState] = useState(id);

    const toggleModal = () => {
        setShowModal(showModal => (!showModal));
    };
    const HandleOnClick = (newType) => {
        setTypeState(newType);
    };

    return <>
        <div className="fl_wrap">
            <RenderFilter
                typeState={typeState}
                idState={idState}
                setTypeState={setTypeState}
                setIdState={setIdState}
                HandleOnClick={HandleOnClick}
            />
        </div>
        <div className="cl_tablewrapper">
        <table>
            <tbody>
                {context.monthsOfYear.map((item) =>
                    <tr key={item.month}>
                        <td>{item.name}</td>
                        {GetMonthData(year, item.month).map((element) =>
                            <RenderDate
                                key={element.day}
                                id={idState}
                                type={typeState}
                                year={year}
                                month={element.month}
                                day={element.day}
                                setDate={setDate}
                            />
                        )}
                    </tr>
                )}
            </tbody>
        </table>
        </div>
        <Modal 
        id={idState} 
        type={typeState} 
        date={date} 
        showModal={showModal} 
        toggleModal={toggleModal} 
        setDate={setDate} />
    </>
}